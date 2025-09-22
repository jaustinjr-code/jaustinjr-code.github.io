import { AboutMeTitle, ContactTitle, ProjectsTitle } from "@resources/strings";
import HomePage from "@pages/HomePage.jsx";
import AboutMePage from "@pages/AboutMePage";
import ProjectsPage from "@pages/ProjectsPage";
import ContactPage from "@pages/ContactPage";

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
  // {
  //   path: "/projects",
  //   name: ProjectsTitle,
  //   element: <ProjectsPage />,
  // },
  {
    path: "/contact",
    name: ContactTitle,
    element: <ContactPage />,
  },
];

export { MainRoutes };
