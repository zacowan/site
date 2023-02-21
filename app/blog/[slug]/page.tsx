import { allPosts, Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string) {
  return allPosts.find((post) => post.slug === slug) as Post;
}

export default async function Test({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <article className="mx-auto max-w-prose py-16">
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
}
