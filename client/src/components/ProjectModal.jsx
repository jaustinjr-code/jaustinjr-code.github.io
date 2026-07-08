import { useState } from "react";
import { Box, Dialog, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProjectGlyph from "@components/ProjectGlyph";
import DeviceMockup from "@components/DeviceMockup";
import { Colors } from "@resources/palette";
import { Fonts } from "@resources/themes";
import { TypeScale } from "@resources/styles";
import { CloseModalLabel, ProjectModalEyebrow } from "@resources/strings";

/**
 * Demo modal for a project type. Driven by `project` (null when closed).
 *
 * We retain the last non-null project in local state so the modal's content
 * stays rendered during the closing transition instead of flashing empty.
 * The value is derived during render (not in an effect) so the content is
 * present on the very first open with no empty frame.
 */
export function ProjectModal({ project, onClose }) {
  const [displayed, setDisplayed] = useState(project);

  if (project && project !== displayed) {
    setDisplayed(project);
  }

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      aria-label={displayed?.title}
      fullWidth
      maxWidth="md"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: Colors.backgroundOverlay,
            backdropFilter: "blur(4px)",
          },
        },
        paper: {
          sx: {
            backgroundColor: Colors.surfaceChip,
            border: `1px solid ${Colors.border}`,
            borderRadius: "20px",
            backgroundImage: "none",
            p: { xs: 3, md: 4.5 },
            m: 2,
          },
        },
      }}
    >
      {displayed && (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
              <ProjectGlyph
                glyph={displayed.glyph}
                color={displayed.color}
                size={44}
                fontSize={16}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: Fonts.mono,
                    fontSize: 12,
                    color: displayed.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 0.5,
                  }}
                >
                  {ProjectModalEyebrow}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: TypeScale.modalHeading, m: 0 }}>
                  {displayed.title}
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={onClose}
              aria-label={CloseModalLabel}
              sx={{
                border: `1px solid ${Colors.border}`,
                borderRadius: 2,
                color: Colors.textSecondary,
                "&:hover": { borderColor: "primary.main", color: "primary.main" },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Typography
            sx={{
              fontSize: 15,
              lineHeight: 1.6,
              color: Colors.textMuted,
              m: "0 0 28px",
            }}
          >
            {displayed.description}
          </Typography>

          <DeviceMockup kind={displayed.kind} color={displayed.color} />

          <Stack
            direction="row"
            sx={{ flexWrap: "wrap", gap: 1.25, mt: 3.5 }}
          >
            {displayed.tags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  fontFamily: Fonts.mono,
                  fontSize: 12,
                  color: Colors.textMuted,
                  backgroundColor: Colors.surfaceTag,
                  border: `1px solid ${Colors.borderChip}`,
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 1.5,
                }}
              >
                {tag}
              </Box>
            ))}
          </Stack>
        </>
      )}
    </Dialog>
  );
}

export default ProjectModal;
