import { Button } from "@mui/material";
import { Accent, Colors } from "@resources/palette.js";
import { AccentTransitionSx, LabelCapsSx } from "@resources/styles.js";

// The design's button treatments in one reusable component:
//   variant="solid" — live-accent fill with dark text (primary actions)
//   variant="ghost" — transparent with a subtle outline (secondary actions)
//   variant="tonal" — accent-tinted wash and outline that fills in on hover
//                     (in-card calls to action, e.g. the article feed)
// Sharp corners, monospace caps label, and wide tracking per the design brief.
// Accepts every MUI Button prop (href, onClick, startIcon, ...).
const VariantStyles = {
  solid: {
    backgroundColor: Accent.dynamic,
    color: Colors.onAccent,
    "&:hover": {
      backgroundColor: Accent.dynamic,
      filter: "brightness(1.1)",
    },
  },
  ghost: {
    border: "1px solid rgba(59, 73, 76, 0.3)",
    color: Colors.textPrimary,
    "&:hover": {
      backgroundColor: Colors.surfaceContainer,
    },
  },
  tonal: {
    backgroundColor: Accent.dim(10),
    border: `1px solid ${Accent.dim(30)}`,
    color: Accent.dynamic,
    "&:hover": {
      backgroundColor: Accent.dynamic,
      color: Colors.onAccent,
    },
  },
};

export default function AccentButton({ variant = "solid", sx, children, ...props }) {
  const variantSx = VariantStyles[variant] ?? VariantStyles.solid;

  return (
    <Button
      disableElevation
      sx={{
        ...LabelCapsSx,
        ...AccentTransitionSx,
        letterSpacing: "0.15em",
        px: 4,
        py: 2,
        borderRadius: 0,
        ...variantSx,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
