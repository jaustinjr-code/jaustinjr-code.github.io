import {
  Grid,
  IconButton,
  Paper,
  Typography,
  Stack,
  Tooltip,
  Button,
} from "@mui/material";
import {
  ContactDescription,
  ContactEmailButton,
  ContactEmailLink,
  ContactTitle,
  GitHubLink,
  InstagramLink,
  LinkedInLink,
  MediumLink,
  OpenGitHubTooltip,
  OpenInstagramTooltip,
  OpenLinkedInTooltip,
  OpenMediumTooltip,
  OpenResumeTooltip,
  ResumeButton,
} from "../resources/strings";
import { PagePaperStyle } from "@resources/styles";
import {
  Send,
  GitHub,
  LinkedIn,
  Instagram,
  Newspaper,
  FilePresent,
} from "@mui/icons-material";
import Resume from "@assets/resume.pdf";

const MediaButtons = [
  {
    tooltip: OpenGitHubTooltip,
    icon: <GitHub sx={{ fontSize: "inherit" }} />,
    link: GitHubLink,
  },
  {
    tooltip: OpenLinkedInTooltip,
    icon: <LinkedIn sx={{ fontSize: "inherit" }} />,
    link: LinkedInLink,
  },
  {
    tooltip: OpenInstagramTooltip,
    icon: <Instagram sx={{ fontSize: "inherit" }} />,
    link: InstagramLink,
  },
  {
    tooltip: OpenMediumTooltip,
    icon: <Newspaper sx={{ fontSize: "inherit" }} />,
    link: MediumLink,
  },
];

export function ContactPage() {
  return (
    <>
      <Paper id="contact" elevation={10} sx={PagePaperStyle}>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h4" align="center">
            {ContactTitle}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {ContactDescription}
          </Typography>

          <Tooltip title="Open Email">
            <Button
              href={ContactEmailLink}
              target="_blank"
              variant="contained"
              sx={{
                flexDirection: "row",
                height: "auto",
                py: 1,
                px: 2,
              }}
            >
              <Typography mx={1}>{ContactEmailButton}</Typography>
              <Send sx={{ fontSize: { xs: "20px", md: "30px" } }} />
            </Button>
          </Tooltip>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            mt={3}
            mb={2}
            justifyContent="center"
          >
            {MediaButtons &&
              MediaButtons.map((button) => (
                <Grid key={button.link}>
                  <Tooltip title={button.tooltip}>
                    <IconButton
                      href={button.link}
                      target="_blank"
                      size="large"
                      sx={{
                        fontSize: { xs: "28px", sm: "36px", md: "40px" },
                      }}
                    >
                      {button.icon}
                    </IconButton>
                  </Tooltip>
                </Grid>
              ))}
          </Grid>

          <Tooltip title={OpenResumeTooltip}>
            <Button
              href={Resume}
              target="_blank"
              variant="contained"
              sx={{
                flexDirection: "row",
                height: "auto",
                py: 1,
                px: 2,
              }}
            >
              <FilePresent sx={{ fontSize: { xs: "20px", md: "30px" } }} />
              <Typography mx={1}>{ResumeButton}</Typography>
            </Button>
          </Tooltip>
        </Stack>
      </Paper>
    </>
  );
}

export default ContactPage;
