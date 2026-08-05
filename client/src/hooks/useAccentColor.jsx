import { useCallback, useEffect, useState } from "react";
import { AccentBaseHue } from "@resources/palette.js";

// Owns the site-wide shiftable accent color. The hue is written to the
// `--accent-hue` CSS custom property on the document root; each color scheme
// maps that hue to an accessible `--accent-color` (see AccentSchemeFormulas in
// palette.js), so every style built on Accent.dynamic updates instantly — and
// stays contrast-compliant when the light/dark mode toggles — without any
// component re-rendering. Returns the current hue and a setter for slider UIs.
export default function useAccentColor() {
  const [hue, setHue] = useState(AccentBaseHue);

  useEffect(() => {
    console.debug("[useAccentColor] applying accent hue", hue);
    document.documentElement.style.setProperty("--accent-hue", hue);
    return () => {
      document.documentElement.style.removeProperty("--accent-hue");
    };
  }, [hue]);

  const shiftHue = useCallback((event, value) => {
    console.debug("[useAccentColor] slider input", value);
    setHue(Array.isArray(value) ? value[0] : value);
  }, []);

  return { hue, shiftHue };
}
