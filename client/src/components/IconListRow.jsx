import { Box, Typography } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { BodyMdSx } from "@resources/styles.js";

// A simple icon-and-label list row (e.g. infrastructure capabilities): a
// tinted leading icon beside body text.
//
// Props:
//   icon      — icon component to render (from @mui/icons-material)
//   label     — the row's display text
//   iconColor — CSS color for the icon tint
export default function IconListRow({ icon, label, iconColor }) {
  const Icon = icon;
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Icon sx={{ color: iconColor, fontSize: "1.5rem" }} />
      <Typography component="span" sx={{ ...BodyMdSx, color: Colors.textPrimary }}>
        {label}
      </Typography>
    </Box>
  );
}
