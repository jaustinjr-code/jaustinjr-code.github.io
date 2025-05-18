import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Container,
  Button,
  Tooltip,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useColorScheme } from "@mui/material/styles";
import ThemeSwitch from "@components/ThemeSwitch";
import { MenuTitle, OpenMenuTooltip, WebsiteTitle } from "@resources/strings";
import { MainRoutes } from "@routes/Routes";

export function HeaderLayout() {
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

  const onThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <AppBar position="absolute">
        <Container sx={{ width: "100%" }}>
          <Toolbar disableGutters sx={{ width: "100%" }}>
            <Box>
              <Button
                onClick={onHomeClick}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {WebsiteTitle}
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1, px: 5 }}>
              <ThemeSwitch checked={mode === "dark"} onChange={onThemeToggle} />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={OpenMenuTooltip}>
                <Button variant="contained" onClick={onMenuClick}>
                  {MenuTitle}
                </Button>
              </Tooltip>
              <Menu
                open={isMenuOpen}
                onClose={() => {
                  setIsMenuOpen(false);
                  setAnchorEl(null);
                }}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                {MainRoutes &&
                  MainRoutes.map((route) => {
                    return (
                      <MenuItem
                        id={route.path}
                        key={route.path}
                        name={route.name}
                        title={route.name}
                      >
                        <Typography>{route.name}</Typography>
                      </MenuItem>
                    );
                  })}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default HeaderLayout;
