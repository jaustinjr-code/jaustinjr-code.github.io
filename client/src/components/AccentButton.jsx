import { Button } from "@mui/material";
import { Colors } from "@resources/palette";

// Two button treatments recur throughout the design:
//  - "solid":   the green pill call-to-action (nav, hero, writing, contact)
//  - "outline": a bordered secondary action that turns green on hover
// Centralizing them here keeps every CTA visually consistent.
const VARIANT_SX = {
  solid: {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    "&:hover": { backgroundColor: "primary.light" },
  },
  outline: {
    backgroundColor: "transparent",
    color: Colors.textPrimary,
    border: `1px solid ${Colors.border}`,
    "&:hover": {
      borderColor: "primary.main",
      color: "primary.main",
      backgroundColor: "transparent",
    },
  },
};

export function AccentButton({ variant = "solid", sx, children, ...props }) {
  return (
    <Button
      disableElevation
      sx={{
        fontWeight: variant === "solid" ? 700 : 600,
        fontSize: 15,
        px: 3.25,
        py: 1.75,
        borderRadius: 2.5,
        ...VARIANT_SX[variant],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default AccentButton;
