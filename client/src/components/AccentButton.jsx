import { Button } from "@mui/material";
import { Accent, Colors } from "@resources/palette.js";
import { AccentTransitionSx, LabelCapsSx } from "@resources/styles.js";

// The design's two button treatments in one reusable component:
//   variant="solid" — live-accent fill with dark text (primary actions)
//   variant="ghost" — transparent with a subtle outline (secondary actions)
// Sharp corners, monospace caps label, and wide tracking per the design brief.
// Accepts every MUI Button prop (href, onClick, startIcon, ...).
export default function AccentButton({ variant = "solid", sx, children, ...props }) {
  const variantSx =
    variant === "solid"
      ? {
          backgroundColor: Accent.dynamic,
          color: Colors.onAccent,
          "&:hover": {
            backgroundColor: Accent.dynamic,
            filter: "brightness(1.1)",
          },
        }
      : {
          border: "1px solid rgba(59, 73, 76, 0.3)",
          color: Colors.textPrimary,
          "&:hover": {
            backgroundColor: Colors.surfaceContainer,
          },
        };

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
