import { Box, CardMedia, Paper, Stack, Typography } from "@mui/material";
import pfp from "@assets/pfp.jpeg";

export function HomePage() {
  return (
    <>
      <Paper
        sx={{
          p: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "50vh",
        }}
      >
        <Box component="img" width="25%" alt="Profile Picture" src={pfp} />
        <Box p={5} flexGrow={1}>
          <Typography variant="h2">About Me</Typography>
          <Typography>This is home!</Typography>
        </Box>
      </Paper>
    </>
  );
}

export default HomePage;
