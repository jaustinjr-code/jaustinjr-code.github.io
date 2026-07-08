import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import AccentButton from "@components/AccentButton";
import GlowOrb from "@components/GlowOrb";
import { AccentPrimaryGlow, Colors } from "@resources/palette";
import { Fonts } from "@resources/themes";
import { SectionIds } from "@resources/data";
import {
  Animations,
  CONTENT_MAX_WIDTH,
  SECTION_PADDING_X,
  TypeScale,
} from "@resources/styles";
import {
  ContactEmailAddress,
  HeroBadgeText,
  HeroDescription,
  HeroHeadingHighlight,
  HeroHeadingLead,
  HeroHeadingTrail,
  HeroPrimaryCta,
  HeroSecondaryCta,
} from "@resources/strings";

export function HeroSection() {
  return (
    <Box
      component="section"
      id={SectionIds.hero}
      sx={{
        position: "relative",
        px: SECTION_PADDING_X,
        pt: { xs: 10, md: 15 },
        pb: { xs: 8, md: 12.5 },
        maxWidth: `${CONTENT_MAX_WIDTH}px`,
        mx: "auto",
      }}
    >
      <GlowOrb
        size={420}
        color={alpha(AccentPrimaryGlow, 0.35)}
        animation={Animations.glowPulseSlow}
        sx={{ top: -60, left: -100 }}
      />
      <GlowOrb
        size={320}
        color={alpha(Colors.glowCyan, 0.2)}
        animation={Animations.glowPulseFast}
        sx={{ top: 80, right: -80 }}
      />

      <Box sx={{ position: "relative", animation: Animations.fadeUp }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: Colors.surfaceBadge,
            border: `1px solid ${Colors.borderBadge}`,
            color: "primary.main",
            fontFamily: Fonts.mono,
            fontSize: 13,
            fontWeight: 600,
            px: 1.75,
            py: 0.75,
            borderRadius: "100px",
            mb: 3,
          }}
        >
          <Box
            component="span"
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "primary.main",
            }}
          />
          {HeroBadgeText}
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: TypeScale.heroHeading,
            lineHeight: 1.05,
            m: "0 0 24px",
            maxWidth: 820,
          }}
        >
          {HeroHeadingLead}
          <Box component="span" sx={{ color: "primary.main" }}>
            {HeroHeadingHighlight}
          </Box>
          {HeroHeadingTrail}
        </Typography>

        <Typography
          sx={{
            fontSize: TypeScale.lead,
            lineHeight: 1.6,
            color: Colors.textMuted,
            maxWidth: 600,
            m: "0 0 36px",
          }}
        >
          {HeroDescription}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", rowGap: 2 }}>
          <AccentButton href={`#${SectionIds.projects}`}>
            {HeroPrimaryCta}
          </AccentButton>
          <AccentButton variant="outline" href={`mailto:${ContactEmailAddress}`}>
            {HeroSecondaryCta}
          </AccentButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default HeroSection;
