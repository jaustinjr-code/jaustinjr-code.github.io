import { HomePage } from "@pages/HomePage.jsx";

const MainRoutes = [
  {
    index: true,
    path: "/",
    name: "Home",
    element: <HomePage />,
  },
  {
    path: "/aboutme",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <HomePage />,
  },
];

export { MainRoutes };
