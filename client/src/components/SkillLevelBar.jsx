import { Box, Typography } from "@mui/material";
import { Accent, Colors } from "@resources/palette.js";
import {
  AccentTransitionSx,
  BodyMdSx,
  CodeTextSx,
  TypeScale,
} from "@resources/styles.js";

// A single language proficiency readout: skill name with a hover-revealed
// mono level tag, above a hairline track whose fill width encodes the 0-100
// proficiency in the live accent color.
//
// The level tag stays visible on touch devices; only hover-capable pointers
// get the hide-until-hover treatment.
//
// Props:
//   name        — the skill's display name
//   level       — mono metadata label (e.g. "Expert")
//   proficiency — 0-100, drives the fill width
export default function SkillLevelBar({ name, level, proficiency }) {
  return (
    <Box
      sx={{
        "@media (hover: hover)": {
          "& .SkillLevelBar-level": { opacity: 0 },
          "&:hover .SkillLevelBar-level": { opacity: 1 },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography component="span" sx={{ ...BodyMdSx, color: Colors.textPrimary }}>
          {name}
        </Typography>
        <Typography
          component="span"
          className="SkillLevelBar-level"
          sx={{
            ...CodeTextSx,
            fontSize: TypeScale.labelMicro,
            textTransform: "uppercase",
            color: Colors.codeComment,
            transition: "opacity 0.3s ease",
          }}
        >
          {level}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "4px",
          backgroundColor: Colors.surfaceHighest,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            insetBlock: 0,
            left: 0,
            width: `${proficiency}%`,
            backgroundColor: Accent.dynamic,
            ...AccentTransitionSx,
          }}
        />
      </Box>
    </Box>
  );
}
