import { Paper, Typography } from "@mui/material";

export function HomePage() {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography>This is home!</Typography>
      </Paper>
    </>
  );
}

export default HomePage;
