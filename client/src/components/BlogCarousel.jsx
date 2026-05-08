// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import ArticleCard from "@components/ArticleCard";
import useCarousel from "@hooks/useCarousel";

export function BlogCarousel({ articles }) {
  const { xTranslation, itemRef, handleHoverDuration } = useCarousel(
    articles.length,
  );

  const FAST_DURATION = 80;
  const SLOW_DURATION = 200;

  return (
    <motion.div
      style={{
        x: xTranslation,
        display: "flex",
        flexDirection: "row",
        marginBottom: 5,
      }}
      onHoverStart={() => {
        handleHoverDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        handleHoverDuration(FAST_DURATION);
      }}
    >
      {[...articles, ...articles].map((article, idx) => (
        <ArticleCard
          key={article.guid + "-" + idx}
          data={article}
          ref={idx === 0 ? itemRef : null}
        />
      ))}
    </motion.div>
  );
}

export default BlogCarousel;
