import { Box } from "@mui/material";
import { Accent } from "@resources/palette.js";
import { CodeTextSx } from "@resources/styles.js";

// Purely decorative "terminal rain" backdrop: a full-bleed grid of monospace
// glyphs rendered dim, with individual cells flashing to the full live accent
// color. Data comes from useTerminalRain; this component only paints it.
// Hidden from assistive tech and mouse events — it is background texture.
//
// Props:
//   rows     — array of rows, each an array of single characters
//   litCells — Set of "row-col" keys for the currently lit cells
export default function TerminalRain({ rows, litCells }) {
  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            py: 0.5,
          }}
        >
          {row.map((character, columnIndex) => (
            <Box
              key={columnIndex}
              component="span"
              sx={{
                ...CodeTextSx,
                color: litCells.has(`${rowIndex}-${columnIndex}`)
                  ? Accent.dynamic
                  : Accent.dim(20),
                transition: "color 0.15s ease",
              }}
            >
              {character}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
