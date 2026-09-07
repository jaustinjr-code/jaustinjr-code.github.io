import { useEffect, useMemo, useRef, useState } from "react";
import { LatestArticles } from "@resources/data.js";

// http(s) only for absolute URLs — blocks javascript:/data: values from a
// feed reaching an href or img src. A same-origin relative path (how a
// bundler resolves a locally imported image, e.g. "/assets/foo-a1b2.jpg")
// has no scheme to check and is safe by construction, so it's allowed as-is.
function isSafeUrl(value) {
  if (typeof value !== "string" || !value) return false;
  if (/^(\.\.?\/|\/(?!\/))/.test(value)) return true;
  try {
    const { protocol } = new URL(value);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

// Adapter layer between whatever produces articles and what the UI renders.
//
// The display contract is deliberately small: an article needs an image, a
// title, and a link. Everything else (tags, read time, description, published
// date, author) is optional metadata that the card shows only when present, so
// a feed missing those fields still renders correctly.
//
// Field aliases cover the naming used by RSS-shaped sources (Medium's feed and
// medium-rss-feed-parser both expose `thumbnail`/`categories`/`pubDate`), which
// is why swapping the static list for a fetched feed needs no component change.
export function normalizeArticle(rawArticle) {
  if (!rawArticle) return null;

  const title = rawArticle.title;
  const link = rawArticle.link ?? rawArticle.url;
  const imageLink =
    rawArticle.imageLink ?? rawArticle.thumbnail ?? rawArticle.image;

  // The three required fields — drop anything that cannot be displayed, and
  // anything whose link/image isn't a safe scheme to hand to href/img src.
  if (!title || !isSafeUrl(link) || !isSafeUrl(imageLink)) {
    console.debug(
      "[useArticles] skipping article with missing or unsafe fields",
      title,
    );
    return null;
  }

  const tags = rawArticle.tags ?? rawArticle.categories ?? [];
  const publishedAt = rawArticle.publishedAt ?? rawArticle.pubDate;
  const parsedPublishedAt = publishedAt ? new Date(publishedAt) : undefined;

  return {
    id: rawArticle.id ?? rawArticle.guid ?? link,
    title,
    link,
    imageLink,
    // Decorative by default — the card title right below already carries
    // this text, so a screen reader shouldn't announce it twice. Feeds that
    // supply a real description of the image can still override it.
    imageAlt: rawArticle.imageAlt ?? "",
    description: rawArticle.description ?? rawArticle.snippet,
    tags: Array.isArray(tags) ? tags : [tags],
    readTimeMinutes: rawArticle.readTimeMinutes ?? rawArticle.readTime,
    publishedAt:
      parsedPublishedAt && !Number.isNaN(parsedPublishedAt.getTime())
        ? parsedPublishedAt
        : undefined,
    author: rawArticle.author ?? rawArticle.creator,
  };
}

// Supplies normalized articles to the UI.
//
// `source` is either an array of raw articles (by default the list the Update
// Latest Articles workflow generates) or a function returning an array or a
// promise of one — the seam an on-demand fetcher plugs into without touching
// the components.
// `limit` caps how many articles are returned. `refreshKey` triggers a
// re-fetch of an async source when it changes; the source itself is read
// through a ref rather than depended on, since an inline function (e.g.
// `source={() => fetchMediumFeed()}`) gets a new identity every render and
// would otherwise re-fire the fetch effect on every render it causes.
//
// Returns { articles, isLoading, error }.
export default function useArticles({
  source = LatestArticles,
  limit,
  refreshKey,
} = {}) {
  const isAsyncSource = typeof source === "function";
  const sourceRef = useRef(source);
  sourceRef.current = source;

  const [fetchedArticles, setFetchedArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(isAsyncSource);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAsyncSource) {
      setFetchedArticles(null);
      setIsLoading(false);
      setError(null);
      return undefined;
    }

    let isCurrent = true;
    setIsLoading(true);
    setError(null);

    Promise.resolve()
      .then(() => sourceRef.current())
      .then((result) => {
        if (!isCurrent) return;
        setFetchedArticles(result ?? []);
        setIsLoading(false);
      })
      .catch((caughtError) => {
        if (!isCurrent) return;
        console.debug("[useArticles] source failed", caughtError);
        setError(caughtError);
        setFetchedArticles([]);
        setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [isAsyncSource, refreshKey]);

  const articles = useMemo(() => {
    const rawArticles = isAsyncSource
      ? (fetchedArticles ?? [])
      : sourceRef.current;
    const normalized = (rawArticles ?? [])
      .map(normalizeArticle)
      .filter(Boolean);
    return typeof limit === "number" ? normalized.slice(0, limit) : normalized;
  }, [fetchedArticles, isAsyncSource, limit]);

  return { articles, isLoading, error };
}
