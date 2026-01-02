import { Posts } from "./posts";
import { getPosts } from "./get-posts";

export const metadata = {
  title: "dion.run",
  description: "김동규(Dion)의 블로그",
  openGraph: {
    title: "dion.run",
    description: "김동규(Dion)의 블로그",
    url: "https://dion.run",
    siteName: "김동규(Dion)의 블로그",
  },
  metadataBase: new URL("https://dion.run"),
};

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}
