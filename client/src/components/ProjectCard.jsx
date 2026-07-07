import { Box, Typography } from "@mui/material";
import ProjectGlyph from "@components/ProjectGlyph";
import { Colors } from "@resources/palette";
import { Fonts } from "@resources/themes";
import { ProjectCardCta } from "@resources/strings";

// A clickable project-type card. Opens the project's demo modal on click or
// keyboard activation (Enter / Space).
export function ProjectCard({ project, onOpen }) {
  const activate = () => onOpen(project);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate();
    }
  };

  return (
    <Box
      role="button"
      tabIndex={0}
      onClick={activate}
      onKeyDown={handleKeyDown}
      sx={{
        cursor: "pointer",
        backgroundColor: Colors.surfaceCard,
        border: `1px solid ${Colors.border}`,
        borderRadius: 4,
        p: 3.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        transition: "transform 0.15s, border-color 0.15s",
        "&:hover, &:focus-visible": {
          transform: "translateY(-4px)",
          borderColor: project.color,
          outline: "none",
        },
      }}
    >
      <ProjectGlyph glyph={project.glyph} color={project.color} />
      <Box>
        <Typography
          variant="h3"
          sx={{ fontSize: 20, fontWeight: 700, m: "0 0 8px" }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{ fontSize: 15, lineHeight: 1.6, color: Colors.textCardBody, m: 0 }}
        >
          {project.summary}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "auto",
          fontFamily: Fonts.body,
          fontSize: 14,
          fontWeight: 600,
          color: project.color,
        }}
      >
        {ProjectCardCta}
      </Box>
    </Box>
  );
}

export default ProjectCard;
