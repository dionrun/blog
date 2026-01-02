import postsData from "./posts.json";

export type Post = {
  id: string;
  date: string;
  title: string;
  views?: number;
  viewsFormatted?: string;
};

export const getPosts = async () => {
  const posts = postsData.posts.map((post): Post => {
    return post;
  });
  return posts;
};
