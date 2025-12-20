import { useCallback } from "react";
import Parser from "rss-parser";

function useRssParser() {
  const getFeedItems = useCallback(async (url) => {
    let response = await fetch(`https://api.allorigins.win/get?url=${url}`)
      .catch(console.log("Something wrong happened."))
      .catch((err) => console.error("All Origins failed.", err));

    if (!(response && response.ok)) return {};

    const feed = await response
      .json()
      .catch(console.log("Something wrong happened."))
      .catch((err) => console.error("Response JSON failed.", err));

    if (!(feed && feed.contents)) return {};

    const rssParser = new Parser();

    const feedJson = await rssParser
      .parseString(feed.contents)
      .catch(console.log("Something wrong happened."))
      .catch((err) => console.error("Parse contents failed.", err));

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
