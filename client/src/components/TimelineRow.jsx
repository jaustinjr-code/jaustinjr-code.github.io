import { Box, Typography } from "@mui/material";
import GlowDot from "@components/GlowDot";
import { Accent, AccentSecondaryBright, Colors } from "@resources/palette.js";
import {
  AccentTransitionSx,
  BodyMdSx,
  HeadlineMdSx,
  LabelCapsSx,
} from "@resources/styles.js";

// One entry on the professional timeline: a period chip, role title, and
// summary on one side of the timeline axis with a metric card slot on the
// other. Mobile stacks everything in a single column beside the left-edge
// line; md+ splits into two columns around a centered node.
//
// Props:
//   period   — small caps date-range chip text
//   title    — role / organization title
//   summary  — short description under the title
//   emphasis — "primary" (live accent + glowing node, default) or
//              "secondary" (teal accent, no glow)
//   flip     — on md+, mirrors the layout (text right / metric left)
//   sx       — extra styles on the row (e.g. group-hover rules)
//   children — the metric card slot
export default function TimelineRow({
  period,
  title,
  summary,
  emphasis = "primary",
  flip = false,
  sx,
  children,
}) {
  const isPrimary = emphasis === "primary";
  const accentColor = isPrimary ? Accent.dynamic : AccentSecondaryBright;

  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        columnGap: { md: 6 },
        rowGap: 3,
        // Clears the left-edge line on mobile; the axis is centered on md+.
        pl: { xs: 3, md: 0 },
        ...sx,
      }}
    >
      {/* Node sitting on the timeline axis. */}
      <GlowDot
        size={8}
        color={accentColor}
        glow={isPrimary}
        sx={{
          position: "absolute",
          top: 4,
          left: { xs: -4, md: "50%" },
          transform: { md: "translateX(-50%)" },
        }}
      />

      {/* Text block: period chip, title, summary. */}
      <Box
        sx={{
          order: { md: flip ? 2 : 1 },
          textAlign: { md: flip ? "left" : "right" },
          pr: { md: flip ? 0 : 6 },
          pl: { md: flip ? 6 : 0 },
        }}
      >
        <Typography
          component="span"
          sx={{
            ...LabelCapsSx,
            display: "inline-block",
            px: 1.5,
            py: 0.75,
            color: accentColor,
            backgroundColor: isPrimary ? Accent.dim(10) : Colors.surfaceContainer,
            borderRadius: "2px",
            ...AccentTransitionSx,
          }}
        >
          {period}
        </Typography>
        <Typography component="h3" sx={{ ...HeadlineMdSx, mt: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ ...BodyMdSx, mt: 1 }}>{summary}</Typography>
      </Box>

      {/* Metric card slot, vertically centered against the text block. */}
      <Box
        sx={{
          order: { md: flip ? 1 : 2 },
          pl: { md: flip ? 0 : 6 },
          pr: { md: flip ? 6 : 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
