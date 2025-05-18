import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import ErrorPage from "@pages/ErrorPage.jsx";
import { MainRoutes } from "./Routes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [...MainRoutes],
  },
]);

export default router;
