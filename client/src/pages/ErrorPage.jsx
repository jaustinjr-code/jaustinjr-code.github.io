import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export function ErrorPage() {
  const navigate = useNavigate();

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
        Oops!
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
          mb: 2,
          maxWidth: "600px",
        }}
      >
        Something went wrong.
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
        Something went wrong. Please try again or return to the home page.
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
        sx={{ textTransform: "none", px: 4, py: 1.5, fontSize: "1rem" }}
      >
        Go Home
      </Button>
    </Box>
  );
}

export default ErrorPage;
