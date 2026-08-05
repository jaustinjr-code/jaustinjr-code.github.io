import { useEffect, useState } from "react";
import { NAV_HEIGHT } from "@resources/styles.js";

// Scroll-spy: given section ids in page order, reports which one currently
// owns the viewport so the nav can highlight the matching link. A section is
// "active" once its top passes just below the sticky header.
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0] ?? null;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (window.scrollY >= element.offsetTop - NAV_HEIGHT - 40) {
          current = id;
        }
      }
      setActiveId((previous) => {
        if (previous !== current) {
          console.debug("[useActiveSection] active section ->", current);
        }
        return current;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}
