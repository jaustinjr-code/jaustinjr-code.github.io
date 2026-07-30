import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

// Bridges hash routes and the one continuous page: when the route's
// :sectionId param changes (e.g. /#/experience), smooth-scroll to the DOM
// element with that id. Returns a navigate helper for nav links so clicking a
// link both updates the hash route and triggers the scroll.
export default function useSectionScroll() {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!sectionId) {
      return;
    }
    const element = document.getElementById(sectionId);
    console.debug("[useSectionScroll] route section ->", sectionId, element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Unknown segment: fall back to the top of the page.
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [sectionId]);

  const goToSection = useCallback(
    (id) => {
      console.debug("[useSectionScroll] navigating to section", id);
      navigate(`/${id}`);
      // Re-trigger the scroll even when the route is already /:id.
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [navigate]
  );

  return { currentSectionId: sectionId, goToSection };
}
