import { Box, Container, Link, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FooterLinks } from "@resources/data.js";
import { Accent, Colors } from "@resources/palette.js";
import { CopyrightText } from "@resources/strings.js";
import {
  AccentTransitionSx,
  CodeTextSx,
  CONTENT_MAX_WIDTH,
  LabelCapsSx,
  SECTION_PADDING_X,
} from "@resources/styles.js";

// Page footer: copyright line and the social link row. Sits at the natural end
// of the continuous page.
export default function Footer() {
  const isMobileOrTablet = useMediaQuery((theme) =>
    theme.breakpoints.down("sm"),
  );

  const handleLinkClick = (label) => {
    console.debug("[Footer] social link clicked", label);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: Colors.surfaceContainer,
        borderTop: "1px solid rgba(59, 73, 76, 0.1)",
        py: 4,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          px: SECTION_PADDING_X,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          component="span"
          sx={{ ...LabelCapsSx, color: Colors.codeComment }}
        >
          {CopyrightText}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {FooterLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                underline="none"
                onClick={() => handleLinkClick(link.label)}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: Colors.textSecondary,
                  ...AccentTransitionSx,
                  "&:hover": { color: Accent.dynamic },
                }}
              >
                <Icon sx={{ fontSize: 18 }} />
                {!isMobileOrTablet && (
                  <Typography component="span" sx={CodeTextSx}>
                    {link.label}
                  </Typography>
                )}
              </Link>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
