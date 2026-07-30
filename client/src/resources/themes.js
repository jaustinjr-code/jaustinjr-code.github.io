import { createTheme } from "@mui/material/styles";
import { AccentBaseHex, AccentSecondary, AccentTertiary, Colors } from "./palette.js";
import { Fonts } from "./styles.js";

// v3 "Dev-Matrix Terminal" theme — a single dark aesthetic mapped from the
// design tokens in palette.js. The runtime accent shift is handled with CSS
// variables at the component level (see useAccentColor); the theme keeps the
// static base accent for MUI's internal color math.
export const MainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: AccentBaseHex,
      contrastText: Colors.onAccent,
    },
    secondary: {
      main: AccentSecondary,
    },
    info: {
      main: AccentTertiary,
    },
    background: {
      default: Colors.surface,
      paper: Colors.surfaceElevated,
    },
    text: {
      primary: Colors.textPrimary,
      secondary: Colors.textSecondary,
    },
    divider: Colors.outlineVariant,
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
