import { createTheme } from "@mui/material/styles";
import {
  AccentBaseHex,
  AccentBaseLightHex,
  DarkColors,
  LightColors,
} from "./palette.js";
import { Fonts } from "./styles.js";

// v3 "Dev-Matrix Terminal" theme — dark (default) and complementary light
// schemes mapped from the design tokens in palette.js. MUI's CSS-variables
// mode toggles a `.light` / `.dark` class on <html>, which also drives the
// custom `--color-*` tokens defined in styles.js, so the two systems switch
// together. The runtime accent shift stays a CSS variable at the component
// level (see useAccentColor); each scheme keeps a static base accent for
// MUI's internal color math.
const buildSchemePalette = (mode, schemeColors, accentHex) => ({
  mode,
  primary: {
    main: accentHex,
    contrastText: schemeColors.onAccent,
  },
  secondary: {
    main: schemeColors.accentSecondary,
  },
  info: {
    main: schemeColors.accentTertiary,
  },
  background: {
    default: schemeColors.surface,
    paper: schemeColors.surfaceElevated,
  },
  text: {
    primary: schemeColors.textPrimary,
    secondary: schemeColors.textSecondary,
  },
  divider: schemeColors.outlineVariant,
});

export const MainTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    dark: {
      palette: buildSchemePalette("dark", DarkColors, AccentBaseHex),
    },
    light: {
      palette: buildSchemePalette("light", LightColors, AccentBaseLightHex),
    },
  },
  shape: {
    // The design's shape language is "soft" — 4px on standard elements.
    borderRadius: 4,
  },
  typography: {
    fontFamily: Fonts.body,
    h1: { fontFamily: Fonts.display, fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontFamily: Fonts.display, fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontFamily: Fonts.display, fontWeight: 600 },
    h4: { fontFamily: Fonts.display, fontWeight: 600 },
    button: { fontFamily: Fonts.mono, fontWeight: 600 },
  },
});

export default MainTheme;
