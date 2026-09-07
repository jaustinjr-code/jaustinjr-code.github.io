import { Box, Skeleton, Typography } from "@mui/material";
import ArticleCard from "@components/ArticleCard";
import SectionHeading from "@components/SectionHeading";
import useArticles from "@hooks/useArticles";
import { FeaturedArticleLimit } from "@resources/data.js";
import { BodyMdSx, ElevatedPanelSx } from "@resources/styles.js";
import {
  ArticlesHeading,
  ArticlesSectionEyebrow,
  ArticlesUnavailableMessage,
} from "@resources/strings.js";

const CardGridSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
  gap: 3,
};

// Placeholder card shown in place of an ArticleCard while an async source is
// loading, so the grid reserves its final layout instead of the section
// jumping when the articles land.
function ArticleCardSkeleton() {
  return (
    <Box sx={{ ...ElevatedPanelSx, overflow: "hidden" }}>
      <Skeleton variant="rectangular" sx={{ aspectRatio: "16 / 9" }} />
      <Box sx={{ p: 3 }}>
        <Skeleton variant="text" width="40%" sx={{ mb: 2 }} />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="60%" sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={36} />
      </Box>
    </Box>
  );
}

// Publication feed block: a sub-heading above a responsive grid of article
// cards. It owns no article data of its own — `source` is handed straight to
// useArticles, so the same block renders a static list today and a fetched feed
// later. Renders nothing only once loading has settled with zero articles and
// no error — while loading it shows skeleton cards, and a failed fetch keeps
// the block with a short message rather than vanishing silently.
//
// Props:
//   source  — array of raw articles, or a (possibly async) function returning
//             one; defaults to the featured list
//   limit   — maximum number of cards to render
//   eyebrow, heading — block copy overrides
//   sx      — extra styles on the wrapper
export default function ArticleFeed({
  source,
  limit = FeaturedArticleLimit,
  eyebrow = ArticlesSectionEyebrow,
  heading = ArticlesHeading,
  sx,
}) {
  const { articles, isLoading, error } = useArticles({ source, limit });

  if (!isLoading && !error && articles.length === 0) return null;

  return (
    <Box sx={{ mt: { xs: 6, md: 8 }, ...sx }}>
      <SectionHeading
        eyebrow={eyebrow}
        heading={heading}
        level="sub"
        sx={{ mb: 4 }}
      />

      {isLoading ? (
        <Box sx={CardGridSx}>
          {Array.from({ length: limit ?? FeaturedArticleLimit }).map(
            (_, index) => (
              <ArticleCardSkeleton key={index} />
            ),
          )}
        </Box>
      ) : error && articles.length === 0 ? (
        <Typography sx={BodyMdSx}>{ArticlesUnavailableMessage}</Typography>
      ) : (
        <Box sx={CardGridSx}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Box>
      )}
    </Box>
  );
}
