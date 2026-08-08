import { Box } from "@mui/material";
import ArticleCard from "@components/ArticleCard";
import SectionHeading from "@components/SectionHeading";
import useArticles from "@hooks/useArticles";
import { FeaturedArticleLimit } from "@resources/data.js";
import { ArticlesHeading, ArticlesSectionEyebrow } from "@resources/strings.js";

// Publication feed block: a sub-heading above a responsive grid of article
// cards. It owns no article data of its own — `source` is handed straight to
// useArticles, so the same block renders a static list today and a fetched feed
// later. Renders nothing when there are no articles to show.
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
  const { articles } = useArticles({ source, limit });

  if (articles.length === 0) return null;

  return (
    <Box sx={{ mt: { xs: 6, md: 8 }, ...sx }}>
      <SectionHeading
        eyebrow={eyebrow}
        heading={heading}
        level="sub"
        sx={{ mb: 4 }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Box>
    </Box>
  );
}
