import { Box, Typography } from "@mui/material";
import Section from "@components/Section";
import SectionLabel from "@components/SectionLabel";
import ProjectCard from "@components/ProjectCard";
import ProjectModal from "@components/ProjectModal";
import useProjectModal from "@hooks/useProjectModal";
import { Colors } from "@resources/palette";
import { ProjectTypes, SectionIds } from "@resources/data";
import {
  ProjectsDescription,
  ProjectsHeading,
  ProjectsSectionLabel,
} from "@resources/strings";

export function ProjectsSection() {
  const { activeProject, openProject, closeProject } = useProjectModal();

  return (
    <Section id={SectionIds.projects} variant="alt">
      <SectionLabel>{ProjectsSectionLabel}</SectionLabel>
      <Typography variant="h2" sx={{ fontSize: 34, m: "0 0 12px" }}>
        {ProjectsHeading}
      </Typography>
      <Typography
        sx={{
          fontSize: 17,
          lineHeight: 1.6,
          color: Colors.textMuted,
          maxWidth: 640,
          m: "0 0 44px",
        }}
      >
        {ProjectsDescription}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {ProjectTypes.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={openProject}
          />
        ))}
      </Box>

      <ProjectModal project={activeProject} onClose={closeProject} />
    </Section>
  );
}

export default ProjectsSection;
