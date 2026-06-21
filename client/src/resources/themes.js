import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const MainTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.01562em",
        "@media (max-width:600px)": {
          fontSize: "1.75rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "2rem",
        },
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: "-0.0078125em",
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "1.75rem",
        },
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 700,
        lineHeight: 1.4,
        "@media (max-width:600px)": {
          fontSize: "1.25rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "1.5rem",
        },
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.4,
        "@media (max-width:600px)": {
          fontSize: "1.125rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "1.25rem",
        },
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.5,
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "1.125rem",
        },
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.6,
        "@media (max-width:600px)": {
          fontSize: "0.875rem",
        },
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: "0.009375em",
        "@media (max-width:600px)": {
          fontSize: "0.875rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "0.9375rem",
        },
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: "0.0071875em",
        "@media (max-width:600px)": {
          fontSize: "0.8125rem",
        },
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.03125em",
        "@media (max-width:600px)": {
          fontSize: "0.9375rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "0.9687rem",
        },
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: "0.0178571429em",
        "@media (max-width:600px)": {
          fontSize: "0.8125rem",
        },
        "@media (min-width:601px) and (max-width:960px)": {
          fontSize: "0.84375rem",
        },
      },
      button: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.75,
        letterSpacing: "0.0892857143em",
        textTransform: "uppercase",
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.66,
        letterSpacing: "0.0333333333em",
      },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 700,
        lineHeight: 2.66,
        letterSpacing: "0.1666666667em",
        textTransform: "uppercase",
      },
    },
    colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#00796B",
          light: "#4DB6AC",
          dark: "#004D40",
        },
        secondary: {
          main: "#66CC81",
        },
        background: {
          default: "#FAFAFA",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#212121",
          secondary: "#4D4D4D",
        },
        divider: "#BDBDBD",
        error: {
          main: "#FF5722",
        },
        warning: {
          main: "#FFB300",
        },
        success: {
          main: "#43A047",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#004D40",
          light: "#36A290",
          dark: "#00332D",
        },
        secondary: {
          main: "#66CC81",
          light: "#8FE6A1",
          dark: "#3EA15F",
        },
        background: {
          default: "#001F1A",
          paper: "#002D25",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A8D5C0",
        },
        divider: "#004D14",
        error: {
          main: "#4D1600",
        },
        warning: {
          main: "#4D2C00",
        },
        success: {
          main: "#36A290",
        },
      },
    },
  },
  })
);
