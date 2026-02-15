// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import useBlog from "@hooks/useBlog";
import ArticleCard from "@components/ArticleCard";
import BlankCard from "@components/BlankCard";
import { StartEndTransparencyGradientStyle } from "@resources/styles";
import useCarousel from "@hooks/useCarousel";

export function BlogCarousel() {
  const { articles, isLoading } = useBlog();
  const { xTranslation, itemRef, handleHoverDuration } = useCarousel(
    articles.length,
  );

  const FAST_DURATION = 80;
  const SLOW_DURATION = 200;

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        paddingBottom: "25px", // make responsive, consider using a different component from div
        ...StartEndTransparencyGradientStyle,
      }}
    >
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
        {(isLoading
          ? Array.from(new Array(5))
          : [...articles, ...articles]
        ).map((article, idx) =>
          article ? (
            <ArticleCard
              key={idx}
              data={article}
              ref={idx === 0 ? itemRef : null}
            />
          ) : (
            <BlankCard key={idx} />
          ),
        )}
      </motion.div>
    </div>
  );
}

export default BlogCarousel;
