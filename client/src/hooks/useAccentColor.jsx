import { useCallback, useEffect, useState } from "react";
import { AccentBaseHue } from "@resources/palette.js";

// Owns the site-wide shiftable accent color. The hue is written to the
// `--accent-color` CSS custom property on the document root, so every style
// built on Accent.dynamic (see palette.js) updates instantly without any
// component re-rendering. Returns the current hue and a setter for slider UIs.
export default function useAccentColor() {
  const [hue, setHue] = useState(AccentBaseHue);

  useEffect(() => {
    const color = `hsl(${hue}, 100%, 75%)`;
    console.debug("[useAccentColor] applying accent hue", hue, color);
    document.documentElement.style.setProperty("--accent-color", color);
    return () => {
      document.documentElement.style.removeProperty("--accent-color");
    };
  }, [hue]);

  const shiftHue = useCallback((event, value) => {
    console.debug("[useAccentColor] slider input", value);
    setHue(Array.isArray(value) ? value[0] : value);
  }, []);

  return { hue, shiftHue };
}
