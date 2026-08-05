import { Box, Typography } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { HeadlineXlSx, LabelCapsSx } from "@resources/styles.js";

// Standard section header: a monospace uppercase eyebrow kicker above a
// display headline.
//
// Props:
//   eyebrow      — the small mono kicker text
//   heading      — the display headline text
//   align        — "left" (default) or "center"
//   eyebrowColor — overrides the muted kicker color (e.g. the live accent)
//   sx           — extra styles on the wrapper
export default function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  eyebrowColor,
  sx,
}) {
  return (
    <Box sx={{ textAlign: align, ...sx }}>
      <Typography
        component="span"
        sx={{ ...LabelCapsSx, color: eyebrowColor ?? Colors.codeComment }}
      >
        {eyebrow}
      </Typography>
      <Typography component="h2" sx={{ ...HeadlineXlSx, mt: 1.5 }}>
        {heading}
      </Typography>
    </Box>
  );
}
