import { useState } from "react";
import { useNavigate } from "react-router";
import { useColorScheme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useHeaderLayout() {
  let navigate = useNavigate();
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
    isSmallScreen,
  };
}
