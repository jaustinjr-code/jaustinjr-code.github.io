import { Box } from "@mui/material";
import { HOVER_REVEAL_IMAGE_CLASS } from "@resources/styles.js";

// Media thumbnail that renders in grayscale at rest and fades to full color
// while its card is hovered — the design's treatment for editorial imagery.
// The hovering ancestor supplies the reveal by spreading
// HoverRevealImageHoverSx (see styles.js).
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
  return (
    <Box sx={{ aspectRatio, overflow: "hidden", ...sx }}>
      <Box
        component="img"
        className={HOVER_REVEAL_IMAGE_CLASS}
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(1)",
          transition: "filter 0.5s ease",
        }}
      />
    </Box>
  );
}
