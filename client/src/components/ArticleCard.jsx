import { Box, Typography } from "@mui/material";
import AccentButton from "@components/AccentButton";
import HoverRevealImage from "@components/HoverRevealImage";
import { Accent } from "@resources/palette.js";
import {
  AccentHoverBorderSx,
  BodyMdSx,
  ElevatedPanelSx,
  HeadlineMdSx,
  HoverRevealImageHoverSx,
  LabelMicroSx,
} from "@resources/styles.js";
import { ArticleReadCta } from "@resources/strings.js";

// Presentational card for a single article, agnostic of where the article came
// from. It renders the normalized shape produced by useArticles:
//
//   required — imageLink, title, link
//   optional — tags, description, imageAlt
//
// Read time is carried through useArticles but deliberately not rendered: the
// estimate is derived from Medium's feed body, which is only a teaser for
// publication-hosted posts, so it reads "1 MIN READ" on full-length articles.
//
// Optional metadata is rendered only when supplied, so a feed that omits it
// still produces a complete card.
//
// Props:
//   article — the normalized article
//   ctaText — call-to-action label (defaults to the Medium wording)
export default function ArticleCard({ article, ctaText = ArticleReadCta }) {
  const { imageLink, imageAlt, title, link, description, tags } = article;

  const primaryTag = tags?.[0];

  const handleReadClick = () => {
    console.debug("ArticleCard: read link clicked", title);
  };

  return (
    <Box
      sx={{
        ...ElevatedPanelSx,
        ...AccentHoverBorderSx,
        ...HoverRevealImageHoverSx,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <HoverRevealImage src={imageLink} alt={imageAlt} />

      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {primaryTag && (
          <Typography
            component="span"
            sx={{ ...LabelMicroSx, color: Accent.dynamic, mb: 2 }}
          >
            {primaryTag}
          </Typography>
        )}

        <Typography component="h4" sx={{ ...HeadlineMdSx, mb: 1.5 }}>
          {title}
        </Typography>

        {description && (
          <Typography sx={{ ...BodyMdSx, fontSize: "0.875rem", mb: 3 }}>
            {description}
          </Typography>
        )}

        <AccentButton
          variant="tonal"
          href={link}
          target="_blank"
          rel="noreferrer"
          onClick={handleReadClick}
          sx={{ mt: "auto", width: "100%", px: 2, py: 1 }}
        >
          {ctaText}
        </AccentButton>
      </Box>
    </Box>
  );
}
