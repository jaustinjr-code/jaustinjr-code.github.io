import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useActiveSection from "@hooks/useActiveSection.jsx";
import useColorMode from "@hooks/useColorMode.jsx";
import useMobileMenu from "@hooks/useMobileMenu.jsx";
import useScrolledPast from "@hooks/useScrolledPast.jsx";
import useSectionScroll from "@hooks/useSectionScroll.jsx";
import { HeroHeadingElementId, NavLinks } from "@resources/data.js";
import { Accent, Colors } from "@resources/palette.js";
import {
  CloseMenuTooltip,
  OpenMenuTooltip,
  ProfileAvatarAlt,
  SwitchToDarkModeTooltip,
  SwitchToLightModeTooltip,
  WebsiteTitle,
} from "@resources/strings.js";
import {
  AccentTransitionSx,
  CONTENT_MAX_WIDTH,
  Fonts,
  GlassSurfaceSx,
  LabelCapsSx,
  NAV_HEIGHT,
  SECTION_PADDING_X,
  TypeScale,
} from "@resources/styles.js";
import profilePhoto from "@assets/pfp.jpeg";

const sectionIds = NavLinks.map((link) => link.sectionId);

// Sticky glass "HUD" header: brand mark, hash-route section links with
// scroll-spy highlighting on desktop, and a drawer menu on mobile. Mimicking
// the iOS top app bar, it stays hidden until the hero's large name headline
// scrolls out of view, then slides in.
export default function NavBar() {
  const activeSectionId = useActiveSection(sectionIds);
  const { isOpen, openMenu, closeMenu } = useMobileMenu();
  const { goToSection } = useSectionScroll();
  const { isLightMode, toggleColorMode } = useColorMode();
  const isRevealed = useScrolledPast(HeroHeadingElementId);

  const handleNavClick = (sectionId) => {
    console.debug("[NavBar] nav link clicked", sectionId);
    closeMenu();
    goToSection(sectionId);
  };

  const linkSx = (isActive) => ({
    ...LabelCapsSx,
    ...AccentTransitionSx,
    color: isActive ? Accent.dynamic : Colors.textSecondary,
    cursor: "pointer",
    background: "none",
    border: "none",
    p: 0,
    "&:hover": { color: Accent.dynamic },
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          ...GlassSurfaceSx,
          backgroundImage: "none",
          // iOS-style reveal: slide in once the hero name scrolls away.
          // `visibility` transitions discretely after the slide finishes so
          // the hidden bar is untabbable and invisible to screen readers.
          transform: isRevealed ? "translateY(0)" : "translateY(-100%)",
          visibility: isRevealed ? "visible" : "hidden",
          transition: "transform 0.3s ease, visibility 0.3s",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: NAV_HEIGHT,
            maxWidth: `${CONTENT_MAX_WIDTH}px`,
            width: "100%",
            mx: "auto",
            px: SECTION_PADDING_X,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Avatar
              src={profilePhoto}
              alt={ProfileAvatarAlt}
              sx={{
                width: 32,
                height: 32,
                border: "2px solid rgba(59, 73, 76, 0.3)",
              }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: Fonts.display,
                fontSize: TypeScale.headlineMd,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: Colors.textPrimary,
                whiteSpace: "nowrap",
              }}
            >
              {WebsiteTitle}
            </Typography>
          </Box>

          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
              ml: "auto",
            }}
          >
            {NavLinks.map((link) => (
              <Box
                key={link.sectionId}
                component="button"
                type="button"
                onClick={() => handleNavClick(link.sectionId)}
                aria-current={
                  activeSectionId === link.sectionId ? "page" : undefined
                }
                sx={linkSx(activeSectionId === link.sectionId)}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          <IconButton
            aria-label={
              isLightMode ? SwitchToDarkModeTooltip : SwitchToLightModeTooltip
            }
            onClick={toggleColorMode}
            sx={{
              ml: { xs: "auto", md: 0 },
              color: Colors.textSecondary,
              "&:hover": { color: Accent.dynamic },
            }}
          >
            {isLightMode ? (
              <DarkModeIcon fontSize="small" />
            ) : (
              <LightModeIcon fontSize="small" />
            )}
          </IconButton>

          <IconButton
            aria-label={OpenMenuTooltip}
            onClick={openMenu}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: Colors.textPrimary,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeMenu}
        // Keep the page scrollable while the drawer closes so navigating to a
        // section from the menu can smooth-scroll immediately.
        ModalProps={{ disableScrollLock: true }}
        PaperProps={{
          sx: {
            ...GlassSurfaceSx,
            borderLeft: "1px solid rgba(59, 73, 76, 0.2)",
            width: "min(70vw, 320px)",
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton
            aria-label={CloseMenuTooltip}
            onClick={closeMenu}
            sx={{ color: Colors.textPrimary }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NavLinks.map((link) => (
            <ListItemButton
              key={link.sectionId}
              onClick={() => handleNavClick(link.sectionId)}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  sx: {
                    ...LabelCapsSx,
                    ...AccentTransitionSx,
                    color:
                      activeSectionId === link.sectionId
                        ? Accent.dynamic
                        : Colors.textSecondary,
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
