import { useState } from "react";
import { Box } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { HOVER_REVEAL_IMAGE_CLASS } from "@resources/styles.js";

// Media thumbnail that renders in grayscale at rest and fades to full color
// while its card is hovered — the design's treatment for editorial imagery.
// The hovering ancestor supplies the reveal by spreading
// HoverRevealImageHoverSx (see styles.js). Touch devices have no hover state,
// so they get the full-color image outright rather than a permanently
// desaturated one. A broken/expired `src` (imageLink is required but this
// hook has no control over feed-hosted URLs) falls back to a neutral frame
// instead of a broken-image icon.
//
// Props:
//   src, alt     — image source and accessible description
//   aspectRatio  — CSS aspect ratio for the frame (default 16 / 9)
//   sx           — extra styles for the frame
export default function HoverRevealImage({
  src,
  alt,
  aspectRatio = "16 / 9",
  sx,
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <Box
      sx={{
        aspectRatio,
        overflow: "hidden",
        backgroundColor: Colors.surfaceElevated,
        ...sx,
      }}
    >
      {!hasError && (
        <Box
          component="img"
          className={HOVER_REVEAL_IMAGE_CLASS}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(1)",
            transition: "filter 0.5s ease",
            "@media (hover: none)": {
              filter: "grayscale(0)",
            },
          }}
        />
      )}
    </Box>
  );
}
