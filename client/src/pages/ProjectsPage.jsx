import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Tooltip,
} from "@mui/material";
import {
  ProjectsTitle,
  SeeMoreProjectsButton,
  SeeMoreProjectsTooltip,
} from "@resources/strings";

export function ProjectsPage() {
  const onSeeMoreProjectsClick = () => {
    window.alert("Leaving this page...");
  };

  return (
    <>
      <Paper
        id="projects"
        elevation={10}
        sx={{
          p: 5,
          mb: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "50vh",
        }}
      >
        <Box flexDirection="column" display="flex" minHeight="50vh">
          <Typography variant="h2" align="center" mb={5}>
            {ProjectsTitle}
          </Typography>
          <Grid
            container
            direction="row"
            spacing={5}
            mb={5}
            alignItems="center"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://placehold.co/600x400"
                  alt="Placeholder 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Project 1
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This project is a project about project 1.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://placehold.co/600x400"
                  alt="Placeholder 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Project 2
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This project is a project about project 2.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://placehold.co/600x400"
                  alt="Placeholder 3"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Project 3
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This project is a project about project 3.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Tooltip title={SeeMoreProjectsTooltip}>
            <Button
              variant="contained"
              onClick={onSeeMoreProjectsClick}
              href="https://github.com/jaustinjr-code"
            >
              {SeeMoreProjectsButton}
            </Button>
          </Tooltip>
        </Box>
      </Paper>
    </>
  );
}

export default ProjectsPage;
