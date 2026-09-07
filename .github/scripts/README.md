# Latest Articles workflow scripts

Scripts behind [`.github/workflows/update-latest-articles.yml`](../workflows/update-latest-articles.yml),
which reads the Medium RSS feed with
[`medium-rss-feed-parser`](https://github.com/jaustinjr-code/medium-rss-feed-parser)
and builds the data the site's "Latest Articles" section renders.

## How a run goes

1. **Fetch** — `fetch-medium-articles.mjs` parses the feed and normalizes the
   newest posts into `medium-candidates.json`, plus a numbered Markdown table
   that lands in the run summary.
2. **Pause** — `await-selection.cjs` opens an issue with that table and waits.
   Comment `/select 2 5 7` on it to choose, or `/cancel` to stop the run. Only
   maintainers can drive it, and the workflow closes the issue on its way out.
   Supply the `selection` input at dispatch time to skip the pause entirely.

   It runs through `actions/github-script`, which injects an authenticated
   Octokit client, so the workflow step is a two-line `require` bridge and the
   logic lives here. CommonJS is what that bridge takes, hence the `.cjs`.
3. **Build** — `build-latest-articles.mjs` writes the chosen posts to
   `client/src/resources/articles.json` and uploads it as the `latest-articles`
   artifact. Nothing is committed or deployed yet — that comes later.

## Generated data

`articles.json` holds the run's metadata and the chosen posts in display order:

```jsonc
{
  "generatedAt": "2026-02-04T18:12:03.114Z",
  "source": { "username": "@jaustinjr", "feedUrl": "...", "feedTitle": "...", "feedLink": "..." },
  "selection": [2, 1, 4],
  "articles": [
    {
      "id": "abc123002",              // Medium post id, from the feed guid
      "title": "Android BLE Without The Pain",
      "link": "https://medium.com/@jaustinjr/...",  // RSS tracking params stripped
      "author": "James Austin Jr.",
      "publishedAt": "2026-02-02T15:02:00.000Z",    // ISO 8601, for sorting
      "publishedLabel": "Feb 2, 2026",              // ready to render
      "categories": ["android", "kotlin"],          // Medium tags
      "readingTimeMinutes": 3,                      // estimated at 200 wpm
      "excerpt": "…",                               // plain text, ~220 chars
      "imageUrl": "https://cdn-images-1.medium.com/..." // cover image, or null
    }
  ]
}
```

Medium's feed ships the post body as HTML in `content:encoded` with no
`<description>`, so the excerpt and reading time are derived from that body with
markup stripped and entities decoded. The trailing view-tracking pixel is never
mistaken for a cover image, and a post with no image gets `imageUrl: null` — the
section needs a fallback for that case.

## Running the scripts locally

These scripts run on Node 24, matching the workflow.

```bash
cd .github/scripts
npm ci

MEDIUM_USERNAME='@jaustinjr' \
  OUTPUT_JSON=medium-candidates.json \
  OUTPUT_MARKDOWN=medium-candidates.md \
  node fetch-medium-articles.mjs

CANDIDATES_JSON=medium-candidates.json \
  SELECTION='2,1,4' \
  OUTPUT_JSON=../../client/src/resources/articles.json \
  node build-latest-articles.mjs
```

The parser reaches Medium through the AllOrigins proxy, so both the fetch step
and this local run need outbound access to `api.allorigins.win`.
