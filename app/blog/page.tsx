import { allPosts } from "contentlayer/generated";

async function getPosts() {
  return allPosts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="mt-20">
      <div className="flex justify-center">
        <div className="max-w-prose w-full space-y-10">
          <h1 className="font-black text-4xl">Blog</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>{post.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
