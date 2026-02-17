import { useCallback } from "react";
import Parser from "rss-parser";
import { getFeed } from "medium-parser/fetcher";

function useRssParser() {
  const getFeedItems = useCallback(async () => {
    const feed = await getFeed("@jaustinjr.blog").catch((err) => {
      console.error("Get feed failed.", err);
      return null;
    });

    if (!feed) return;

    const rssParser = new Parser();

    const feedJson = await rssParser.parseString(feed.contents).catch((err) => {
      console.error("Parse contents failed.", err);
      return null;
    });

    return feedJson;
  }, []);

  const parseFeed = useCallback(async (feed) => {
    const rssParser = new Parser();

    const feedJson = await rssParser
      .parseString(feed)
      .catch(console.log("Something wrong happened."))
      .catch((err) => console.error("Parse feed failed.", err));

    feedJson.items.forEach((item) => {
      console.log(item);
    });

    return feedJson;
  }, []);

  const parseImageFromFeed = useCallback((feed) => {
    const sourceImageRegex = /(?<=src\s*=\s*["'])([^"']+)(?=["'])/g;
    let matches = feed.match(sourceImageRegex);
    return matches.length > 1 ? matches[0] : matches;
  }, []);

  return { getFeedItems, parseFeed, parseImageFromFeed };
}

export default useRssParser;
