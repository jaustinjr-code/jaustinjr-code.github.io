// Central color tokens for the v2 portfolio design.
//
// Values are the sRGB hex equivalents of the OKLCH colors used in the source
// design mockup. They live here as a single source of truth so the MUI theme,
// section components, and content data all reference the same named tokens
// instead of scattering raw hex values across the codebase.

// Accent hues — each drives a skill dot / project card. Named by purpose so
// data files can pick an accent without knowing the underlying hex value.
export const Accents = {
  green: "#40d872",
  orange: "#ff8918",
  cyan: "#00c9d3",
  magenta: "#ec71c8",
  yellow: "#e7c100",
};

// Primary brand accent (the green used for CTAs, links, and highlights).
export const AccentPrimary = Accents.green;
export const AccentPrimaryHover = "#55e982";
export const AccentPrimaryGlow = "#008a39";

// Semantic surface, border, and text tokens for the dark theme.
export const Colors = {
  // Backgrounds (darkest to lightest surface)
  backgroundBase: "#030e07",
  backgroundAlt: "#07150c",
  backgroundContact: "#020803",
  backgroundOverlay: "rgba(1, 2, 1, 0.75)",
  surfaceCard: "#0c1c12",
  surfaceChip: "#08180e",
  surfaceBadge: "#092012",
  surfaceTag: "#050e08",

  // Text
  textPrimary: "#f0f7f2",
  textSecondary: "#a5b2a8",
  textMuted: "#9ba99f",
  textFaint: "#86938a",
  textDim: "#5b675e",
  textChip: "#e0e7e2",
  textCardBody: "#95a299",

  // Borders / dividers
  border: "#27382c",
  borderSubtle: "#1d2d22",
  borderBadge: "#273e2f",
  borderChip: "#223227",
  borderFooter: "#1a251d",

  // Decorative
  glowCyan: "#00b9c3",
  windowDotRed: "#ca5551",
  windowDotYellow: "#bc9c00",
  windowDotGreen: "#3aa85b",
};

export default { Accents, AccentPrimary, AccentPrimaryHover, AccentPrimaryGlow, Colors };
