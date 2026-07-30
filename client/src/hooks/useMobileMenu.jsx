import { useCallback, useState } from "react";

// Open/close state for the mobile navigation drawer, with debug logging on
// every user-driven toggle.
export default function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    console.debug("[useMobileMenu] opening menu");
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    console.debug("[useMobileMenu] closing menu");
    setIsOpen(false);
  }, []);

  return { isOpen, openMenu, closeMenu };
}
