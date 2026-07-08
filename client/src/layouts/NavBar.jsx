import { Box, IconButton, Link, Menu, MenuItem, Tooltip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccentButton from "@components/AccentButton";
import useNavBar from "@hooks/useNavBar";
import { Colors } from "@resources/palette";
import { Fonts } from "@resources/themes";
import { NavLinks, SectionIds } from "@resources/data";
import {
  NavContactLabel,
  OpenMenuTooltip,
  WebsiteTitle,
} from "@resources/strings";

const CONTACT_HREF = `#${SectionIds.contact}`;
const HERO_HREF = `#${SectionIds.hero}`;

// Shared style for the desktop text links.
const navLinkSx = {
  color: Colors.textSecondary,
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 500,
  transition: "color 0.15s",
  "&:hover": { color: "primary.main" },
};

// The nav's compact variant of the green pill call-to-action.
const contactButtonSx = { fontSize: 14, px: 2.25, py: 1.15, borderRadius: 2 };

export function NavBar() {
  const { isSmallScreen, anchorEl, isMenuOpen, openMenu, closeMenu } =
    useNavBar();

  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 5 },
        py: 2,
        backgroundColor: alpha(Colors.backgroundBase, 0.85),
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${alpha(Colors.border, 0.5)}`,
      }}
    >
      <Link
        href={HERO_HREF}
        underline="none"
        sx={{
          fontFamily: Fonts.display,
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: "-0.02em",
          color: Colors.textPrimary,
        }}
      >
        {WebsiteTitle}
      </Link>

      {isSmallScreen ? (
        <>
          <Tooltip title={OpenMenuTooltip}>
            <IconButton
              onClick={openMenu}
              aria-label={OpenMenuTooltip}
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
              sx={{ color: Colors.textPrimary }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={closeMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {NavLinks.map((link) => (
              <MenuItem
                key={link.href}
                component="a"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </MenuItem>
            ))}
            <MenuItem
              component="a"
              href={CONTACT_HREF}
              onClick={closeMenu}
              sx={{ color: "primary.main", fontWeight: 700 }}
            >
              {NavContactLabel}
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 3.5 }}>
          {NavLinks.map((link) => (
            <Link key={link.href} href={link.href} underline="none" sx={navLinkSx}>
              {link.label}
            </Link>
          ))}
          <AccentButton href={CONTACT_HREF} sx={contactButtonSx}>
            {NavContactLabel}
          </AccentButton>
        </Box>
      )}
    </Box>
  );
}

export default NavBar;
