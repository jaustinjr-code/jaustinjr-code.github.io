import { useEffect, useState } from "react";
import useRssParser from "./useRssParser";
import { BlogFeedUrl } from "@resources/strings";

export default function useBlog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getFeedItems, parseImageFromFeed } = useRssParser();

  useEffect(() => {
    const createArticleEmbeds = async () => {
      setIsLoading(true);
      const liveArticles = await getFeedItems(BlogFeedUrl);

      if (!liveArticles.items) return;

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
      setIsLoading(false);
    };
    createArticleEmbeds();
  }, [getFeedItems, parseImageFromFeed]);

  return { articles, isLoading };
}
