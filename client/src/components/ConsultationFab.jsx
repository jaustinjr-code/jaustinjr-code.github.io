import { Box, Fab } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import useCalendlyPopup from "@hooks/useCalendlyPopup.jsx";
import { Accent, Colors } from "@resources/palette.js";
import { AccentTransitionSx, Fonts } from "@resources/styles.js";

// Material Design 3 floating action button specs.
const FabSizePx = 56; // container height; the icon-only FAB is a 56px square
const FabCornerRadiusPx = 16;
const FabIconSizePx = 24;
const FabElevation = {
  // Level 3 at rest/focus/press, level 4 on hover.
  rest: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 4px 8px 3px rgba(0, 0, 0, 0.15)",
  raised: "0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 6px 10px 4px rgba(0, 0, 0, 0.15)",
};
const FabStateLayerOpacity = { hover: 0.08, focus: 0.1, pressed: 0.1 };

// Reusable "schedule a call" action: a Material 3 floating action button
// pinned to the viewport corner (16px inset on phones, 24px on larger
// windows). It is an extended FAB — calendar icon plus a short label — on
// windows ≥600px, and collapses to the standard icon-only FAB below that.
// The container uses the live accent, so it follows the ACCENT_SHIFT slider
// and the light/dark scheme like AccentButton's solid variant. The label stays
// available to screen readers through aria-label when it is visually hidden.
export default function ConsultationFab({ url, label }) {
  const openScheduler = useCalendlyPopup(url);

  return (
    <Fab
      variant="extended"
      aria-label={label}
      onClick={openScheduler}
      sx={{
        ...AccentTransitionSx,
        position: "fixed",
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: "speedDial",
        height: FabSizePx,
        minWidth: FabSizePx,
        width: { xs: FabSizePx, sm: "auto" },
        px: { xs: 0, sm: 2 },
        gap: { xs: 0, sm: 1 },
        borderRadius: `${FabCornerRadiusPx}px`,
        backgroundColor: Accent.dynamic,
        color: Colors.onAccent,
        boxShadow: FabElevation.rest,
        textTransform: "none",
        fontFamily: Fonts.body,
        fontSize: "0.875rem", // M3 label-large: 14px / 500 / 0.1px tracking
        fontWeight: 500,
        lineHeight: "1.25rem",
        letterSpacing: "0.00625rem",
        overflow: "hidden",
        "& .MuiSvgIcon-root": { fontSize: FabIconSizePx },
        // M3 state layer: a currentColor wash over the container.
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "currentColor",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.2s ease",
        },
        "&:hover": {
          backgroundColor: Accent.dynamic,
          boxShadow: FabElevation.raised,
          "&::before": { opacity: FabStateLayerOpacity.hover },
        },
        "&.Mui-focusVisible": {
          boxShadow: FabElevation.rest,
          "&::before": { opacity: FabStateLayerOpacity.focus },
        },
        "&:active": {
          boxShadow: FabElevation.rest,
          "&::before": { opacity: FabStateLayerOpacity.pressed },
        },
      }}
    >
      <CalendarMonthOutlinedIcon />
      <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
        {label}
      </Box>
    </Fab>
  );
}
