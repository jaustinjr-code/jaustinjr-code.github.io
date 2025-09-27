import { useEffect, useState } from "react";
import useRssParser from "./useRssParser";

export default function useBlog() {
  const [articles, setArticles] = useState([
    {
      title: "1",
      author: "James Austin Jr",
      date: "2024-09-17",
      readTime: "6 min read",
      image: {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
        alt: "Laptop and notebook on a desk",
        credit: "Photo by Sergey Zolkin on Unsplash",
      },
      url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
      excerpt:
        "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
    },
  ]);
  const { getFeedItems, parseFeed } = useRssParser();

  useEffect(() => {
    const createArticleEmbeds = async () => {
      const liveArticles = await getFeedItems(
        "https://www.medium.com/feed/@jaustinjr.blog"
      );
      let articleEmbeds = [];
      liveArticles.items.forEach(async (item) => {
        console.log(item.content);
        console.log(item);
        // img tag does not have a close brace, parse it manually
        // parseFeed(item.content);

        const regex = /(?<=src\s*=\s*["'])([^"']+)(?=["'])/g;
        let img = item.content.match(regex);

        // let imgSub = item.content.substring(item.content.indexOf("<img "));
        // let subEnd = imgSub.indexOf(">");
        // let imgTag = imgSub.substring(0, subEnd);

        // console.log(imgTag.toString());
        // let imgStart = imgTag.indexOf('src="') + 5;
        // let imgSrc = imgTag.substring(imgStart);
        // let imgEnd = imgSrc.indexOf('"');
        // console.log(imgSrc, imgEnd);
        // const img = imgTag.substring(imgStart, imgEnd);
        console.log(img.toString());

        articleEmbeds.push({
          ...item,
          image: img,
        });
      });
      setArticles(articleEmbeds);
    };
    createArticleEmbeds();
  }, [getFeedItems, parseFeed]);

  //   const articles = [
  //     {
  //       title: "1",
  //       author: "James Austin Jr",
  //       date: "2024-09-17",
  //       readTime: "6 min read",
  //       image: {
  //         src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  //         alt: "Laptop and notebook on a desk",
  //         credit: "Photo by Sergey Zolkin on Unsplash",
  //       },
  //       url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
  //       excerpt:
  //         "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
  //     },
  //     {
  //       title: "2",
  //       author: "James Austin Jr",
  //       date: "2024-09-17",
  //       readTime: "6 min read",
  //       image: {
  //         src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  //         alt: "Laptop and notebook on a desk",
  //         credit: "Photo by Sergey Zolkin on Unsplash",
  //       },
  //       url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
  //       excerpt:
  //         "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
  //     },
  //     {
  //       title: "3",
  //       author: "James Austin Jr",
  //       date: "2024-09-17",
  //       readTime: "6 min read",
  //       image: {
  //         src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  //         alt: "Laptop and notebook on a desk",
  //         credit: "Photo by Sergey Zolkin on Unsplash",
  //       },
  //       url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
  //       excerpt:
  //         "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
  //     },
  //     {
  //       title: "4",
  //       author: "James Austin Jr",
  //       date: "2024-09-17",
  //       readTime: "6 min read",
  //       image: {
  //         src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  //         alt: "Laptop and notebook on a desk",
  //         credit: "Photo by Sergey Zolkin on Unsplash",
  //       },
  //       url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
  //       excerpt:
  //         "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
  //     },
  //     {
  //       title: "5",
  //       author: "James Austin Jr",
  //       date: "2024-09-17",
  //       readTime: "6 min read",
  //       image: {
  //         src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  //         alt: "Laptop and notebook on a desk",
  //         credit: "Photo by Sergey Zolkin on Unsplash",
  //       },
  //       url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
  //       excerpt:
  //         "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
  //     },
  //     {
  //       title: "6",
  //       author: "James Austin Jr",
  //       date: "2024-09-17",
  //       readTime: "6 min read",
  //       image: {
  //         src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  //         alt: "Laptop and notebook on a desk",
  //         credit: "Photo by Sergey Zolkin on Unsplash",
  //       },
  //       url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
  //       excerpt:
  //         "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
  //     },
  //     {
  //       title: "How I Became a Software Engineer",
  //       author: "James Austin Jr",
  //       date: "2024-09-17",
  //       readTime: "6 min read",
  //       image: {
  //         src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  //         alt: "Laptop and notebook on a desk",
  //         credit: "Photo by Sergey Zolkin on Unsplash",
  //       },
  //       url: "https://medium.com/@jaustinjr.blog/my-journey-to-becoming-a-software-engineer-f67befbe4a41",
  //       excerpt:
  //         "A personal reflection on the winding path into software engineering — the starts, stalls, and breakthroughs that shaped the journey.",
  //     },
  //   ];

  return { articles };
}
