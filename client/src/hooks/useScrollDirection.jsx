import { useEffect, useState } from "react";

// Reports whether the visitor is currently scrolling down the page — the
// signal behind "hide on scroll down, reveal on scroll up" chrome such as the
// consultation FAB. Stays false within `revealTopPx` of the top so the control
// is always visible on arrival, ignores movements under `movementThresholdPx`
// to avoid flicker from tiny jitters, and holds its last value at the very
// bottom of the page so iOS rubber-band bounce cannot reveal it there.
export default function useScrollDirection({
  revealTopPx = 0,
  movementThresholdPx = 0,
} = {}) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isAtBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 1;

      if (scrollY <= revealTopPx) {
        setIsScrollingDown(false);
        lastScrollY = scrollY;
        return;
      }
      if (isAtBottom) {
        // Arriving at the bottom by moving down (including a jump from a nav
        // link) counts as scrolling down; anything else, like a rubber-band
        // bounce back, holds the current value. The baseline stays current so
        // the first scroll up from the bottom is measured from here.
        if (scrollY > lastScrollY) setIsScrollingDown(true);
        lastScrollY = scrollY;
        return;
      }

      const delta = scrollY - lastScrollY;
      if (Math.abs(delta) < movementThresholdPx) return;

      console.debug("[useScrollDirection]", delta > 0 ? "down" : "up");
      setIsScrollingDown(delta > 0);
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [revealTopPx, movementThresholdPx]);

  return isScrollingDown;
}
