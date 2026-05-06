import { useEffect, useMemo, useState } from "react";
import { parseFeed } from "medium-rss-feed-parser/parser";
import { BlogFeedUrl } from "@resources/strings";
import { BlogStatus } from "@resources/enums";

export default function useBlog() {
  const [articles, setArticles] = useState([]);
  const [blogStatus, setBlogStatus] = useState(BlogStatus.loading);

  useEffect(() => {
    const initBlog = async () => {
      const articleFeed = await parseFeed("@jaustinjr").catch((err) => {
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

    try {
      initBlog();
    } catch (err) {
      console.error("Error initializing blog:", err);
      setBlogStatus(BlogStatus.error);
    }
  }, []);

  const isLoading = useMemo(
    () => blogStatus === BlogStatus.loading,
    [blogStatus],
  );
  const isSuccess = useMemo(
    () => blogStatus === BlogStatus.success,
    [blogStatus],
  );
  const isError = useMemo(() => blogStatus === BlogStatus.error, [blogStatus]);

  return {
    articles,
    isLoading,
    isSuccess,
    isError,
  };
}
