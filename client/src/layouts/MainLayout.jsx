import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Container, Box } from "@mui/material";

export function MainLayout({ children }) {
  return (
    <>
      <HeaderLayout />
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 4 }, // padding adjusts with screen size
          py: { xs: 2, sm: 3, md: 4 },
          minHeight: "calc(100vh - 120px)", // leave space for header+footer
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "600px", md: "900px" }, // tighter on mobile
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {children}
        </Box>
      </Container>
      <FooterLayout />
    </>
  );
}

export default MainLayout;
