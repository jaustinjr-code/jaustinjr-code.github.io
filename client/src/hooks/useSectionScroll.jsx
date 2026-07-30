import { useCallback, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";

// Bridges hash routes and the one continuous page: when the route's
// :sectionId param changes (e.g. /#/experience), smooth-scroll to the DOM
// element with that id. Returns a navigate helper for nav links so clicking a
// link both updates the hash route and triggers the scroll.
export default function useSectionScroll() {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    // On a deep link (initial load with /#/section), smooth scrolling gets
    // cancelled by the browser's own load-time scroll handling — jump
    // instantly after a tick instead. Later route changes scroll smoothly.
    const isInitialLoad = !hasMountedRef.current;

    if (!sectionId) {
      hasMountedRef.current = true;
      return undefined;
    }

    const behavior = isInitialLoad ? "auto" : "smooth";
    const timeoutId = setTimeout(
      () => {
        // Marked inside the callback so StrictMode's dev-only double mount
        // (which cancels the first timeout) still treats this as the load.
        hasMountedRef.current = true;
        const element = document.getElementById(sectionId);
        console.debug("[useSectionScroll] route section ->", sectionId, element);
        if (element) {
          element.scrollIntoView({ behavior, block: "start" });
        } else {
          // Unknown segment: fall back to the top of the page.
          window.scrollTo({ top: 0, behavior });
        }
      },
      isInitialLoad ? 100 : 0
    );
    return () => clearTimeout(timeoutId);
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
