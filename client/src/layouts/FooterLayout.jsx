import { Paper, Container, Box, Typography } from "@mui/material";

export const FooterLayout = () => {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
        component="footer"
        square
        variant="elevation"
      >
        <Container>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} James Austin Jr. All rights
              reserved.
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
};
