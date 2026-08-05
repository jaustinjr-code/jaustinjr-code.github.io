import { Box, Link, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import SectionHeading from "@components/SectionHeading";
import SectionShell from "@components/SectionShell";
import StatTile from "@components/StatTile";
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
import { MediumParserStats, SectionIds } from "@resources/data.js";
import {
  MediumParserGitHubLink,
  MediumParserNpmLink,
  MediumParserDescription,
  MediumParserInstallCommand,
  MediumParserSourceCta,
  MediumParserTitle,
  MediumParserVersionBadge,
  MediumParserWindowTitle,
  ProjectsHeading,
  ProjectsSectionEyebrow,
} from "@resources/strings.js";

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
                <StatTile
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
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
                href={MediumParserGitHubLink}
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
                {MediumParserNpmLink}
              </Link>
              <Link
                href={MediumParserInstallCommand}
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
      </Box>
    </SectionShell>
  );
}
