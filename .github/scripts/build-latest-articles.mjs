// Turns a candidate list plus a human selection ("2,5,7") into the article data
// file the portfolio's "Latest Articles" section reads.
//
// Env:
//   CANDIDATES_JSON  Path to the file fetch-medium-articles.mjs produced (required)
//   SELECTION        Comma/space separated candidate positions (required)
//   ARTICLE_COUNT    How many positions the selection must contain (default 3)
//   OUTPUT_JSON      Path for the generated article data (required)
//   OUTPUT_MARKDOWN  Optional path for a Markdown preview of the selection

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const candidatesPath = requireEnv("CANDIDATES_JSON");
const outputJson = requireEnv("OUTPUT_JSON");
const outputMarkdown = process.env.OUTPUT_MARKDOWN || "";
const articleCount = positiveInt(process.env.ARTICLE_COUNT, 3);

const document = JSON.parse(await readFile(candidatesPath, "utf8"));
const candidates = Array.isArray(document.candidates) ? document.candidates : [];
if (candidates.length === 0) fail(`${candidatesPath} contains no candidates.`);

const positions = parseSelection(process.env.SELECTION, {
  articleCount,
  candidateCount: candidates.length,
});

const articles = positions.map((position) => {
  // Selections are 1-based positions, matching the numbering people see.
  const { position: _ignored, ...article } = candidates[position - 1];
  return article;
});

const output = {
  generatedAt: new Date().toISOString(),
  source: document.source,
  selection: positions,
  articles,
};

await mkdir(dirname(outputJson), { recursive: true });
await writeFile(outputJson, `${JSON.stringify(output, null, 2)}\n`, "utf8");

if (outputMarkdown) {
  await writeFile(outputMarkdown, renderMarkdown(output), "utf8");
}

console.log(
  `Wrote ${articles.length} article(s) to ${outputJson}: ${positions.join(", ")}.`,
);

/**
 * Validates a human-entered selection of candidate positions.
 * @param {string} value Raw selection, e.g. "2, 5, 7" or "2 5 7".
 * @param {{articleCount: number, candidateCount: number}} limits Validation limits.
 * @returns {number[]} The selected 1-based positions, in the order given.
 */
function parseSelection(value, { articleCount, candidateCount }) {
  const tokens = String(value ?? "")
    .split(/[\s,]+/)
    .filter(Boolean);

  if (tokens.length !== articleCount) {
    fail(
      `Expected exactly ${articleCount} article number(s), but got ${tokens.length}: "${value ?? ""}".`,
    );
  }

  const positions = tokens.map((token) => {
    const parsed = Number.parseInt(token, 10);
    if (!Number.isInteger(parsed) || String(parsed) !== token) {
      fail(`"${token}" is not a whole number.`);
    }
    if (parsed < 1 || parsed > candidateCount) {
      fail(`Article number ${parsed} is outside the range 1-${candidateCount}.`);
    }
    return parsed;
  });

  if (new Set(positions).size !== positions.length) {
    fail(`The same article cannot be selected twice: "${value}".`);
  }

  return positions;
}

/**
 * Renders the chosen articles as Markdown for the job summary.
 * @param {Object} output The generated article document.
 * @returns {string} Markdown.
 */
function renderMarkdown(output) {
  const entries = output.articles.map((article, index) => {
    const tags = article.categories.slice(0, 3).join(", ") || "—";
    return [
      `${index + 1}. **${escapeText(article.title)}**`,
      `   - Published: ${article.publishedLabel ?? "—"} · ${article.readingTimeMinutes} min read · Tags: ${escapeText(tags)}`,
      `   - Link: ${article.link}`,
      `   - Cover image: ${article.imageUrl ?? "_none found in the post_"}`,
      `   - Excerpt: ${escapeText(article.excerpt)}`,
    ].join("\n");
  });

  return ["### Selected articles", "", ...entries, ""].join("\n");
}

function escapeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
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

function fail(message) {
  console.error(`::error::${message}`);
  process.exit(1);
}
