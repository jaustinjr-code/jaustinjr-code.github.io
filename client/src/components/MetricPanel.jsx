import { Box } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { AccentTransitionSx } from "@resources/styles.js";

// Tonal metric card used inside timeline rows: padded slate panel whose depth
// comes from a low-contrast border that brightens on interaction, never from
// shadows. Hover can be self-contained (hoverBorderColor) or driven by an
// ancestor group-hover rule targeting the panel's className.
//
// Props:
//   background       — panel surface color (defaults to the elevated slate)
//   borderColor      — resting 1px border color
//   hoverBorderColor — optional border color when the panel itself is hovered
//   className        — hook for ancestor-driven group-hover border rules
//   sx               — extra styles on the panel
export default function MetricPanel({
  background = Colors.surfaceElevated,
  borderColor = "rgba(59, 73, 76, 0.3)", // outlineVariant at 30%
  hoverBorderColor,
  className,
  sx,
  children,
}) {
  return (
    <Box
      className={className}
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: 3, md: 4 },
        backgroundColor: background,
        border: `1px solid ${borderColor}`,
        borderRadius: "4px",
        ...AccentTransitionSx,
        ...(hoverBorderColor && {
          "&:hover": { borderColor: hoverBorderColor },
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
