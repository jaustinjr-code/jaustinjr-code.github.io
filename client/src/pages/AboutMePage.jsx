import { Box, Paper, Stack, Typography } from "@mui/material";
import pfp from "@assets/pfp.jpeg";
import { AboutMeParagraphs, AboutMeTitle, PfpAlt } from "@resources/strings";
import { PagePaperStyle } from "@resources/styles";

export function AboutMePage() {
  return (
    <>
      <Paper id="aboutme" elevation={10} sx={PagePaperStyle}>
        <Box component="img" width="40%" alt={PfpAlt} src={pfp} />
        <Stack
          px={5}
          flexGrow={1}
          minHeight="50vh"
          justifyContent="space-evenly"
        >
          <Typography variant="h2">{AboutMeTitle}</Typography>
          {AboutMeParagraphs &&
            AboutMeParagraphs.map((paragraph, index) => {
              return <Typography key={index}>{paragraph}</Typography>;
            })}
        </Stack>
      </Paper>
    </>
  );
}

export default AboutMePage;
