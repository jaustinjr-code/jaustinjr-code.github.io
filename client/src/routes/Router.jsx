import { createHashRouter } from "react-router";
import PortfolioPage from "@pages/PortfolioPage.jsx";
import ErrorPage from "@pages/ErrorPage.jsx";

// The site is one continuous page navigated purely by hash routes
// (e.g. /#/experience). Each hash path segment names a section id; the page
// scrolls to it on navigation (see useSectionScroll). Hash routing needs no
// server-side fallback, which suits static GitHub Pages hosting exactly.
const router = createHashRouter([
  {
    path: "/",
    element: <PortfolioPage />,
    errorElement: <ErrorPage />,
  },
  {
    // Unknown segments simply render the page from the top rather than a 404 —
    // every route is the same single page.
    path: "/:sectionId",
    element: <PortfolioPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
