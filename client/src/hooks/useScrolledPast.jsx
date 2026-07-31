import { useEffect, useState } from "react";

// Reports whether the page has scrolled past a given element — true once the
// element's bottom edge leaves the top of the viewport (plus an optional
// offset). Drives iOS-style chrome that stays hidden until its large-title
// counterpart scrolls away (e.g. the NavBar revealing after the hero name).
// Falls back to "any scroll at all" if the element isn't in the DOM.
export default function useScrolledPast(elementId, offset = 0) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      const passed = element
        ? element.getBoundingClientRect().bottom <= offset
        : window.scrollY > 0;
      setHasScrolledPast((previous) => {
        if (previous !== passed) {
          console.debug(
            "[useScrolledPast]",
            elementId,
            passed ? "scrolled past" : "back in view"
          );
        }
        return passed;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [elementId, offset]);

  return hasScrolledPast;
}
