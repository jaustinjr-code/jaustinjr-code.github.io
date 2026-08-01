import { Box, Container } from "@mui/material";
import {
  CONTENT_MAX_WIDTH,
  SECTION_PADDING_X,
  SECTION_PADDING_Y,
} from "@resources/styles.js";

// The outer wrapper every page section shares: anchor id for hash navigation,
// full-bleed background, mobile-first vertical rhythm, and a centered
// max-width content column. Sections are fully self-contained, so reordering
// the page is just moving a <XSection /> line in PortfolioPage.
//
// Props:
//   id          — anchor / hash-route target
//   background  — CSS color for the full-bleed band (defaults to transparent
//                 so the global grid canvas shows through)
//   sx          — extra styles for the outer band (e.g. overflow, position)
//   contentSx   — extra styles for the inner content column
export default function SectionShell({
  id,
  background,
  sx,
  contentSx,
  children,
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundColor: background ?? "transparent",
        py: SECTION_PADDING_Y,
        position: "relative",
        ...sx,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          px: SECTION_PADDING_X,
          position: "relative",
          zIndex: 1,
          ...contentSx,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
