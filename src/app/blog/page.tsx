import { Row, RowTop } from "@/components/row";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col gap-10">
      <h1 className="font-medium">Blog</h1>

      <section className="flex flex-col gap-1">
        {posts
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
              new Date(a.metadata.publishedAt).getTime()
          )
          .map((post) => (
            <Row key={post.slug} href={`/blog/${post.slug}`}>
              <RowTop>
                <span className="font-mono">{post.metadata.title}</span>
                <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">
                  {post.metadata.publishedAt}
                </span>
              </RowTop>
            </Row>
          ))}
      </section>
    </main>
  );
}
