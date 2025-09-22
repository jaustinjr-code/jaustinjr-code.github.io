import { useEffect, useState } from "react";
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
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue } from "motion/react";
import useBlog from "@hooks/useBlog";
import useMeasure from "react-use-measure";
import { animate } from "motion";

export function BlogPage() {
  const { articles } = useBlog();

  let [refCard, { width: cardWidth }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const FAST_DURATION = 40;
  const SLOW_DURATION = 200;

  const [duration, setDuration] = useState(FAST_DURATION);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -(articles.length * (cardWidth + 40));
    console.log("card width:", cardWidth);
    console.log("reset point:", finalPosition);
    console.log("x coord:", xTranslation.get());

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [
    xTranslation,
    duration,
    articles.length,
    cardWidth,
    rerender,
    mustFinish,
  ]);

  return (
    <motion.div
      style={{
        x: xTranslation,
        display: "flex",
        flexDirection: "row",
      }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
    >
      {[...articles, ...articles].map((article, idx) => (
        <ArticleMetaCard
          key={idx}
          data={article}
          ref={idx === 0 ? refCard : null}
        />
      ))}
    </motion.div>
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
function ArticleMetaCard({ data, ref }) {
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
        maxWidth: 560,
        borderRadius: 4,
        flex: "0 0 auto",
        mr: 5,
      }}
      ref={ref}
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
