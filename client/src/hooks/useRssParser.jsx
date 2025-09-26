import { useCallback } from "react";
import Parser from "rss-parser";

function useRssParser() {
  const getFeedItems = useCallback(async (url) => {
    // let url = "https://www.medium.com/feed/@jaustinjr.blog";
    let response = await fetch(
      `https://api.allorigins.win/get?url=${url}`
    ).catch(console.log("Something wrong happened."));
    const feed = await response
      .json()
      .catch(console.log("Something wrong happened."));
    console.log(feed);

    let rssParser = new Parser();

    const feedJson = await rssParser
      .parseString(feed.contents)
      .catch(console.log("Something wrong happened."));

    console.log(feedJson.items);
    feedJson.items.forEach((item) => {
      console.log(item);
    });

    return feedJson;
  }, []);

  const parseFeed = useCallback(async (feed) => {
    let rssParser = new Parser();

    const feedJson = await rssParser
      .parseString(feed)
      .catch(console.log("Something wrong happened."));

    console.log(feedJson.items);
    feedJson.items.forEach((item) => {
      console.log(item);
    });
  }, []);

  return { getFeedItems, parseFeed };
}

export default useRssParser;
