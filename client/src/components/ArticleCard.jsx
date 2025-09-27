import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * ArticleMetaCard
 * Renders article metadata (title, creator, date, read time, cover image, link).
 *
 * Props:
 * - data: {
 *     title: string,
 *     creator: string,
 *     date: string | Date, // e.g. "2024-09-17"
 *     readTime?: string,   // e.g. "6 min read"
 *     image?: { src: string, alt?: string, credit?: string },
 *     guid?: string,
 *     contentSnippet?: string,
 *   }
 */
function ArticleCard({ data, ref }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { title, creator, pubDate, readTime, image, guid, contentSnippet } =
    data || {};

  const formattedDate = pubDate
    ? new Date(pubDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : undefined;

  return (
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
          sx={{
            height: 280,
            objectFit: isSmallScreen ? "fill" : "cover",
          }}
        />
      )}
      <CardHeader
        title={
          <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
            {title}
          </Typography>
        }
        subheader={
          !isSmallScreen && (
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
              {readTime && (
                <>
                  <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
                  <Chip
                    size="small"
                    icon={<ArticleIcon fontSize="small" />}
                    label={readTime}
                  />
                </>
              )}
            </Stack>
          )
        }
      />
      {!isSmallScreen && (
        <CardContent>
          {contentSnippet && (
            <Typography variant="body1" sx={{ mb: 2 }}>
              {contentSnippet}
            </Typography>
          )}

          {image?.credit && (
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              sx={{ mt: -1, mb: 1 }}
            >
              {image.credit}
            </Typography>
          )}
        </CardContent>
      )}
    </Card>
  );
}

export default ArticleCard;
