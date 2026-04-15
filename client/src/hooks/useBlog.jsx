import { useEffect, useState } from "react";
// import useRssParser from "./useRssParser";
import { parseFeed } from "medium-parser/parser";

export default function useBlog() {
  const [articles, setArticles] = useState([]);
  // const { getFeedItems, parseImageFromFeed } = useRssParser();

  useEffect(() => {
    const createArticleEmbeds = async () => {
      // const liveArticles = await getFeedItems();

      // if (!(liveArticles && liveArticles.items)) {
      //   return;
      // }

      // let articleEmbeds = [];
      // liveArticles.items.forEach((item) => {
      //   let img =
      //     item.content === undefined
      //       ? parseImageFromFeed(item["content:encoded"])
      //       : parseImageFromFeed(item.content);

      //   articleEmbeds.push({
      //     ...item,
      //     image: img,
      //   });
      // });

      const articleEmbeds = await parseFeed("@jaustinjr.blog").catch((err) => {
        console.error("Parse feed failed.", err);
        return [];
      });
      setArticles(articleEmbeds);
    };
    createArticleEmbeds();
  }, []);

  return { articles };
}
