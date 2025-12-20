import { Box, Paper, Stack, Typography } from "@mui/material";
import pfp from "@assets/pfp.jpeg";
import { AboutMeParagraphs, AboutMeTitle, PfpAlt } from "@resources/strings";
import { PagePaperStyle } from "@resources/styles";

export function AboutMePage() {
  return (
    <Paper id="aboutme" elevation={10} sx={PagePaperStyle}>
      <Stack
        direction={{ xs: "column", md: "row" }} // column on mobile, row on desktop
        alignItems="center"
        spacing={{ xs: 3, md: 5 }}
        sx={{ width: "100%" }}
      >
        {/* Profile Picture */}
        <Box
          component="img"
          alt={PfpAlt}
          src={pfp}
          sx={{
            width: { xs: "80%", sm: "60%", md: "40%" },
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
        <Stack
          flexGrow={1}
          px={{ xs: 2, sm: 3, md: 5 }}
          minHeight={{ xs: "auto", md: "50vh" }}
          justifyContent="center"
          spacing={2}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            {AboutMeTitle}
          </Typography>

          {AboutMeParagraphs?.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default AboutMePage;
