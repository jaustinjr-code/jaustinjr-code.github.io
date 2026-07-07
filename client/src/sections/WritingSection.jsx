import { Box, Typography } from "@mui/material";
import Section from "@components/Section";
import SectionLabel from "@components/SectionLabel";
import AccentButton from "@components/AccentButton";
import { Colors } from "@resources/palette";
import { SectionIds } from "@resources/data";
import {
  MediumLink,
  WritingCta,
  WritingDescription,
  WritingHeading,
  WritingSectionLabel,
} from "@resources/strings";

export function WritingSection() {
  return (
    <Section
      id={SectionIds.writing}
      variant="base"
      containerSx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ maxWidth: 560 }}>
        <SectionLabel>{WritingSectionLabel}</SectionLabel>
        <Typography variant="h2" sx={{ fontSize: 34, m: "0 0 16px" }}>
          {WritingHeading}
        </Typography>
        <Typography
          sx={{ fontSize: 17, lineHeight: 1.7, color: Colors.textMuted, m: 0 }}
        >
          {WritingDescription}
        </Typography>
      </Box>

      <AccentButton
        href={MediumLink}
        target="_blank"
        rel="noopener"
        sx={{ whiteSpace: "nowrap" }}
      >
        {WritingCta}
      </AccentButton>
    </Section>
  );
}

export default WritingSection;
