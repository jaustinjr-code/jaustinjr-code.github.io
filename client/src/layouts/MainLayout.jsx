import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";

export function MainLayout({
  config = {},
  slots = {},
  variant = "standard",
}) {
  const {
    showHeader = true,
    showFooter = true,
    showSidebar = false,
    maxWidth = "100%",
  } = config;

  const {
    header = null,
    footer = null,
    sidebar = null,
    main = null,
  } = slots;

  const layoutConfigs = {
    standard: {
      container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
      content: {
        flex: 1,
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3, md: 4 },
      },
    },
    sidebar: {
      container: { display: "grid", gridTemplateColumns: "250px 1fr", minHeight: "100vh" },
      content: {
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3, md: 4 },
      },
    },
    twocolumn: {
      container: { display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" },
      content: {
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3, md: 4 },
      },
    },
  };

  const currentConfig = layoutConfigs[variant] || layoutConfigs.standard;

  return (
    <Box sx={currentConfig.container}>
      {showHeader && (header || <HeaderLayout />)}

      <Box sx={{ display: "flex", flex: 1, maxWidth }}>
        {showSidebar && sidebar && (
          <Box sx={{ width: 250, borderRight: "1px solid #e0e0e0" }}>
            {sidebar}
          </Box>
        )}

        <Box sx={{ flex: 1, ...currentConfig.content }}>
          {main}
        </Box>
      </Box>

      {showFooter && (footer || <FooterLayout />)}
    </Box>
  );
}

MainLayout.propTypes = {
  config: PropTypes.shape({
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    showSidebar: PropTypes.bool,
    maxWidth: PropTypes.string,
  }),
  slots: PropTypes.shape({
    header: PropTypes.node,
    footer: PropTypes.node,
    sidebar: PropTypes.node,
    main: PropTypes.node,
  }),
  variant: PropTypes.oneOf(["standard", "sidebar", "twocolumn"]),
};

export default MainLayout;
