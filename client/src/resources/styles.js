import {
  Accent,
  AccentSchemeFormulas,
  buildColorVariables,
  Colors,
  DarkColors,
  LightColors,
} from "./palette.js";

// ---------------------------------------------------------------------------
// Layout constants (mobile-first; desktop values applied at the md breakpoint)
// ---------------------------------------------------------------------------

// Sticky header height — sections use it as scroll-margin so anchored headings
// never hide beneath the glass app bar.
export const NAV_HEIGHT = 80;
export const CONTENT_MAX_WIDTH = 1200; // px — design's fluid-grid container cap
export const SECTION_PADDING_Y = { xs: 8, md: 12 }; // vertical rhythm (8px base)
export const SECTION_PADDING_X = { xs: 2, md: 6 }; // 16px mobile / 48px desktop

// Font stacks, referenced by purpose rather than literal family names.
export const Fonts = {
  display: "'Hanken Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

// Mobile-first fluid type scale. clamp() lets every size breathe between a
// phone floor and a desktop ceiling without breakpoint jumps.
export const TypeScale = {
  headlineXl: "clamp(2rem, 5.5vw, 3rem)", // 32px -> 48px
  headlineMd: "clamp(1.25rem, 3vw, 1.5rem)", // 20px -> 24px
  bodyLg: "clamp(1rem, 2vw, 1.125rem)", // 16px -> 18px
  bodyMd: "1rem",
  codeSm: "0.875rem",
  labelCaps: "0.75rem",
  labelMicro: "0.625rem",
  metricXl: "clamp(2.5rem, 7vw, 3.5rem)", // big impact numbers
};

// ---------------------------------------------------------------------------
// Global styles
// ---------------------------------------------------------------------------

// Scheme-aware token definitions, subtle 32px background grid, and smooth
// anchored scrolling. The grid evokes the "architectural canvas" from the
// design brief. MUI toggles the `.light` / `.dark` class on <html> (see
// themes.js), which swaps every `--color-*` token and the accent formula at
// once; dark is the default scheme.
export const GlobalStyleObject = {
  ":root": {
    ...buildColorVariables(DarkColors),
    "--accent-color": AccentSchemeFormulas.dark,
  },
  ":root.light": {
    ...buildColorVariables(LightColors),
    "--accent-color": AccentSchemeFormulas.light,
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    backgroundColor: Colors.surface,
    backgroundImage:
      `linear-gradient(${Colors.gridLine} 1px, transparent 1px),` +
      `linear-gradient(90deg, ${Colors.gridLine} 1px, transparent 1px)`,
    backgroundSize: "32px 32px",
    overscrollBehavior: "none",
  },
  "section[id]": {
    scrollMarginTop: `${NAV_HEIGHT}px`,
  },
  "::selection": {
    backgroundColor: Accent.dynamic,
    color: Colors.onAccent,
  },
  "@media (prefers-reduced-motion: reduce)": {
    html: { scrollBehavior: "auto" },
    "*": {
      animation: "none !important",
      transition: "none !important",
    },
  },
};

// ---------------------------------------------------------------------------
// Reusable sx recipes
// ---------------------------------------------------------------------------

// Fast color/border transitions so runtime accent shifts feel instantaneous
// everywhere the dynamic accent is used.
export const AccentTransitionSx = {
  transition:
    "color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
};

// JetBrains Mono uppercase micro-label (the design's `label-caps` type role).
export const LabelCapsSx = {
  fontFamily: Fonts.mono,
  fontSize: TypeScale.labelCaps,
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  lineHeight: 1,
};

// Even smaller mono metadata label used inside cards and form fields.
export const LabelMicroSx = {
  ...LabelCapsSx,
  fontSize: TypeScale.labelMicro,
};

// Monospace utility text (`code-sm` role): snippets, chips, metadata.
export const CodeTextSx = {
  fontFamily: Fonts.mono,
  fontSize: TypeScale.codeSm,
  lineHeight: 1.5,
};

// Section headline (`headline-xl` role).
export const HeadlineXlSx = {
  fontFamily: Fonts.display,
  fontSize: TypeScale.headlineXl,
  fontWeight: 700,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: Colors.textPrimary,
};

// Card / row title (`headline-md` role).
export const HeadlineMdSx = {
  fontFamily: Fonts.display,
  fontSize: TypeScale.headlineMd,
  fontWeight: 600,
  lineHeight: 1.3,
  color: Colors.textPrimary,
};

// Long-form body copy (`body-lg` / `body-md` roles).
export const BodyLgSx = {
  fontFamily: Fonts.body,
  fontSize: TypeScale.bodyLg,
  lineHeight: 1.6,
  color: Colors.textSecondary,
};

export const BodyMdSx = {
  fontFamily: Fonts.body,
  fontSize: TypeScale.bodyMd,
  lineHeight: 1.6,
  color: Colors.textSecondary,
};

// Tonal card surface: elevated slate with a low-contrast outline. Interaction
// depth comes from brightening the border, never from shadows.
export const ElevatedPanelSx = {
  backgroundColor: Colors.surfaceElevated,
  border: `1px solid rgba(100, 116, 139, 0.2)`,
  borderRadius: "4px",
};

// Hover treatment that swaps a panel's border to the live accent color.
export const AccentHoverBorderSx = {
  ...AccentTransitionSx,
  "&:hover": {
    borderColor: Accent.dim(50),
  },
};

// Glassmorphism recipe for the fixed navigation "HUD".
export const GlassSurfaceSx = {
  backgroundColor: `color-mix(in srgb, ${Colors.surfaceDeep} 80%, transparent)`,
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(59, 73, 76, 0.2)",
};

// Soft radial glow used behind hero art and section corners.
export const AccentGlowSx = {
  background: `radial-gradient(circle at 50% 50%, ${Accent.dim(10)}, transparent 70%)`,
};

export default {
  NAV_HEIGHT,
  CONTENT_MAX_WIDTH,
  SECTION_PADDING_Y,
  SECTION_PADDING_X,
  Fonts,
  TypeScale,
  GlobalStyleObject,
  AccentTransitionSx,
  LabelCapsSx,
  LabelMicroSx,
  CodeTextSx,
  HeadlineXlSx,
  HeadlineMdSx,
  BodyLgSx,
  BodyMdSx,
  ElevatedPanelSx,
  AccentHoverBorderSx,
  GlassSurfaceSx,
  AccentGlowSx,
};
