import { Box, Paper, Stack, Typography } from "@mui/material";
import pfp from "@assets/pfp.jpeg";
import { AboutMeParagraphs, AboutMeTitle, PfpAlt } from "@resources/strings";

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
        <Box component="img" width="40%" alt={PfpAlt} src={pfp} />
        <Stack
          px={5}
          flexGrow={1}
          minHeight="50vh"
          justifyContent="space-evenly"
        >
          <Typography variant="h2">{AboutMeTitle}</Typography>
          {AboutMeParagraphs &&
            AboutMeParagraphs.map((paragraph) => {
              return <Typography>{paragraph}</Typography>;
            })}
        </Stack>
      </Paper>
    </>
  );
}

export default HomePage;
