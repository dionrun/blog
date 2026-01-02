import { Posts } from "./posts";
import { getPosts } from "./get-posts";

export const metadata = {
  title: "dionrun.com",
  description: "김동규(Dion)의 블로그",
  openGraph: {
    title: "dionrun.com",
    description: "김동규(Dion)의 블로그",
    url: "https://dionrun.com",
    siteName: "김동규(Dion)의 블로그",
  },
  metadataBase: new URL("https://dionrun.com"),
};

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}
