import HeaderLayout from "./HeaderLayout";
import ShowcaseLayout from "./ShowcaseLayout";
import FooterLayout from "./FooterLayout";
import { Container, Box } from "@mui/material";
import BlogPage from "../pages/BlogCarousel";

export function MainLayout({ children }) {
  return (
    <>
      <HeaderLayout />
      <ShowcaseLayout />
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, sm: 3, md: 4 }, // padding adjusts with screen size
          py: { xs: 2, sm: 3, md: 4 },
          minHeight: "calc(100vh - 120px)", // leave space for header+footer
        }}
      >
        {children}
      </Container>
      <FooterLayout />
    </>
  );
}

export default MainLayout;
