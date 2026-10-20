import { GlobalStyles } from "@mui/material";
import useCalendlyBadge from "@hooks/useCalendlyBadge.jsx";
import { Accent, Colors, DarkColors } from "@resources/palette.js";
import { AccentTransitionSx, Fonts } from "@resources/styles.js";

// Calendly renders its badge outside React with colors baked into inline
// styles, so the accent is applied by overriding those styles (hence
// !important) with the same live variables every other accent surface uses.
// That keeps the badge in step with the ACCENT_SHIFT slider and the
// light/dark scheme, matching AccentButton's "solid" treatment.
const BadgeOverrideStyles = {
  ".calendly-badge-widget .calendly-badge-content": {
    ...AccentTransitionSx,
    backgroundColor: `${Accent.dynamic} !important`,
    color: `${Colors.onAccent} !important`,
    fontFamily: `${Fonts.mono} !important`,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    borderRadius: "0 !important",
    boxShadow: `0 0 20px ${Accent.dim(30)} !important`,
    "&:hover": { filter: "brightness(1.1)" },
  },
  ".calendly-badge-widget .calendly-badge-content span, .calendly-badge-widget .calendly-badge-content a":
    {
      color: "inherit !important",
    },
};

// Floating "schedule a consultation" action button powered by Calendly's
// badge widget. Mount once anywhere; it renders no markup of its own.
export default function CalendlyBadge({ url, text }) {
  useCalendlyBadge({ url, text, textColor: DarkColors.onAccent });

  return <GlobalStyles styles={BadgeOverrideStyles} />;
}
