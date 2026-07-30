import { Box, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import SectionHeading from "@components/SectionHeading";
import SectionShell from "@components/SectionShell";
import StatTile from "@components/StatTile";
import TagChip from "@components/TagChip";
import TerminalPanel from "@components/TerminalPanel";
import { Accent, Colors } from "@resources/palette.js";
import {
  AccentHoverBorderSx,
  AccentTransitionSx,
  BodyMdSx,
  CodeTextSx,
  HeadlineMdSx,
  LabelCapsSx,
} from "@resources/styles.js";
import {
  MediumParserStats,
  NodeSyncProject,
  SectionIds,
} from "@resources/data.js";
import {
  GitHubLink,
  MediumParserDescription,
  MediumParserInstallCommand,
  MediumParserSourceCta,
  MediumParserTitle,
  MediumParserVersionBadge,
  MediumParserWindowTitle,
  ProjectExploreCta,
  ProjectsHeading,
  ProjectsSectionEyebrow,
} from "@resources/strings.js";

const NodeSyncIcon = NodeSyncProject.icon;

// Container for the featured projects: a flagship terminal-window card that
// spans two columns on desktop beside a compact secondary module card. All
// copy and stats come from the shared resources.
export default function ProjectsSection() {
  const handleInstallLinkClick = () => {
    console.debug("ProjectsSection: install command link clicked");
  };

  const handleSourceLinkClick = () => {
    console.debug("ProjectsSection: source link clicked");
  };

  const handleExploreLinkClick = () => {
    console.debug("ProjectsSection: explore module link clicked");
  };

  return (
    <SectionShell id={SectionIds.projects} background={Colors.surface}>
      <SectionHeading
        eyebrow={ProjectsSectionEyebrow}
        heading={ProjectsHeading}
        sx={{ mb: { xs: 6, md: 8 } }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {/* Flagship project: full terminal window with stats and CTAs. */}
        <TerminalPanel
          dots="traffic"
          title={MediumParserWindowTitle}
          badge={MediumParserVersionBadge}
          sx={{
            gridColumn: { lg: "span 2" },
            height: "100%",
            ...AccentHoverBorderSx,
          }}
        >
          <Box
            sx={{
              p: { xs: 3, md: 5 },
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h3" sx={{ ...HeadlineMdSx, mb: 2 }}>
              {MediumParserTitle}
            </Typography>
            <Typography sx={{ ...BodyMdSx, maxWidth: "36rem", mb: 4 }}>
              {MediumParserDescription}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2,
                mb: 4,
              }}
            >
              {MediumParserStats.map((stat) => (
                <StatTile key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </Box>

            <Box
              sx={{
                mt: "auto",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              <Link
                href={GitHubLink}
                target="_blank"
                rel="noreferrer"
                underline="hover"
                onClick={handleInstallLinkClick}
                sx={{
                  ...CodeTextSx,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: Accent.dynamic,
                  ...AccentTransitionSx,
                }}
              >
                <TerminalIcon sx={{ fontSize: "1.125rem" }} />
                {MediumParserInstallCommand}
              </Link>
              <Link
                href={GitHubLink}
                target="_blank"
                rel="noreferrer"
                underline="hover"
                onClick={handleSourceLinkClick}
                sx={{
                  ...CodeTextSx,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: Colors.textSecondary,
                  transition: "color 0.3s ease",
                  "&:hover": { color: Colors.textPrimary },
                }}
              >
                <CodeIcon sx={{ fontSize: "1.125rem" }} />
                {MediumParserSourceCta}
              </Link>
            </Box>
          </Box>
        </TerminalPanel>

        {/* Secondary module: muted window chrome with tags and explore CTA. */}
        <TerminalPanel
          dots="muted"
          title={NodeSyncProject.windowTitle}
          sx={{
            height: "100%",
            backgroundColor: Colors.surfaceElevated,
            ...AccentTransitionSx,
            "&:hover": {
              backgroundColor: Colors.surfaceContainer,
              borderColor: Accent.dim(30),
            },
          }}
        >
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 3,
              }}
            >
              <NodeSyncIcon
                sx={{
                  fontSize: "2rem",
                  color: Accent.dynamic,
                  ...AccentTransitionSx,
                }}
              />
              <Typography
                component="span"
                sx={{ ...CodeTextSx, color: Colors.codeComment }}
              >
                {NodeSyncProject.orderTag}
              </Typography>
            </Box>
            <Typography component="h3" sx={{ ...HeadlineMdSx, mb: 1 }}>
              {NodeSyncProject.title}
            </Typography>
            <Typography sx={{ ...BodyMdSx, flexGrow: 1, mb: 3 }}>
              {NodeSyncProject.description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {NodeSyncProject.tags.map((tag) => (
                <TagChip key={tag} size="micro">
                  {tag}
                </TagChip>
              ))}
            </Box>
            <Link
              href={GitHubLink}
              target="_blank"
              rel="noreferrer"
              underline="none"
              onClick={handleExploreLinkClick}
              sx={{
                ...LabelCapsSx,
                mt: 3,
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: Accent.dynamic,
                transition: "gap 0.3s ease, color 0.3s ease",
                "&:hover": { gap: 1.5 },
              }}
            >
              {ProjectExploreCta}
              <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
            </Link>
          </Box>
        </TerminalPanel>
      </Box>
    </SectionShell>
  );
}
