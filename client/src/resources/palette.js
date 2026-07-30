// Central color tokens for the v3 "Dev-Matrix Terminal" design.
//
// The design is a single sophisticated dark theme inspired by IDE interfaces:
// deep matte slate surfaces, neon-adjacent accents, and low-contrast outlines
// instead of shadows. Every component references these named tokens — never
// raw hex values — so the palette stays a single source of truth.

// The signature electric-blue accent is user-shiftable at runtime (the hero's
// ACCENT_SHIFT slider rewrites a CSS custom property). Anything that should
// follow the shift must use `Accent.dynamic`; the static hex values remain for
// contexts that cannot resolve CSS variables (e.g. the MUI theme palette).
export const AccentBaseHex = "#00daf3";
export const AccentBaseHue = 185; // hue of AccentBaseHex, the slider's default

export const Accent = {
  // Resolves to the live accent color wherever CSS variables are supported.
  dynamic: `var(--accent-color, ${AccentBaseHex})`,
  // Translucent variants of the live accent for glows, tints, and borders.
  dim: (percent) =>
    `color-mix(in srgb, var(--accent-color, ${AccentBaseHex}) ${percent}%, transparent)`,
};

// Secondary (teal) and tertiary (vivid purple) accents from the design system.
export const AccentSecondary = "#84d5c5";
export const AccentSecondaryBright = "#a0f2e1";
export const AccentTertiary = "#cdbdff";

// Semantic surface, text, and border tokens (darkest surface to lightest).
export const Colors = {
  // Surfaces
  surfaceDeep: "#020617", // base canvas level
  surfaceLowest: "#060e20",
  surface: "#0b1326", // default section background
  surfaceLow: "#131b2e",
  surfaceContainer: "#171f33",
  surfaceHigh: "#222a3d",
  surfaceHighest: "#2d3449",
  surfaceElevated: "#1E293B", // cards / containers

  // Text
  textPrimary: "#dae2fd", // on-surface
  textSecondary: "#bac9cc", // on-surface-variant
  codeComment: "#64748B", // muted monospace metadata
  onAccent: "#00363d", // text placed on the accent color

  // Borders / outlines
  outline: "#849396",
  outlineVariant: "#3b494c",

  // Status / decorative
  terminalGreen: "#10B981",
  windowDotRed: "#ff5f56",
  windowDotYellow: "#ffbd2e",
  windowDotGreen: "#27c93f",
  error: "#ffb4ab",
};

export default {
  AccentBaseHex,
  AccentBaseHue,
  Accent,
  AccentSecondary,
  AccentSecondaryBright,
  AccentTertiary,
  Colors,
};
