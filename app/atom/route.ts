import RSS from "rss";
import { getPostsWithHtmlContent } from "@/app/get-posts";

export async function GET() {
  const posts = await getPostsWithHtmlContent();

  const feed = new RSS({
    title: "dionrun.com",
    site_url: "https://dionrun.com",
    feed_url: "https://dionrun.com/atom",
    description: "김동규(Dion)의 블로그",
  });

  posts.forEach(post => {
    feed.item({
      title: post.title,
      url: `https://dionrun.com/${post.id}`,
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
