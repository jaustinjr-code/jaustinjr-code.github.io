import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Divider,
  Grid,
} from "@mui/material";
import { Lightbulb } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function ArticleCard({ data, ref }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { title, creator, pubDate, categories, image, guid, contentSnippet } =
    data || {};

  const formattedDate = pubDate
    ? new Date(pubDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : undefined;

  return (
    data && (
      <Card
        elevation={2}
        sx={{
          maxWidth: isSmallScreen ? 320 : 560,
          borderRadius: 4,
          flex: "0 0 auto",
          mr: 5,
          textDecoration: "none",
        }}
        component="a"
        href={guid}
        ref={ref}
      >
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={title}
            loading="eager"
            sx={{
              height: 280,
              objectFit: isSmallScreen ? "fill" : "cover",
            }}
          />
        )}
        <CardHeader
          title={
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              gutterBottom
            >
              {title}
            </Typography>
          }
          subheader={
            <Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography variant="body2" color="text.secondary">
                  {creator}
                </Typography>
                {formattedDate && (
                  <>
                    <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {formattedDate}
                    </Typography>
                  </>
                )}
              </Stack>
              <Grid alignItems="center" flexWrap="wrap" my={1}>
                {categories &&
                  categories.map((category) => {
                    return (
                      <Chip
                        key={category}
                        size="small"
                        color="primary"
                        icon={<Lightbulb fontSize="small" />}
                        label={category}
                        sx={{ mr: 1 }}
                      />
                    );
                  })}
              </Grid>
            </Stack>
          }
        />
        {!isSmallScreen && (
          <CardContent>
            {contentSnippet && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {contentSnippet}
              </Typography>
            )}
          </CardContent>
        )}
      </Card>
    )
  );
}

export default ArticleCard;
