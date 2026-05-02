import { useEffect, useState } from "react";
import { parseFeed } from "medium-parser/parser";

export default function useBlog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const createArticleEmbeds = async () => {
      const articleFeed = await parseFeed("@jaustinjr").catch((err) => {
        console.error("Parse feed failed.", err);
        return [];
      });
      setArticles(articleFeed.items);
    };
    createArticleEmbeds();
  }, []);

  return { articles };
}
