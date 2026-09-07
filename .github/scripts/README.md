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
   `client/src/resources/articles.json` on top of the deploy branch (`main` by
   default), uploads it as the `latest-articles` artifact, and opens a pull
   request with the change. Merging that PR pushes to `main`, which triggers
   the Pages deploy workflow — that is the whole deployment path. If the
   selection already matches what is committed, no PR is opened.

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
      "readTimeMinutes": 3,                         // estimated at 200 wpm
      "description": "…",                           // plain text, ~220 chars
      "imageLink": "https://cdn-images-1.medium.com/..." // cover image, or null
    }
  ]
}
```

The field names are the ones `client/src/hooks/useArticles.jsx` reads, so the
file drops straight into `ArticleFeed`'s `source` with no adapter in between.
`client/src/resources/data.js` exports `LatestArticles`, which uses this file
when it holds anything and falls back to the curated `FeaturedArticles` list
while it is empty, so the section is never blank.

Medium's feed ships the post body as HTML in `content:encoded` with no
`<description>`, so the description and reading time are derived from that body
with markup stripped and entities decoded. The trailing view-tracking pixel is
never mistaken for a cover image.

A post with no cover image gets `imageLink: null`, and `useArticles` drops any
article without a usable image — the card is built around one. The candidate
table therefore marks which posts have an image, and the build step logs a
warning if a pick has none, since the section would otherwise render a card
short.

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

The commit-and-pull-request step lives in the workflow rather than these
scripts, so running them locally only rewrites the file:

```bash
cd client && npm run dev   # see the result before committing
```

The parser reaches Medium through the AllOrigins proxy, so both the fetch step
and this local run need outbound access to `api.allorigins.win`.
