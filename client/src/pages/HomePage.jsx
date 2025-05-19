import { Box } from "@mui/material";
import AboutMePage from "./AboutMePage";
import ProjectsPage from "./ProjectsPage";

export function HomePage() {
  return (
    <>
      <Box flexDirection="column" my={5}>
        <AboutMePage />
        <ProjectsPage />
      </Box>
    </>
  );
}

export default HomePage;
