import { alpha } from "@mui/material/styles";
import { Colors, AccentPrimary } from "./palette.js";

// Shared layout constants used across sections.
export const NAV_HEIGHT = 65; // approximate sticky-nav height, in px
export const CONTENT_MAX_WIDTH = 1100; // px — the design's content column width
export const SECTION_PADDING_Y = { xs: 7, md: 11 }; // vertical rhythm per section
export const SECTION_PADDING_X = { xs: 3, sm: 4, md: 5 };

// Animation names are defined once in GlobalStyles (see below) so any component
// can reference them by name.
export const Animations = {
  glowPulseSlow: "glowPulse 7s ease-in-out infinite",
  glowPulseFast: "glowPulse 9s ease-in-out infinite 1s",
  fadeUp: "fadeUp 0.7s ease-out",
  fadeUpFast: "fadeUp 0.2s ease-out",
};

// Global CSS injected via MUI's <GlobalStyles>: base background, smooth
// anchor scrolling with offset for the sticky nav, text selection color, and
// the keyframes referenced by Animations above.
export const GlobalStyleObject = {
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    backgroundColor: Colors.backgroundBase,
  },
  // Offset anchored sections so the sticky nav doesn't cover their headings.
  "section[id]": {
    scrollMarginTop: `${NAV_HEIGHT}px`,
  },
  "::selection": {
    backgroundColor: alpha(AccentPrimary, 0.35),
    color: Colors.textPrimary,
  },
  "@keyframes glowPulse": {
    "0%, 100%": { opacity: 0.55, transform: "scale(1)" },
    "50%": { opacity: 0.85, transform: "scale(1.06)" },
  },
  "@keyframes fadeUp": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  // Respect users who prefer reduced motion.
  "@media (prefers-reduced-motion: reduce)": {
    html: { scrollBehavior: "auto" },
    "*": {
      animation: "none !important",
      transition: "none !important",
    },
  },
};

// Reusable eyebrow/label style (JetBrains Mono uppercase kicker above headings).
export const SectionLabelSx = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 13,
  color: AccentPrimary,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  mb: 1.5,
};

export default {
  NAV_HEIGHT,
  CONTENT_MAX_WIDTH,
  SECTION_PADDING_Y,
  SECTION_PADDING_X,
  Animations,
  GlobalStyleObject,
  SectionLabelSx,
};
