import { Box, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router";
import AccentButton from "@components/AccentButton.jsx";
import { Accent, Colors } from "@resources/palette.js";
import {
  ErrorPageDescription,
  ErrorPageHeading,
  ErrorPageHomeButton,
  ErrorPageTitle,
} from "@resources/strings.js";
import {
  BodyLgSx,
  HeadlineXlSx,
  LabelCapsSx,
} from "@resources/styles.js";

// Route-level error boundary styled like a crashed terminal process.
export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  if (error) console.error("[ErrorPage] route error", error);

  const handleGoHome = () => {
    console.debug("[ErrorPage] return home clicked");
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 3,
        px: 2,
        backgroundColor: Colors.surfaceDeep,
      }}
    >
      <Typography component="span" sx={{ ...LabelCapsSx, color: Accent.dynamic }}>
        {ErrorPageHeading}
      </Typography>
      <Typography component="h1" sx={HeadlineXlSx}>
        {ErrorPageTitle}
      </Typography>
      <Typography sx={{ ...BodyLgSx, maxWidth: "28rem" }}>
        {ErrorPageDescription}
      </Typography>
      <AccentButton variant="solid" onClick={handleGoHome}>
        {ErrorPageHomeButton}
      </AccentButton>
    </Box>
  );
}
