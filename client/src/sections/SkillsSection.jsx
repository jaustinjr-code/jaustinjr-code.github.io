import { Box } from "@mui/material";
import SectionShell from "@components/SectionShell.jsx";
import SectionHeading from "@components/SectionHeading.jsx";
import SkillPanel from "@components/SkillPanel.jsx";
import SkillLevelBar from "@components/SkillLevelBar.jsx";
import IconListRow from "@components/IconListRow.jsx";
import TagChip from "@components/TagChip.jsx";
import {
  Accent,
  AccentSecondary,
  AccentTertiary,
  Colors,
} from "@resources/palette.js";
import { AccentTransitionSx } from "@resources/styles.js";
import {
  FrameworkSkills,
  InfrastructureSkills,
  LanguageSkills,
  SectionIds,
} from "@resources/data.js";
import {
  SkillFrameworksPanelTitle,
  SkillInfrastructurePanelTitle,
  SkillLanguagesPanelTitle,
  SkillsHeading,
  SkillsSectionEyebrow,
} from "@resources/strings.js";

// Shared geometry for the two decorative glow blobs that float behind the
// capability panels.
const glowBlobSx = {
  position: "absolute",
  zIndex: -1,
  width: { xs: 240, md: 384 },
  height: { xs: 240, md: 384 },
  borderRadius: "50%",
  filter: "blur(120px)",
  pointerEvents: "none",
};

// The "Technical Arsenal" capabilities matrix: a centered heading over three
// deep-surface panels — accent-coded proficiency bars, framework chips, and
// infrastructure icon rows — with soft accent glows drifting behind them.
export default function SkillsSection() {
  return (
    <SectionShell
      id={SectionIds.skills}
      background={Colors.surfaceContainer}
      sx={{ overflow: "hidden" }}
    >
      <Box
        aria-hidden
        sx={{
          ...glowBlobSx,
          top: 0,
          right: 0,
          backgroundColor: Accent.dim(5),
          ...AccentTransitionSx,
        }}
      />
      <Box
        aria-hidden
        sx={{
          ...glowBlobSx,
          bottom: 0,
          left: 0,
          backgroundColor: `color-mix(in srgb, ${AccentTertiary} 5%, transparent)`,
        }}
      />
      <SectionHeading
        align="center"
        eyebrow={SkillsSectionEyebrow}
        heading={SkillsHeading}
        sx={{ mb: { xs: 6, md: 8 } }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        <SkillPanel accentColor={Accent.dynamic} title={SkillLanguagesPanelTitle}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {LanguageSkills.map((skill) => (
              <SkillLevelBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                proficiency={skill.proficiency}
              />
            ))}
          </Box>
        </SkillPanel>
        <SkillPanel accentColor={AccentSecondary} title={SkillFrameworksPanelTitle}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {FrameworkSkills.map((framework) => (
              <TagChip key={framework} size="code" hoverColor={AccentSecondary}>
                {framework}
              </TagChip>
            ))}
          </Box>
        </SkillPanel>
        <SkillPanel
          accentColor={AccentTertiary}
          title={SkillInfrastructurePanelTitle}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {InfrastructureSkills.map((item) => (
              <IconListRow
                key={item.name}
                icon={item.icon}
                label={item.name}
                iconColor={AccentTertiary}
              />
            ))}
          </Box>
        </SkillPanel>
      </Box>
    </SectionShell>
  );
}
