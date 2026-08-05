import { Box, Slider, Typography } from "@mui/material";
import { Accent, Colors } from "@resources/palette.js";
import { AccentTransitionSx, LabelMicroSx } from "@resources/styles.js";
import {
  AccentSliderAriaLabel,
  AccentSliderLabel,
  AccentSliderVersionTag,
} from "@resources/strings.js";

// The hero's ACCENT_SHIFT control: a translucent glass card that sits below
// the portrait and hosts the hue slider driving the site-wide
// `--accent-color` custom property. Presentational only — the hue state lives
// in useAccentColor, wired up by the hero container.
//
// Props:
//   value    — current hue (0-360)
//   onChange — MUI Slider change handler (event, value)
export default function AccentSliderCard({ value, onChange }) {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: `color-mix(in srgb, ${Colors.surfaceDeep} 90%, transparent)`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(59, 73, 76, 0.2)",
      }}
    >
      {/* Header row: mono micro label in the live accent + version tag */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          component="span"
          sx={{ ...LabelMicroSx, ...AccentTransitionSx, color: Accent.dynamic }}
        >
          {AccentSliderLabel}
        </Typography>
        <Typography
          component="span"
          sx={{ ...LabelMicroSx, color: Colors.codeComment }}
        >
          {AccentSliderVersionTag}
        </Typography>
      </Box>
      <Slider
        aria-label={AccentSliderAriaLabel}
        min={0}
        max={360}
        value={value}
        onChange={onChange}
        sx={{
          ...AccentTransitionSx,
          color: Accent.dynamic,
          height: 2,
          py: 1.5,
          "& .MuiSlider-thumb": {
            width: 12,
            height: 12,
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0 0 0 6px ${Accent.dim(20)}`,
            },
          },
          "& .MuiSlider-rail": {
            color: Colors.outlineVariant,
            opacity: 1,
          },
        }}
      />
    </Box>
  );
}
