import { createTheme } from "@mui/material/styles";
import {
  AccentPrimary,
  AccentPrimaryHover,
  Colors,
} from "./palette.js";

// Font stacks used across the design. Exported so components can reference them
// by purpose (display headings, body copy, mono labels) without repeating the
// literal font-family strings.
export const Fonts = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

// The redesign is a single, dark aesthetic — there is no light mode — so the
// theme is a straightforward dark palette mapped from our design tokens.
export const MainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: AccentPrimary,
      light: AccentPrimaryHover,
      contrastText: Colors.backgroundBase,
    },
    background: {
      default: Colors.backgroundBase,
      paper: Colors.surfaceCard,
    },
    text: {
      primary: Colors.textPrimary,
      secondary: Colors.textSecondary,
    },
    divider: Colors.border,
  },
  // Keep the MUI default shape.borderRadius (4) as the unit; every component's
  // explicit `borderRadius` sx value is expressed against it (e.g. 2.5 -> 10px).
  typography: {
    fontFamily: Fonts.body,
    h1: { fontFamily: Fonts.display, fontWeight: 700, letterSpacing: "-0.03em" },
    h2: { fontFamily: Fonts.display, fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontFamily: Fonts.display, fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontFamily: Fonts.display, fontWeight: 700, letterSpacing: "-0.02em" },
    button: { textTransform: "none", fontWeight: 700 },
  },
});

export default MainTheme;
