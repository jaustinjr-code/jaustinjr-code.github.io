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
} from "@mui/material";
import ThemeSwitch from "@components/ThemeSwitch";
import { MenuTitle, OpenMenuTooltip, WebsiteTitle } from "@resources/strings";
import { MainRoutes } from "@routes/Routes";
import useHeaderLayout from "@hooks/useHeaderLayout";

export function HeaderLayout() {
  const {
    mode,
    anchorEl,
    isMenuOpen,
    onHomeClick,
    onMenuClick,
    onMenuClose,
    onMenuItemClick,
    onThemeToggle,
  } = useHeaderLayout();

  return (
    <>
      <AppBar position="sticky">
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
                onClose={onMenuClose}
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
                        onClick={() => onMenuItemClick(route.path)}
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
