import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import router from "@routes/Router.jsx";
import { MainTheme } from "@resources/themes.js";
import { GlobalStyleObject } from "@resources/styles.js";

// Route-level errors (including render errors in route components) and unknown
// paths are handled by the router's errorElement / catch-all route, so no
// separate top-level error boundary is needed here.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={MainTheme} defaultMode="dark">
      <CssBaseline />
      <GlobalStyles styles={GlobalStyleObject} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
