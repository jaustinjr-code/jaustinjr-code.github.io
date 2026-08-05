import { Box, Typography } from "@mui/material";
import SectionShell from "@components/SectionShell.jsx";
import AccentButton from "@components/AccentButton.jsx";
import ContactChannelRow from "@components/ContactChannelRow.jsx";
import CornerBrackets from "@components/CornerBrackets.jsx";
import TerminalTextField from "@components/TerminalTextField.jsx";
import useContactForm from "@hooks/useContactForm.jsx";
import { Accent, Colors } from "@resources/palette.js";
import {
  AccentTransitionSx,
  BodyLgSx,
  HeadlineXlSx,
  LabelCapsSx,
} from "@resources/styles.js";
import { ContactChannels, SectionIds } from "@resources/data.js";
import {
  ContactDescription,
  ContactFormEmailLabel,
  ContactFormEmailPlaceholder,
  ContactFormMessageLabel,
  ContactFormMessagePlaceholder,
  ContactFormNameLabel,
  ContactFormNamePlaceholder,
  ContactFormSubmitCta,
  ContactHeading,
  ContactSectionEyebrow,
} from "@resources/strings.js";

// The "Initialize_Comms" closer: an accent eyebrow, headline, and the direct
// contact channels on the left; a corner-bracketed terminal form card on the
// right that drafts a mailto: message through useContactForm.
export default function ContactSection() {
  const { fields, handleFieldChange, handleSubmit } = useContactForm();

  const handleChannelClick = (label) => () => {
    console.debug("[ContactSection] contact channel clicked:", label);
  };

  return (
    <SectionShell id={SectionIds.contact} background={Colors.surfaceDeep}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 8, lg: 12 },
        }}
      >
        <Box>
          <Typography
            component="span"
            sx={{
              ...LabelCapsSx,
              ...AccentTransitionSx,
              color: Accent.dynamic,
            }}
          >
            {ContactSectionEyebrow}
          </Typography>
          <Typography component="h2" sx={{ ...HeadlineXlSx, mt: 1.5, mb: 4 }}>
            {ContactHeading}
          </Typography>
          <Typography sx={{ ...BodyLgSx, mb: { xs: 4, md: 6 } }}>
            {ContactDescription}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {ContactChannels.map((channel) => (
              <ContactChannelRow
                key={channel.label}
                href={channel.href}
                icon={channel.icon}
                label={channel.label}
                display={channel.display}
                onClick={handleChannelClick(channel.label)}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: Colors.surface,
            border: "1px solid rgba(59, 73, 76, 0.1)",
            p: { xs: 3, md: 5 },
          }}
        >
          <CornerBrackets />
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TerminalTextField
              label={ContactFormNameLabel}
              placeholder={ContactFormNamePlaceholder}
              type="text"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
              required
            />
            <TerminalTextField
              label={ContactFormEmailLabel}
              placeholder={ContactFormEmailPlaceholder}
              type="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              required
            />
            <TerminalTextField
              label={ContactFormMessageLabel}
              placeholder={ContactFormMessagePlaceholder}
              type="textarea"
              rows={4}
              name="message"
              value={fields.message}
              onChange={handleFieldChange}
              required
            />
            <AccentButton type="submit" variant="solid" sx={{ width: "100%" }}>
              {ContactFormSubmitCta}
            </AccentButton>
          </Box>
        </Box>
      </Box>
    </SectionShell>
  );
}
