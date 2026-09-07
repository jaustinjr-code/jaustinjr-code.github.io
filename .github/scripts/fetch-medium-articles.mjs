// Fetches the Medium RSS feed for an author and normalizes each post into the
// shape the portfolio's "Latest Articles" section consumes. Writes two files:
// a machine-readable candidate list (JSON) and a human-readable table
// (Markdown) that the workflow posts for the selection step.
//
// Env:
//   MEDIUM_USERNAME  Medium handle, e.g. "@jaustinjr" (required)
//   CANDIDATE_LIMIT  How many of the newest posts to offer (default 10)
//   OUTPUT_JSON      Path for the candidate JSON (default candidates.json)
//   OUTPUT_MARKDOWN  Path for the candidate table (default candidates.md)

import { appendFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { parser, errors } from "medium-rss-feed-parser";

const FEED_URL_TEMPLATE = "https://medium.com/feed/";
// Medium's feed has no reading-time field; estimate from the post body.
const WORDS_PER_MINUTE = 200;
const EXCERPT_MAX_CHARS = 220;
// The feed ends every post with a 1x1 view-tracking pixel — never a cover image.
const TRACKING_IMAGE_PATTERN = /medium\.com\/_\/stat/i;
// RssError usually wraps a transient network failure, so retry before failing.
const FETCH_ATTEMPTS = 3;
const RETRY_BACKOFF_MS = 3000;

const username = requireEnv("MEDIUM_USERNAME");
const candidateLimit = positiveInt(process.env.CANDIDATE_LIMIT, 10);
const outputJson = process.env.OUTPUT_JSON || "candidates.json";
const outputMarkdown = process.env.OUTPUT_MARKDOWN || "candidates.md";

const feed = await fetchFeedWithRetry(username);
const candidates = feed.items
  .slice(0, candidateLimit)
  .map((item, index) => normalizeArticle(item, index + 1));

if (candidates.length === 0) {
  fail(`The Medium feed for ${username} returned no posts.`);
}

const document = {
  generatedAt: new Date().toISOString(),
  source: {
    username,
    feedUrl: `${FEED_URL_TEMPLATE}${username}`,
    feedTitle: feed.title ?? null,
    feedLink: cleanLink(feed.link),
  },
  candidates,
};

await writeFile(outputJson, `${JSON.stringify(document, null, 2)}\n`, "utf8");
await writeFile(outputMarkdown, renderMarkdown(document), "utf8");

appendOutput("candidate_count", String(candidates.length));
console.log(`Fetched ${candidates.length} candidate article(s) for ${username}.`);

/**
 * Fetches and parses the feed, retrying the transient RSS failures the parser
 * documents as retryable.
 * @param {string} authorUsername Medium handle, e.g. "@jaustinjr".
 * @returns {Promise<Object>} The parsed feed.
 */
async function fetchFeedWithRetry(authorUsername) {
  for (let attempt = 1; attempt <= FETCH_ATTEMPTS; attempt += 1) {
    try {
      return await parser.parseFeed(authorUsername);
    } catch (error) {
      if (error instanceof errors.UnknownAuthorError) {
        fail(
          `"${authorUsername}" is not a valid Medium handle. It must start with "@" and use only letters, numbers, "." or "_".`,
        );
      }

      const retryable = error instanceof errors.RssError;
      if (!retryable || attempt === FETCH_ATTEMPTS) {
        fail(
          `Could not read the Medium feed for ${authorUsername} after ${attempt} attempt(s): ${error.message}`,
        );
      }

      console.log(
        `Attempt ${attempt}/${FETCH_ATTEMPTS} failed (${error.message}). Retrying...`,
      );
      await sleep(RETRY_BACKOFF_MS * attempt);
    }
  }
}

/**
 * Reduces a parsed feed item to the fields the website renders.
 * @param {Object} item A parsed feed item.
 * @param {number} position 1-based position in the candidate list.
 * @returns {Object} The normalized article record.
 */
function normalizeArticle(item, position) {
  const link = cleanLink(item.link);
  const body = item["content:encoded"] || item.content || item.contentSnippet;
  const publishedAt = toIsoDate(item.isoDate || item.pubDate);

  // Medium's feed carries the post as HTML in content:encoded and ships no
  // <description>, so rss-parser has no contentSnippet to offer — strip the
  // markup here rather than leaning on a field that is usually undefined.
  const plainText = item.contentSnippet
    ? collapseWhitespace(item.contentSnippet)
    : toPlainText(body);

  return {
    position,
    id: toArticleId(item.guid, link, position),
    title: toText(item.title) || "Untitled",
    link,
    author: toText(item.creator) || null,
    publishedAt,
    publishedLabel: toPublishedLabel(publishedAt),
    categories: normalizeCategories(item.categories),
    readingTimeMinutes: toReadingTime(plainText),
    excerpt: toExcerpt(plainText),
    imageUrl: pickCoverImage(item.images),
  };
}

/**
 * Picks the first non-tracking image in a post as its cover image.
 * @param {string[]} images Image sources found in the post body.
 * @returns {string|null} The cover image URL, or null when the post has none.
 */
function pickCoverImage(images) {
  if (!Array.isArray(images)) return null;
  return (
    images.find(
      (source) =>
        typeof source === "string" &&
        /^https:\/\//i.test(source) &&
        !TRACKING_IMAGE_PATTERN.test(source),
    ) ?? null
  );
}

/**
 * Strips the RSS tracking query string Medium appends to every post link.
 * @param {string} value A post or feed URL.
 * @returns {string|null} The bare URL, or null when it cannot be parsed.
 */
function cleanLink(value) {
  if (typeof value !== "string" || value.trim() === "") return null;
  try {
    const url = new URL(value.trim());
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return value.trim();
  }
}

/**
 * Derives a stable id from Medium's guid (".../p/<postId>") with the post link
 * and list position as fallbacks.
 * @param {string} guid The feed item guid.
 * @param {string|null} link The cleaned post link.
 * @param {number} position 1-based position in the candidate list.
 * @returns {string} The article id.
 */
function toArticleId(guid, link, position) {
  const source = cleanLink(guid) || link;
  if (!source) return `article-${position}`;
  const lastSegment = source.split("/").filter(Boolean).pop();
  return lastSegment || `article-${position}`;
}

function normalizeCategories(categories) {
  if (!Array.isArray(categories)) return [];
  return categories.map((category) => toText(category)).filter(Boolean);
}

function toIsoDate(value) {
  const date = new Date(value ?? "");
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function toPublishedLabel(isoDate) {
  if (!isoDate) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

/**
 * Strips markup and decodes entities so post bodies read as prose.
 * @param {string} html The post body as HTML.
 * @returns {string} The plain-text body.
 */
function toPlainText(html) {
  const stripped = String(html ?? "")
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(
      /<\/(p|div|h[1-6]|li|ul|ol|blockquote|figure|figcaption|pre|section)>/gi,
      " ",
    )
    .replace(/<[^>]*>/g, "");
  return collapseWhitespace(decodeEntities(stripped));
}

function decodeEntities(value) {
  return String(value).replace(/&(#\d+|#x[0-9a-f]+|[a-z]+);/gi, (match, entity) => {
    const named = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      nbsp: " ",
      hellip: "…",
      mdash: "—",
      ndash: "–",
      lsquo: "\u2018",
      rsquo: "\u2019",
      ldquo: "\u201c",
      rdquo: "\u201d",
    };
    if (!entity.startsWith("#")) return named[entity.toLowerCase()] ?? match;

    const isHex = /^#x/i.test(entity);
    const code = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
    try {
      return String.fromCodePoint(code);
    } catch {
      return match;
    }
  });
}

function toReadingTime(plainText) {
  const words = plainText.split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toExcerpt(plainText) {
  const text = plainText.replace(/\s*Continue reading on Medium\s*»?\.?$/i, "");
  if (text.length <= EXCERPT_MAX_CHARS) return text;

  const clipped = text.slice(0, EXCERPT_MAX_CHARS);
  const lastSpace = clipped.lastIndexOf(" ");
  const trimmed = clipped.slice(0, lastSpace > 0 ? lastSpace : clipped.length);
  return `${trimmed.replace(/[\s.,;:!?—-]+$/, "")}…`;
}

/**
 * Normalizes a plain-text feed field. Medium wraps titles, authors and tags in
 * CDATA with their entities still escaped, so they need decoding too.
 * @param {string} value The raw field value.
 * @returns {string} The decoded, whitespace-collapsed value.
 */
function toText(value) {
  return collapseWhitespace(decodeEntities(String(value ?? "")));
}

function collapseWhitespace(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Renders the candidate list as a Markdown table for the job summary and the
 * selection issue.
 * @param {Object} document The candidate document.
 * @returns {string} Markdown.
 */
function renderMarkdown(document) {
  const rows = document.candidates.map((candidate) => {
    const tags = candidate.categories.slice(0, 3).join(", ") || "—";
    return `| **${candidate.position}** | ${escapeCell(candidate.title)} | ${candidate.publishedLabel ?? "—"} | ${candidate.readingTimeMinutes} min | ${escapeCell(tags)} | [Open](${candidate.link}) |`;
  });

  return [
    `### Latest posts from ${escapeCell(document.source.feedTitle || document.source.username)}`,
    "",
    "| # | Title | Published | Read | Tags | Link |",
    "| :-- | :-- | :-- | :-- | :-- | :-- |",
    ...rows,
    "",
  ].join("\n");
}

function escapeCell(value) {
  return collapseWhitespace(value).replace(/\|/g, "\\|");
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value || value.trim() === "") fail(`Missing required input: ${name}.`);
  return value.trim();
}

function positiveInt(value, fallback) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function appendOutput(name, value) {
  if (!process.env.GITHUB_OUTPUT) return;
  // Delimited form, per the Actions output file format.
  const delimiter = `EOF_${name}_${Date.now()}`;
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `${name}<<${delimiter}\n${value}\n${delimiter}\n`,
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fail(message) {
  console.error(`::error::${message}`);
  process.exit(1);
}
