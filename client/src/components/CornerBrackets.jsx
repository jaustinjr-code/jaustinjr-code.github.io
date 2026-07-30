import { Box } from "@mui/material";
import { Accent } from "@resources/palette.js";
import { AccentTransitionSx } from "@resources/styles.js";

// Decorative "targeting" brackets pinned to opposite corners of a relatively
// positioned parent: a top-right and bottom-left L of hairline accent-dimmed
// borders. Purely visual — hidden from assistive tech.
//
// Props:
//   size — bracket arm length in px (default 32)
export default function CornerBrackets({ size = 32 }) {
  const bracketSx = {
    position: "absolute",
    width: size,
    height: size,
    pointerEvents: "none",
    ...AccentTransitionSx,
  };

  return (
    <>
      <Box
        aria-hidden
        sx={{
          ...bracketSx,
          top: 0,
          right: 0,
          borderTop: `1px solid ${Accent.dim(40)}`,
          borderRight: `1px solid ${Accent.dim(40)}`,
        }}
      />
      <Box
        aria-hidden
        sx={{
          ...bracketSx,
          bottom: 0,
          left: 0,
          borderBottom: `1px solid ${Accent.dim(40)}`,
          borderLeft: `1px solid ${Accent.dim(40)}`,
        }}
      />
    </>
  );
}
