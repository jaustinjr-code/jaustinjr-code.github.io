import { Box } from "@mui/material";
import NavBar from "@layouts/NavBar";
import HeroSection from "@sections/HeroSection";
import AboutSection from "@sections/AboutSection";
import SkillsSection from "@sections/SkillsSection";
import ProjectsSection from "@sections/ProjectsSection";
import WritingSection from "@sections/WritingSection";
import ContactSection from "@sections/ContactSection";
import { Colors } from "@resources/palette";

// The single-page portfolio: a sticky nav over a vertical stack of sections.
export function PortfolioPage() {
  return (
    <Box
      sx={{
        backgroundColor: Colors.backgroundBase,
        color: Colors.textPrimary,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <WritingSection />
      <ContactSection />
    </Box>
  );
}

export default PortfolioPage;
