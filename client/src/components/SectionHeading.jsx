import { Box, Typography } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { HeadlineMdSx, HeadlineXlSx, LabelCapsSx } from "@resources/styles.js";

// Standard section header: a monospace uppercase eyebrow kicker above a
// display headline.
//
// Props:
//   eyebrow      — the small mono kicker text
//   heading      — the display headline text
//   level        — "section" (default, h2 at display size) or "sub" (h3 at
//                  card-title size, for a block nested inside a section)
//   align        — "left" (default) or "center"
//   eyebrowColor — overrides the muted kicker color (e.g. the live accent)
//   sx           — extra styles on the wrapper
const HeadingLevels = {
  section: { component: "h2", typeSx: HeadlineXlSx },
  sub: { component: "h3", typeSx: HeadlineMdSx },
};

export default function SectionHeading({
  eyebrow,
  heading,
  level = "section",
  align = "left",
  eyebrowColor,
  sx,
}) {
  const { component, typeSx } = HeadingLevels[level] ?? HeadingLevels.section;

  return (
    <Box sx={{ textAlign: align, ...sx }}>
      <Typography
        component="span"
        sx={{ ...LabelCapsSx, color: eyebrowColor ?? Colors.codeComment }}
      >
        {eyebrow}
      </Typography>
      <Typography component={component} sx={{ ...typeSx, mt: 1.5 }}>
        {heading}
      </Typography>
    </Box>
  );
}
