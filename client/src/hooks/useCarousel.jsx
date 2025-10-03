import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useMotionValue } from "motion/react";
import useMeasure from "react-use-measure";
import { animate } from "motion";

export default function useCarousel(length) {
  let [itemRef, { width: itemWidth }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const DEFAULT_DURATION = 80;

  const [duration, setDuration] = useState(DEFAULT_DURATION);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -(length * (itemWidth + 40));

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
  }, [xTranslation, duration, length, itemWidth, rerender, mustFinish]);

  const handleHoverDuration = (newDuration) => {
    setMustFinish(true);
    setDuration(newDuration);
  };

  return { xTranslation, itemRef, handleHoverDuration };
}
