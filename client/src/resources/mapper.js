export const toBlog = (json) => {
  return {
    creator: json.creator,
    title: json.title,
    link: json.link,
    pubDate: json.pubDate,
    image: null,
    guid: json.guid,
    categories: json.categories,
    contentSnippet: json.contentSnippet || json["content:encodedSnippet"],
  };
};

export default { toBlog };
