import { Box, Typography } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { CodeTextSx } from "@resources/styles.js";

// A terminal-window chrome wrapper: header bar with colored window dots, a
// centered mono filename/title, an optional right-aligned badge, and the
// window body below.
//
// Props:
//   title    — mono text in the header (e.g. a filename)
//   badge    — optional right-aligned tag (e.g. "NPM v1.4.2")
//   dots     — "traffic" (red/yellow/green, default) or "muted" (dim pair)
//   sx       — extra styles on the outer window
//   headerSx — extra styles on the chrome bar
export default function TerminalPanel({ title, badge, dots = "traffic", sx, headerSx, children }) {
  const dotColors =
    dots === "traffic"
      ? [Colors.windowDotRed, Colors.windowDotYellow, Colors.windowDotGreen]
      : ["rgba(59, 73, 76, 0.3)", "rgba(59, 73, 76, 0.3)"];

  return (
    <Box
      sx={{
        backgroundColor: Colors.surfaceLow,
        border: "1px solid rgba(59, 73, 76, 0.2)",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          px: 3,
          py: 2,
          backgroundColor: Colors.surfaceDeep,
          borderBottom: "1px solid rgba(59, 73, 76, 0.1)",
          ...headerSx,
        }}
      >
        <Box sx={{ display: "flex", gap: 0.75 }}>
          {dotColors.map((dotColor) => (
            <Box
              key={dotColor}
              sx={{
                width: dots === "traffic" ? 12 : 8,
                height: dots === "traffic" ? 12 : 8,
                borderRadius: "50%",
                backgroundColor: dotColor,
              }}
            />
          ))}
        </Box>
        {title && (
          <Typography component="span" sx={{ ...CodeTextSx, color: Colors.codeComment }}>
            {title}
          </Typography>
        )}
        {badge ? (
          <Typography
            component="span"
            sx={{
              ...CodeTextSx,
              fontSize: "0.6875rem",
              px: 1,
              py: 0.25,
              backgroundColor: Colors.surfaceHighest,
              color: Colors.textSecondary,
              borderRadius: "2px",
            }}
          >
            {badge}
          </Typography>
        ) : (
          // Keeps the title centered when there is no badge.
          <Box sx={{ minWidth: 24 }} />
        )}
      </Box>
      {children}
    </Box>
  );
}
