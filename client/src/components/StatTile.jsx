import { Box, Typography } from "@mui/material";
import { Accent, Colors } from "@resources/palette.js";
import { AccentTransitionSx, CodeTextSx, LabelMicroSx } from "@resources/styles.js";

// Compact metadata tile: a micro caps label above a mono value, sitting on the
// deep surface with a live-accent left border. Used for project stats and any
// other label/value readouts.
export default function StatTile({ label, value, sx }) {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: Colors.surfaceDeep,
        borderLeft: `1px solid ${Accent.dim(30)}`,
        ...AccentTransitionSx,
        ...sx,
      }}
    >
      <Typography component="div" sx={{ ...LabelMicroSx, color: Colors.codeComment, mb: 0.75 }}>
        {label}
      </Typography>
      <Typography
        component="div"
        sx={{ ...CodeTextSx, fontSize: "1.125rem", color: Accent.dynamic, ...AccentTransitionSx }}
      >
        {value}
      </Typography>
    </Box>
  );
}
