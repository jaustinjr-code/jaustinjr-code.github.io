import { useEffect, useState } from "react";
import useRssParser from "./useRssParser";

export default function useBlog() {
  const [articles, setArticles] = useState([]);
  const { getFeedItems, parseImageFromFeed } = useRssParser();

  useEffect(() => {
    const createArticleEmbeds = async () => {
      const liveArticles = await getFeedItems();

      if (!(liveArticles && liveArticles.items)) {
        return;
      }

      let articleEmbeds = [];
      liveArticles.items.forEach((item) => {
        let img =
          item.content === undefined
            ? parseImageFromFeed(item["content:encoded"])
            : parseImageFromFeed(item.content);

        articleEmbeds.push({
          ...item,
          image: img,
        });
      });
      setArticles(articleEmbeds);
    };
    createArticleEmbeds();
  }, [getFeedItems, parseImageFromFeed]);

  return { articles };
}
