import { allPosts, Post } from "@/.contentlayer/generated";

async function getPost(slug: string) {
  return allPosts.find((post) => post.slug === slug) as Post;
}

export default async function Head({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <>
      <title>{post.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post.description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
