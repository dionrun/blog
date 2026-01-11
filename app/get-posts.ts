import postsData from "./posts.json";
import { useMDXComponents } from "@/mdx-components";

export type Post = {
  id: string;
  date: string;
  title: string;
  html?: string;
};

export const getPosts = async () => {
  const posts = postsData.posts.map((post): Post => {
    return post;
  });
  return posts;
};

export const getPostsWithHtmlContent = async () => {
  const posts = await getPosts();
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");

  const postsWithHtml = await Promise.all(
    posts.map(async post => {
      try {
        const year = new Date(post.date).getFullYear();
        const { default: MDXContent } = await import(
          `./(post)/${year}/${post.id}/page.mdx`
        );
        const components = useMDXComponents({});
        // @ts-ignore
        components.img = props => createElement("img", props);
        // @ts-ignore
        components.Image = props => createElement("img", props);
        components.Caption = props => createElement("span", props);
        const Content = MDXContent as any;
        const compiled = await Content({ components });
        const html = renderToStaticMarkup(compiled);
        return { ...post, html };
      } catch (e) {
        return post;
      }
    })
  );

  return postsWithHtml;
};
