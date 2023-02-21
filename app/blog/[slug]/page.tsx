import { allPosts, Post } from "@/.contentlayer/generated";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string) {
  return allPosts.find((post) => post.slug === slug) as Post;
}

export default async function Test({ params }: any) {
  console.log(params);
  const post = await getPost(params.slug);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
