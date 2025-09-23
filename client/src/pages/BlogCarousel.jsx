import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue } from "motion/react";
import useBlog from "@hooks/useBlog";
import useMeasure from "react-use-measure";
import { animate } from "motion";
import ArticleCard from "@components/ArticleCard";

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
        marginBottom: 5,
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
        <ArticleCard
          key={idx}
          data={article}
          ref={idx === 0 ? refCard : null}
        />
      ))}
    </motion.div>
  );
}

export default BlogPage;
