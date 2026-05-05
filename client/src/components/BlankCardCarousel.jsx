import { useMemo } from "react";
import BlankCard from "@components/BlankCard";

export function BlankCardCarousel({ numCards = 5, isAnimated = "pulse" }) {
  const blankCards = useMemo(() => {
    return Array.from(new Array(numCards)).map((_, idx) => (
      <BlankCard key={idx} isAnimated={isAnimated} />
    ));
  }, [numCards, isAnimated]);

  return blankCards;
}

export default BlankCardCarousel;
