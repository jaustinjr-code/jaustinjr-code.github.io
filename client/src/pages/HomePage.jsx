import { Box } from "@mui/material";
import AboutMePage from "./AboutMePage";
import BlogPage from "./BlogPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

export function HomePage() {
  return (
    <>
      <Box flexDirection="column" my={5}>
        <AboutMePage />
        {/* <ProjectsPage /> */}
        <BlogPage />
        <ContactPage />
      </Box>
    </>
  );
}

export default HomePage;
