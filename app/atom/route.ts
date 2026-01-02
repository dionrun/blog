import RSS from "rss";
import { getPostsWithHtmlContent } from "@/app/get-posts";

export async function GET() {
  const posts = await getPostsWithHtmlContent();

  const feed = new RSS({
    title: "dion.run",
    site_url: "https://dion.run",
    feed_url: "https://dion.run/atom",
    description: "김동규(Dion)의 블로그",
  });

  posts.forEach(post => {
    feed.item({
      title: post.title,
      url: `https://dion.run/${post.id}`,
      date: new Date(post.date),
      description: post.html,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
