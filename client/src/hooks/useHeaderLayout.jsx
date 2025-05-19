import { useState } from "react";
import { useNavigate } from "react-router";
import { useColorScheme } from "@mui/material";

export default function useHeaderLayout() {
  let navigate = useNavigate();
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHomeClick = () => {
    navigate("/");
  };

  const onMenuClick = (event) => {
    setIsMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  const onMenuItemClick = (path) => {
    onMenuClose();

    navigate(path, {
      preventScrollReset: true,
    });
  };

  const onThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return {
    mode,
    anchorEl,
    isMenuOpen,
    onHomeClick,
    onMenuClick,
    onMenuClose,
    onMenuItemClick,
    onThemeToggle,
  };
}
