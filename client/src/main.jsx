import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorPage } from "@pages/ErrorPage.jsx";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
