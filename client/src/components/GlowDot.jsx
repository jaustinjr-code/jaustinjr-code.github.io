import { Box } from "@mui/material";
import { Accent } from "@resources/palette.js";
import { AccentTransitionSx } from "@resources/styles.js";

// Small glowing circle used for the brand mark and timeline nodes.
//
// Props:
//   color — dot color (defaults to the live accent)
//   size  — diameter in px (default 12)
//   glow  — whether to render the outer glow (default true)
export default function GlowDot({ color = Accent.dynamic, size = 12, glow = true, sx }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: glow ? `0 0 12px ${color}` : "none",
        flexShrink: 0,
        ...AccentTransitionSx,
        ...sx,
      }}
    />
  );
}
