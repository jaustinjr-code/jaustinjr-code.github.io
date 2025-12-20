import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Box } from "@mui/material";

export function MainLayout({ children }) {
  return (
    <>
      <HeaderLayout />
      <Box
        disableGutters
        width="100%"
        justifyItems="center"
        alignContent="center"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }, // padding adjusts with screen size
          py: { xs: 2, sm: 3, md: 4 },
          minHeight: "calc(100vh - 120px)", // leave space for header+footer
        }}
      >
        {children}
      </Box>
      <FooterLayout />
    </>
  );
}

export default MainLayout;
