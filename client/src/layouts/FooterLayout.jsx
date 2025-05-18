import { Paper, Container, Box, Typography } from "@mui/material";
import { Copyright } from "@resources/strings";

export function FooterLayout() {
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
        variant="outlined"
      >
        <Container>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} {Copyright}
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default FooterLayout;
