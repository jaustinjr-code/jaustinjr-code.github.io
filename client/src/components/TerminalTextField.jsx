import { Box, InputBase, Typography } from "@mui/material";
import { Accent, Colors } from "@resources/palette.js";
import {
  AccentTransitionSx,
  BodyMdSx,
  LabelMicroSx,
} from "@resources/styles.js";

// The contact form's terminal-styled field: a mono micro caps label above an
// underline input — filled container surface, hairline bottom border that
// focuses to the live accent, muted mono-toned placeholder. Built on
// InputBase so no MUI default underline/blue treatment leaks through.
//
// Props:
//   label       — mono micro caps label above the input
//   placeholder — muted hint text
//   type        — "text" | "email" | "textarea" (textarea renders multiline)
//   value       — controlled field value
//   onChange    — change handler
//   name        — form field name (drives the container's field state key)
//   required    — marks the field required for native validation
//   rows        — visible rows when type="textarea"
export default function TerminalTextField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  required,
  rows,
}) {
  const isTextarea = type === "textarea";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography
        component="label"
        htmlFor={name}
        sx={{ ...LabelMicroSx, color: Colors.codeComment }}
      >
        {label}
      </Typography>
      <InputBase
        id={name}
        name={name}
        type={isTextarea ? undefined : type}
        multiline={isTextarea}
        rows={isTextarea ? rows : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        fullWidth
        sx={{
          backgroundColor: Colors.surfaceContainer,
          borderBottom: "1px solid rgba(59, 73, 76, 0.3)",
          borderRadius: 0,
          px: 2,
          py: 1.5,
          ...BodyMdSx,
          color: Colors.textPrimary,
          ...AccentTransitionSx,
          "&.Mui-focused": {
            borderBottomColor: Accent.dynamic,
          },
          "& .MuiInputBase-input::placeholder": {
            color: Colors.codeComment,
            opacity: 1,
          },
        }}
      />
    </Box>
  );
}
