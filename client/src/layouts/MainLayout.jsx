import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Container } from "@mui/material";

export function MainLayout({ children }) {
  return (
    <>
      <HeaderLayout />
      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
      </Container>
      <FooterLayout />
    </>
  );
}

export default MainLayout;
