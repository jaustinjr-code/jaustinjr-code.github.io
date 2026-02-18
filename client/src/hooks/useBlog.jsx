import { useEffect, useMemo, useState } from "react";
import useRssParser from "./useRssParser";
import { BlogFeedUrl } from "@resources/strings";
import { BlogStatus } from "@resources/enums";

export default function useBlog() {
  const [articles, setArticles] = useState([]);
  const [blogStatus, setBlogStatus] = useState(BlogStatus.loading);
  const { getFeedItems, parseImageFromFeed } = useRssParser();

  useEffect(() => {
    const createArticleEmbeds = async () => {
      const liveArticles = await getFeedItems(BlogFeedUrl);

      if (!(liveArticles && liveArticles.items)) {
        setBlogStatus(BlogStatus.error);
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
      setBlogStatus(BlogStatus.success);
    };
    createArticleEmbeds();
  }, [getFeedItems, parseImageFromFeed]);

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
