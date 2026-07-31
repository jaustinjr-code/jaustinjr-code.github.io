import { useCallback } from "react";
import { useColorScheme } from "@mui/material/styles";

// Owns the light/dark mode toggle. Wraps MUI's useColorScheme, which persists
// the chosen mode to localStorage and swaps the `.light` / `.dark` class on
// <html> — flipping both the MUI scheme palette and the custom `--color-*`
// tokens defined in styles.js. Dark is the site's default scheme.
export default function useColorMode() {
  const { mode, setMode } = useColorScheme();
  const isLightMode = mode === "light";

  const toggleColorMode = useCallback(() => {
    const nextMode = isLightMode ? "dark" : "light";
    console.debug("[useColorMode] switching color mode", nextMode);
    setMode(nextMode);
  }, [isLightMode, setMode]);

  return { isLightMode, toggleColorMode };
}
