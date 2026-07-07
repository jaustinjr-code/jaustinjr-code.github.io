import { Box } from "@mui/material";

// A soft, blurred, slowly-pulsing radial gradient blob used as ambient
// background decoration behind the hero. Purely decorative and non-interactive.
export function GlowOrb({ size, color, animation, sx }) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: "blur(20px)",
        pointerEvents: "none",
        animation,
        ...sx,
      }}
    />
  );
}

export default GlowOrb;
