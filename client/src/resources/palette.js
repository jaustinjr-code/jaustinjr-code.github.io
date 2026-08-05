// Central color tokens for the v3 "Dev-Matrix Terminal" design.
//
// The design ships two schemes: the signature dark IDE aesthetic (default) and
// a complementary light scheme that keeps WCAG AA contrast for all text roles.
// Every token is exposed through a CSS custom property so the whole site
// re-themes when MUI toggles the `.light` / `.dark` class on <html> (see
// themes.js and the `:root` blocks in styles.js). Components must reference
// these named tokens — never raw hex values.

// The signature electric-blue accent is user-shiftable at runtime (the hero's
// ACCENT_SHIFT slider rewrites the `--accent-hue` CSS custom property). Each
// scheme maps that hue to an accessible lightness: bright neon on dark
// surfaces, a deep ink tone on light ones (see AccentSchemeFormulas). The
// static hex values remain for contexts that cannot resolve CSS variables
// (e.g. the MUI theme palette).
export const AccentBaseHue = 185; // hue of the default accent, the slider's rest position
export const AccentBaseHex = "#00daf3"; // dark-scheme base accent
export const AccentBaseLightHex = "#06626a"; // light-scheme base accent (AA on light surfaces)

// How each scheme renders the live accent from the shiftable `--accent-hue`.
// The light formula stays ≥4.5:1 against the light surfaces for every hue.
export const AccentSchemeFormulas = {
  dark: `hsl(var(--accent-hue, ${AccentBaseHue}), 100%, 75%)`,
  light: `hsl(var(--accent-hue, ${AccentBaseHue}), 90%, 22%)`,
};

export const Accent = {
  // Resolves to the live accent color wherever CSS variables are supported.
  dynamic: `var(--accent-color, ${AccentBaseHex})`,
  // Translucent variants of the live accent for glows, tints, and borders.
  dim: (percent) =>
    `color-mix(in srgb, var(--accent-color, ${AccentBaseHex}) ${percent}%, transparent)`,
};

// Literal token values per scheme (darkest surface to lightest). These feed
// the CSS variable definitions and the MUI theme; components consume the
// var-backed `Colors` proxy below instead.
export const DarkColors = {
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

  // Secondary (teal) and tertiary (vivid purple) accents
  accentSecondary: "#84d5c5",
  accentSecondaryBright: "#a0f2e1",
  accentTertiary: "#cdbdff",

  // Status / decorative
  terminalGreen: "#10B981",
  windowDotRed: "#ff5f56",
  windowDotYellow: "#ffbd2e",
  windowDotGreen: "#27c93f",
  error: "#ffb4ab",
  gridLine: "rgba(16, 185, 129, 0.03)", // global background grid strokes
};

// Complementary light scheme. Surface order flips (deepest token becomes the
// brightest canvas) and every text-role token keeps ≥4.5:1 contrast on the
// surfaces it appears over.
export const LightColors = {
  // Surfaces
  surfaceDeep: "#f8fafc",
  surfaceLowest: "#f1f5f9",
  surface: "#eef2f8",
  surfaceLow: "#e2e8f0",
  surfaceContainer: "#dbe3ee",
  surfaceHigh: "#cdd7e4",
  surfaceHighest: "#bfcbdb",
  surfaceElevated: "#ffffff",

  // Text
  textPrimary: "#0b1533",
  textSecondary: "#3d4a4d",
  codeComment: "#4f5c6e",
  onAccent: "#e9fbfe",

  // Borders / outlines
  outline: "#5b696c",
  outlineVariant: "#aebcbf",

  // Secondary (teal) and tertiary (purple) accents, deepened for light surfaces
  accentSecondary: "#11705c",
  accentSecondaryBright: "#0b5f4e",
  accentTertiary: "#5b3fae",

  // Status / decorative
  terminalGreen: "#047857",
  windowDotRed: "#ff5f56",
  windowDotYellow: "#ffbd2e",
  windowDotGreen: "#27c93f",
  error: "#ba1a1a",
  gridLine: "rgba(4, 120, 87, 0.06)",
};

const toCssVariableName = (token) =>
  `--color-${token.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;

// Maps a scheme's literal tokens to a CSS-variable declaration block, e.g.
// { "--color-surface-deep": "#020617", ... } — spread into styles.js's
// `:root` scheme blocks so both maps can never drift out of sync.
export const buildColorVariables = (schemeColors) =>
  Object.fromEntries(
    Object.entries(schemeColors).map(([token, value]) => [
      toCssVariableName(token),
      value,
    ]),
  );

// Semantic tokens as consumed by components: CSS-variable references that
// resolve against the active scheme, falling back to the dark values.
export const Colors = Object.fromEntries(
  Object.keys(DarkColors).map((token) => [
    token,
    `var(${toCssVariableName(token)}, ${DarkColors[token]})`,
  ]),
);

// Named accent exports kept for readability at call sites.
export const AccentSecondary = Colors.accentSecondary;
export const AccentSecondaryBright = Colors.accentSecondaryBright;
export const AccentTertiary = Colors.accentTertiary;

export default {
  AccentBaseHex,
  AccentBaseLightHex,
  AccentBaseHue,
  AccentSchemeFormulas,
  Accent,
  AccentSecondary,
  AccentSecondaryBright,
  AccentTertiary,
  DarkColors,
  LightColors,
  buildColorVariables,
  Colors,
};
