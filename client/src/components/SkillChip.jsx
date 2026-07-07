import { Box } from "@mui/material";
import { Colors } from "@resources/palette";

// A single skill pill: an accent-colored dot next to the skill name.
export function SkillChip({ name, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        backgroundColor: Colors.surfaceChip,
        border: `1px solid ${Colors.borderChip}`,
        px: 2.25,
        py: 1.5,
        borderRadius: 2.5,
      }}
    >
      <Box
        component="span"
        sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: color }}
      />
      <Box
        component="span"
        sx={{ fontSize: 15, fontWeight: 600, color: Colors.textChip }}
      >
        {name}
      </Box>
    </Box>
  );
}

export default SkillChip;
