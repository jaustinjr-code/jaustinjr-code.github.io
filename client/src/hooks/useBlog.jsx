import { useEffect, useState } from "react";
import useRssParser from "./useRssParser";
import { BlogFeedUrl } from "@resources/strings";

export default function useBlog() {
  const [articles, setArticles] = useState([]);
  const { getFeedItems, parseImageFromFeed } = useRssParser();

  useEffect(() => {
    const createArticleEmbeds = async () => {
      const liveArticles = await getFeedItems(BlogFeedUrl);
      let articleEmbeds = [];
      liveArticles.items.forEach(async (item) => {
        let img = null;
        if (item.content === undefined) {
          img = parseImageFromFeed(item["content:encoded"]);
        } else img = parseImageFromFeed(item.content);

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
