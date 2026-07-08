import { Box, Typography } from "@mui/material";
import Section from "@components/Section";
import SectionLabel from "@components/SectionLabel";
import SkillChip from "@components/SkillChip";
import { TypeScale } from "@resources/styles";
import { Skills, SectionIds } from "@resources/data";
import { SkillsHeading, SkillsSectionLabel } from "@resources/strings";

export function SkillsSection() {
  return (
    <Section id={SectionIds.skills} variant="base">
      <SectionLabel>{SkillsSectionLabel}</SectionLabel>
      <Typography
        variant="h2"
        sx={{ fontSize: TypeScale.sectionHeading, m: "0 0 36px" }}
      >
        {SkillsHeading}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
        {Skills.map((skill) => (
          <SkillChip key={skill.name} name={skill.name} color={skill.color} />
        ))}
      </Box>
    </Section>
  );
}

export default SkillsSection;
