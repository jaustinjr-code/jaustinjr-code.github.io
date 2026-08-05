import { Box, Typography } from "@mui/material";
import { Colors } from "@resources/palette.js";
import { AccentTransitionSx, LabelCapsSx } from "@resources/styles.js";

// Deep-surface capability panel from the skills matrix: a 2px accent-colored
// top border acts as the category's "tab light", with a matching mono caps
// title above whatever content the panel hosts (bars, chips, icon rows).
//
// Props:
//   accentColor — CSS color for the top border and title (may be the live accent)
//   title       — mono caps category label
export default function SkillPanel({ accentColor, title, sx, children }) {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 4 },
        backgroundColor: Colors.surfaceDeep,
        borderTop: `2px solid ${accentColor}`,
        ...AccentTransitionSx,
        ...sx,
      }}
    >
      <Typography
        component="h3"
        sx={{
          ...LabelCapsSx,
          ...AccentTransitionSx,
          color: accentColor,
          mb: 3,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}
