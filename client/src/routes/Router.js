import { createBrowserRouter } from "react-router";
import { MainLayout } from "@layouts/MainLayout.jsx";
import ErrorPage from "@pages/ErrorPage.jsx";
import { MainRoutes } from "./Routes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [...MainRoutes],
  },
]);

export default router;
