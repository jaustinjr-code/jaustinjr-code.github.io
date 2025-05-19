import { HomePage } from "@pages/HomePage.jsx";
import { ErrorPage } from "@pages/ErrorPage.jsx";
import { AboutMeTitle, ContactTitle, ProjectsTitle } from "@resources/strings";
import AboutMePage from "../pages/AboutMePage";
import ProjectsPage from "../pages/ProjectsPage";

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
    element: <AboutMePage />,
  },
  {
    path: "/projects",
    name: ProjectsTitle,
    element: <ProjectsPage />,
  },
  {
    path: "/contact",
    name: ContactTitle,
    element: <ErrorPage />,
  },
];

export { MainRoutes };
