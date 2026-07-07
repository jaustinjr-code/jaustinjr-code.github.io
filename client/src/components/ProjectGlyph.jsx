import { Box } from "@mui/material";
import { Fonts } from "@resources/themes";

// The rounded, accent-colored square holding a project's single-letter glyph.
// Shared by the project card and its demo modal (which render it at different
// sizes).
export function ProjectGlyph({ glyph, color, size = 48, fontSize = 18 }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: `${size / 4}px`,
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: Fonts.display,
        fontWeight: 700,
        fontSize,
        color: "primary.contrastText",
      }}
    >
      {glyph}
    </Box>
  );
}

export default ProjectGlyph;
