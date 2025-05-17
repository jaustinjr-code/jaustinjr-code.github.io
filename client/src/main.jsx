import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ErrorPage } from "@pages/ErrorPage.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { MainLayout } from "./layouts/MainLayout.jsx";
import { RouterProvider } from "react-router";
import router from "@routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <MainLayout />
      </ErrorBoundary>
    </RouterProvider>
  </StrictMode>
);
