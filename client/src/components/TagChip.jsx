import { Box } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { CodeTextSx, LabelMicroSx } from "@resources/styles.js";

// Small monospace chip for skills, frameworks, and project tech tags.
//
// Props:
//   size       — "micro" (uppercase 10px, default) or "code" (14px mono)
//   hoverColor — optional text color on hover (e.g. the teal secondary)
export default function TagChip({ size = "micro", hoverColor, sx, children }) {
  const typeSx = size === "micro" ? LabelMicroSx : CodeTextSx;
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: size === "micro" ? 1 : 1.5,
        py: size === "micro" ? 0.5 : 0.75,
        backgroundColor: size === "micro" ? Colors.surfaceDeep : Colors.surfaceContainer,
        border: "1px solid rgba(59, 73, 76, 0.1)",
        borderRadius: "2px",
        color: size === "micro" ? Colors.textSecondary : Colors.textPrimary,
        transition: "color 0.3s ease",
        ...(hoverColor && { "&:hover": { color: hoverColor } }),
        ...typeSx,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
