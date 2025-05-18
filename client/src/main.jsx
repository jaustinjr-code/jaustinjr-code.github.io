import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorPage } from "@pages/ErrorPage.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router";
import router from "@routes/Router.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App.jsx";
import { MainTheme } from "./resources/themes.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={MainTheme} defaultMode="light" noSsr>
      <CssBaseline />
      <RouterProvider router={router}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <App />
        </ErrorBoundary>
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
