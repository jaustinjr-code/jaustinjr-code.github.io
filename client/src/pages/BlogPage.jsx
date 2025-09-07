import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Chip,
  Stack,
  Box,
  Divider,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { PagePaperStyle } from "@resources/styles";
import { motion, useMotionValue } from "motion/react";
import useBlog from "@hooks/useBlog";
import useMeasure from "react-use-measure";
import { animate } from "motion";

export function BlogPage() {
  const { articles } = useBlog();
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: "25",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <>
      <Paper id="aboutme" elevation={10} sx={PagePaperStyle}>
        <motion.div
          ref={ref}
          style={{ display: "flex", flexDirection: "row", x: xTranslation }}
        >
          {[...articles, ...articles].map((article, idx) => (
            <ArticleMetaCard key={idx} data={article} />
          ))}
        </motion.div>
      </Paper>
    </>
  );
}

/**
 * ArticleMetaCard
 * Renders article metadata (title, author, date, read time, cover image, link).
 *
 * Props:
 * - data: {
 *     title: string,
 *     author: string,
 *     date: string | Date, // e.g. "2024-09-17"
 *     readTime?: string,   // e.g. "6 min read"
 *     image?: { src: string, alt?: string, credit?: string },
 *     url?: string,
 *     excerpt?: string,
 *   }
 */
function ArticleMetaCard({ data }) {
  const { title, author, date, readTime, image, url, excerpt } = data || {};

  const formattedDate = date
    ? new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : undefined;

  return (
    <Card
      elevation={2}
      sx={{
        maxWidth: 760,
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {image?.src && (
        <CardMedia
          component="img"
          image={image.src}
          alt={image.alt || title}
          sx={{ height: 280, objectFit: "cover" }}
        />
      )}

      <CardHeader
        avatar={
          <Avatar aria-label="author">{(author || "?").charAt(0)}</Avatar>
        }
        title={
          <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
            {title}
          </Typography>
        }
        subheader={
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography variant="body2" color="text.secondary">
              {author}
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
        }
      />

      <CardContent>
        {excerpt && (
          <Typography variant="body1" sx={{ mb: 2 }}>
            {excerpt}
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

        {url && (
          <Box>
            <MuiLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              Read on Medium
            </MuiLink>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default BlogPage;
