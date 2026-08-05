import { Box, Typography } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccentButton from "@components/AccentButton.jsx";
import AccentSliderCard from "@components/AccentSliderCard.jsx";
import SectionShell from "@components/SectionShell.jsx";
import TerminalRain from "@components/TerminalRain.jsx";
import useAccentColor from "@hooks/useAccentColor.jsx";
import useSectionScroll from "@hooks/useSectionScroll.jsx";
import useTerminalRain from "@hooks/useTerminalRain.jsx";
import { Accent } from "@resources/palette.js";
import { HeroHeadingElementId, SectionIds } from "@resources/data.js";
import {
  AccentGlowSx,
  AccentTransitionSx,
  BodyLgSx,
  HeadlineXlSx,
} from "@resources/styles.js";
import {
  HeroDescription,
  HeroHeadingHighlight,
  HeroHeadingName,
  HeroHeadingTrail,
  HeroPortraitAlt,
  HeroPrimaryCta,
  HeroSecondaryCta,
} from "@resources/strings.js";
import portrait from "@assets/pfp.jpeg";
import resumePdf from "@assets/resume.pdf";

// Hero section container: wires the accent-shift and terminal-rain hooks and
// lays out the intro per the design — headline + CTAs on the left, glowing
// portrait with the ACCENT_SHIFT slider card beneath it on the right, all
// floating over the animated terminal backdrop.
export default function HeroSection() {
  const { hue, shiftHue } = useAccentColor();
  const { rows, litCells } = useTerminalRain();
  const { goToSection } = useSectionScroll();

  const handleResumeClick = () => {
    console.debug("[HeroSection] resume download clicked");
  };

  const handleViewSourceClick = () => {
    console.debug("[HeroSection] view source clicked");
    goToSection(SectionIds.projects);
  };

  return (
    <SectionShell
      id={SectionIds.intro}
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
      contentSx={{ flexGrow: 1 }}
    >
      {/* Backdrop: soft radial accent glow + animated terminal rain. Kept at
          low opacity behind the content so the global grid still reads. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.2,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            ...AccentGlowSx,
            ...AccentTransitionSx,
          }}
        />
        <TerminalRain rows={rows} litCells={litCells} />
      </Box>

      {/* Content: single column on mobile, 7/5 split on the 12-col grid. */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(12, 1fr)" },
          gap: 3,
          alignItems: "center",
        }}
      >
        {/* Headline / lead / CTA column */}
        <Box sx={{ gridColumn: { xs: "auto", lg: "span 7" } }}>
          <Typography
            component="h1"
            id={HeroHeadingElementId}
            sx={{ ...HeadlineXlSx, maxWidth: "42rem" }}
          >
            <Box component="span" sx={{ display: "block" }}>
              {HeroHeadingName}
            </Box>
            <Box
              component="span"
              sx={{ ...AccentTransitionSx, color: Accent.dynamic }}
            >
              {HeroHeadingHighlight}
            </Box>
            {HeroHeadingTrail}
          </Typography>
          <Typography sx={{ ...BodyLgSx, mt: 3, maxWidth: "36rem" }}>
            {HeroDescription}
          </Typography>
          <Box sx={{ mt: 5, display: "flex", flexWrap: "wrap", gap: 2 }}>
            <AccentButton
              variant="solid"
              startIcon={<DescriptionOutlinedIcon />}
              href={resumePdf}
              download
              onClick={handleResumeClick}
            >
              {HeroPrimaryCta}
            </AccentButton>
            <AccentButton
              variant="ghost"
              onClick={handleViewSourceClick}
            >
              {HeroSecondaryCta}
            </AccentButton>
          </Box>
        </Box>

        {/* Portrait column: hover clears the grayscale and brightens the glow */}
        <Box
          sx={{
            gridColumn: { xs: "auto", lg: "span 5" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 400,
              "&:hover .heroPortraitGlow": { opacity: 0.8 },
              "&:hover .heroPortraitImage": { filter: "grayscale(0)" },
            }}
          >
            {/* Portrait + its halo, kept as their own stacking context so the
                glow hugs the image and not the accent control below it */}
            <Box sx={{ position: "relative" }}>
              {/* Soft blurred accent halo behind the portrait */}
              <Box
                aria-hidden
                className="heroPortraitGlow"
                sx={{
                  position: "absolute",
                  inset: "-16px",
                  backgroundColor: Accent.dim(20),
                  filter: "blur(40px)",
                  borderRadius: "50%",
                  opacity: 0.5,
                  transition: "opacity 0.3s ease, background-color 0.3s ease",
                }}
              />
              <Box
                component="img"
                className="heroPortraitImage"
                src={portrait}
                alt={HeroPortraitAlt}
                sx={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  filter: "grayscale(1)",
                  transition: "filter 0.7s ease",
                  border: "2px solid rgba(59, 73, 76, 0.3)",
                }}
              />
            </Box>
            {/* Accent control sits below the portrait rather than over it */}
            <Box sx={{ position: "relative", mt: 2 }}>
              <AccentSliderCard value={hue} onChange={shiftHue} />
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionShell>
  );
}
