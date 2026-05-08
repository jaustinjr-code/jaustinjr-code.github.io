import { useEffect, useState } from "react";
import { parseFeed } from "medium-rss-feed-parser/parser";
import { BlogFeedUsername } from "@resources/strings";
import { BlogStatus } from "@resources/enums";

export default function useBlog() {
  const [articles, setArticles] = useState([]);
  const [blogStatus, setBlogStatus] = useState(BlogStatus.loading);

  useEffect(() => {
    const initBlog = async () => {
      const articleFeed = await parseFeed(BlogFeedUsername).catch((err) => {
        console.error("Parse feed failed.", err);
        return null;
      });

      if (!articleFeed || !articleFeed.items) {
        setBlogStatus(BlogStatus.error);
        return;
      }

      setArticles(articleFeed.items);
      setBlogStatus(BlogStatus.success);
    };

    initBlog();
  }, []);

  const isLoading = blogStatus === BlogStatus.loading;
  const isSuccess = blogStatus === BlogStatus.success;
  const isError = blogStatus === BlogStatus.error;

  return {
    articles,
    isLoading,
    isSuccess,
    isError,
  };
}
