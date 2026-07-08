import { useState } from "react";
import { useMediaQuery } from "@mui/material";

// Container logic for the NavBar: tracks the responsive breakpoint (whether to
// collapse into a hamburger menu) and the mobile menu's open/anchor state.
// Keeping this out of the component lets NavBar stay purely presentational.
export default function useNavBar() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return { isSmallScreen, anchorEl, isMenuOpen, openMenu, closeMenu };
}
