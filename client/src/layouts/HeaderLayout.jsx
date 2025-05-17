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
import { useState } from "react";
import { useNavigate } from "react-router";

export const HeaderLayout = () => {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHomeClick = () => {
    navigate("/");
  };

  const onMenuClick = (event) => {
    setIsMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="absolute">
        <Container sx={{ width: "100%" }}>
          <Toolbar disableGutters sx={{ width: "100%" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Button
                onClick={onHomeClick}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                James Austin Jr.
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Menu">
                <Button variant="contained" onClick={onMenuClick}>
                  Menu
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
                <MenuItem title="About Me">
                  <Typography>About Me</Typography>
                </MenuItem>
                <MenuItem title="Projects">
                  <Typography>Projects</Typography>
                </MenuItem>
                <MenuItem title="Contact">
                  <Typography>Contact</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
