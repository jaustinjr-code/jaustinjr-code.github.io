import { useEffect, useMemo, useState } from "react";
import { FeaturedArticles } from "@resources/data.js";

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

  // The three required fields — drop anything that cannot be displayed.
  if (!title || !link || !imageLink) {
    console.debug("[useArticles] skipping article with missing fields", title);
    return null;
  }

  const tags = rawArticle.tags ?? rawArticle.categories ?? [];
  const publishedAt = rawArticle.publishedAt ?? rawArticle.pubDate;

  return {
    id: rawArticle.id ?? rawArticle.guid ?? link,
    title,
    link,
    imageLink,
    imageAlt: rawArticle.imageAlt ?? title,
    description: rawArticle.description ?? rawArticle.snippet,
    tags: Array.isArray(tags) ? tags : [tags],
    readTimeMinutes: rawArticle.readTimeMinutes ?? rawArticle.readTime,
    publishedAt: publishedAt ? new Date(publishedAt) : undefined,
    author: rawArticle.author ?? rawArticle.creator,
  };
}

// Supplies normalized articles to the UI.
//
// `source` is either an array of raw articles (the default static list) or a
// function returning an array or a promise of one — the seam a future
// medium-rss-feed-parser fetcher plugs into without touching the components.
// `limit` caps how many articles are returned.
//
// Returns { articles, isLoading, error }.
export default function useArticles({
  source = FeaturedArticles,
  limit,
} = {}) {
  const isAsyncSource = typeof source === "function";
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
      .then(() => source())
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
  }, [isAsyncSource, source]);

  const articles = useMemo(() => {
    const rawArticles = isAsyncSource ? (fetchedArticles ?? []) : source;
    const normalized = (rawArticles ?? [])
      .map(normalizeArticle)
      .filter(Boolean);
    return typeof limit === "number" ? normalized.slice(0, limit) : normalized;
  }, [fetchedArticles, isAsyncSource, limit, source]);

  return { articles, isLoading, error };
}
