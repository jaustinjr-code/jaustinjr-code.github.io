import { Box, Stack, Typography } from "@mui/material";
import Section from "@components/Section";
import SectionLabel from "@components/SectionLabel";
import SocialLinks from "@components/SocialLinks";
import { Colors } from "@resources/palette";
import { AboutSocials, SectionIds } from "@resources/data";
import {
  AboutHeading,
  AboutParagraphs,
  AboutSectionLabel,
} from "@resources/strings";

export function AboutSection() {
  return (
    <Section
      id={SectionIds.about}
      variant="alt"
      containerSx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
        gap: { xs: 4, md: 8 },
        alignItems: "start",
      }}
    >
      <Box>
        <SectionLabel>{AboutSectionLabel}</SectionLabel>
        <Typography variant="h2" sx={{ fontSize: 34, m: 0 }}>
          {AboutHeading}
        </Typography>
      </Box>

      <Stack spacing={2.5}>
        {AboutParagraphs.map((paragraph, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: 17,
              lineHeight: 1.75,
              color: Colors.textSecondary,
              m: 0,
            }}
          >
            {paragraph}
          </Typography>
        ))}
        <SocialLinks links={AboutSocials} variant="pill" sx={{ mt: 1 }} />
      </Stack>
    </Section>
  );
}

export default AboutSection;
