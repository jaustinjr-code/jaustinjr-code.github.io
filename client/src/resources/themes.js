import { createTheme } from "@mui/material/styles";

export const MainTheme = createTheme({
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
});
