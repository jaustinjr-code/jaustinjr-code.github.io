import { Box } from "@mui/material";
import NavBar from "@layouts/NavBar.jsx";
import Footer from "@layouts/Footer.jsx";
import HeroSection from "@sections/HeroSection.jsx";
import ExperienceSection from "@sections/ExperienceSection.jsx";
import ProjectsSection from "@sections/ProjectsSection.jsx";
import SkillsSection from "@sections/SkillsSection.jsx";
import ContactSection from "@sections/ContactSection.jsx";
import { Colors } from "@resources/palette.js";

// The one continuous page: a fixed glass nav over a vertical stack of
// self-contained sections, ending in the footer. Every section owns its own
// data and anchor id, so reordering the page is just reordering these lines.
// No top padding: the nav stays hidden until the hero name scrolls away, so
// content starts at the viewport top and the revealed bar overlays it
// (anchored sections still clear it via their scroll margin).
export default function PortfolioPage() {
  return (
    <Box
      sx={{
        color: Colors.textPrimary,
        minHeight: "100vh",
        // `clip` (not `hidden`) contains decorative off-canvas glows without
        // creating a scroll container that would break the fixed nav.
        overflowX: "clip",
      }}
    >
      <NavBar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
