import { HomePage } from "@pages/HomePage.jsx";
import { ErrorPage } from "@pages/ErrorPage.jsx";
import { AboutMeTitle, ContactTitle, ProjectsTitle } from "@resources/strings";

const MainRoutes = [
  {
    index: true,
    path: "/",
    name: "Home",
    element: <HomePage />,
  },
  {
    path: "/aboutme",
    name: AboutMeTitle,
    element: <HomePage />,
  },
  {
    path: "/projects",
    name: ProjectsTitle,
    element: <ErrorPage />,
  },
  {
    path: "/contact",
    name: ContactTitle,
    element: <ErrorPage />,
  },
];

export { MainRoutes };
