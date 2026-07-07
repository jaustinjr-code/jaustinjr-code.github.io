import { createBrowserRouter } from "react-router";
import PortfolioPage from "@pages/PortfolioPage.jsx";
import ErrorPage from "@pages/ErrorPage.jsx";

// Single-page portfolio at "/", with the error page as both the route error
// boundary and the catch-all for unknown paths (served via the SPA fallback).
const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
