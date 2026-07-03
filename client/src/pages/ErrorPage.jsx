import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router";
import {
  ErrorPageHeading,
  ErrorPageTitle,
  ErrorPageDescription,
  ErrorPageHomeButton,
} from "@resources/strings";

export function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  if (error) console.error(error);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        minHeight: "100vh",
        width: "100%",
        px: { xs: 3, sm: 6, md: 12 },
        py: { xs: 6, sm: 8 },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
          fontWeight: 700,
          lineHeight: 1,
          mb: 2,
        }}
      >
        {ErrorPageHeading}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
          mb: 2,
          maxWidth: "600px",
        }}
      >
        {ErrorPageTitle}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          fontSize: { xs: "0.95rem", sm: "1rem" },
          mb: 4,
          maxWidth: "500px",
        }}
      >
        {ErrorPageDescription}
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
        sx={{ textTransform: "none", px: 4, py: 1.5, fontSize: "1rem" }}
      >
        {ErrorPageHomeButton}
      </Button>
    </Box>
  );
}

export default ErrorPage;
