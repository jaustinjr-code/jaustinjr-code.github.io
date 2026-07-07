import { Box, Typography } from "@mui/material";
import Section from "@components/Section";
import AccentButton from "@components/AccentButton";
import SocialLinks from "@components/SocialLinks";
import { Colors } from "@resources/palette";
import { ContactSocials, SectionIds } from "@resources/data";
import {
  ContactDescription,
  ContactEmailAddress,
  ContactHeading,
  CopyrightText,
} from "@resources/strings";

export function ContactSection() {
  return (
    <Section
      id={SectionIds.contact}
      variant="contact"
      sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 7.5 } }}
      containerSx={{ textAlign: "center" }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "clamp(32px, 5vw, 48px)", m: "0 0 20px" }}
      >
        {ContactHeading}
      </Typography>
      <Typography sx={{ fontSize: 18, color: Colors.textMuted, m: "0 0 32px" }}>
        {ContactDescription}
      </Typography>

      <AccentButton
        href={`mailto:${ContactEmailAddress}`}
        sx={{ fontSize: 16, px: 4, py: 2 }}
      >
        {ContactEmailAddress}
      </AccentButton>

      <SocialLinks
        links={ContactSocials}
        variant="plain"
        sx={{ gap: 3, justifyContent: "center", mt: 5 }}
      />

      <Box
        sx={{
          mt: 7,
          pt: 3,
          borderTop: `1px solid ${Colors.borderFooter}`,
          fontSize: 13,
          color: Colors.textDim,
        }}
      >
        &copy; {new Date().getFullYear()} {CopyrightText}
      </Box>
    </Section>
  );
}

export default ContactSection;
