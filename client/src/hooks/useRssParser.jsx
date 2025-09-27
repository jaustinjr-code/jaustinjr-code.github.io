import { useCallback } from "react";
import Parser from "rss-parser";

function useRssParser() {
  const getFeedItems = useCallback(async (url) => {
    // let url = "https://www.medium.com/feed/@jaustinjr.blog";
    let response = await fetch(`https://api.allorigins.win/get?url=${url}`)
      .catch(console.log("Something wrong happened."))
      .catch(console.error("All Origins failed."));
    const feed = await response
      .json()
      .catch(console.log("Something wrong happened."))
      .catch(console.error("Response JSON failed."));
    // console.log(feed);

    let rssParser = new Parser();

    const feedJson = await rssParser
      .parseString(feed.contents)
      .catch(console.log("Something wrong happened."))
      .catch(console.error("Parse contents failed."));

    // console.log(feedJson.items);
    // feedJson.items.forEach((item) => {
    //   console.log(item);
    // });

    return feedJson;
  }, []);

  const parseFeed = useCallback(async (feed) => {
    let rssParser = new Parser();

    console.log(feed);
    const feedJson = await rssParser
      .parseString(feed)
      .catch(console.log("Something wrong happened."))
      .catch(console.error("Parse feed failed."));

    console.log(feedJson.items);
    feedJson.items.forEach((item) => {
      console.log(item);
    });

    return feedJson;
  }, []);

  const parseImageFromFeed = useCallback((feed) => {
    const sourceImageRegex = /(?<=src\s*=\s*["'])([^"']+)(?=["'])/g;
    return feed.match(sourceImageRegex);
  }, []);

  return { getFeedItems, parseFeed, parseImageFromFeed };
}

export default useRssParser;
