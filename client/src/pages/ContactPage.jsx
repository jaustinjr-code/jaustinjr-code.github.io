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
    icon: <GitHub sx={{ fontSize: "40px" }} />,
    link: GitHubLink,
  },
  {
    tooltip: OpenLinkedInTooltip,
    icon: <LinkedIn sx={{ fontSize: "40px" }} />,
    link: LinkedInLink,
  },
  {
    tooltip: OpenInstagramTooltip,
    icon: <Instagram sx={{ fontSize: "40px" }} />,
    link: InstagramLink,
  },
  {
    tooltip: OpenMediumTooltip,
    icon: <Newspaper sx={{ fontSize: "40px" }} />,
    link: MediumLink,
  },
];

export function ContactPage() {
  const onMediaClick = () => {
    window.alert("Opening a new tab...");
  };

  return (
    <>
      <Paper id="contact" elevation={10} sx={PagePaperStyle}>
        <Stack>
          <Typography variant="h2" align="center">
            {ContactTitle}
          </Typography>
          <Typography variant="h4" align="center" my={2}>
            {ContactDescription}
          </Typography>
          <Tooltip title="Open Email">
            <Button
              href={ContactEmailLink}
              target="_blank"
              variant="contained"
              sx={{
                flexDirection: "row",
                height: "5vh",
              }}
            >
              <Typography mx={1}>{ContactEmailButton}</Typography>
              <Send sx={{ fontSize: "30px" }} />
            </Button>
          </Tooltip>
          <Grid
            container
            direction="row"
            spacing={5}
            mt={5}
            mb={2}
            justifyContent="center"
          >
            {MediaButtons &&
              MediaButtons.map((button) => {
                return (
                  <Tooltip key={button.link} title={button.tooltip}>
                    <IconButton
                      key={button.link}
                      onClick={onMediaClick}
                      href={button.link}
                      target="_blank"
                      sx={{ fontSize: "50vh" }}
                      variant="outlined"
                    >
                      {button.icon}
                    </IconButton>
                  </Tooltip>
                );
              })}
          </Grid>
          <Tooltip title={OpenResumeTooltip}>
            <Button
              onClick={onMediaClick}
              href={Resume}
              target="_blank"
              variant="contained"
              sx={{
                height: "5vh",
                flexDirection: "row",
              }}
            >
              <FilePresent sx={{ fontSize: "30px" }} />
              <Typography mx={1}>{ResumeButton}</Typography>
            </Button>
          </Tooltip>
        </Stack>
      </Paper>
    </>
  );
}

export default ContactPage;
