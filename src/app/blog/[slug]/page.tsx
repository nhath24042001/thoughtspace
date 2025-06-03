import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Image from "next/image";

import { MDXContent } from "@/components/shared/mdx-content";
import ReadingProgress from "@/components/shared/reading-progress";
import BlogTOC from "@/components/shared/blog-toc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = allBlogs.find((p) => p.slug === slug);
  if (!post) return notFound();
  return (
    <>
      <ReadingProgress />

      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl text-center font-bold mb-2">{post.title}</h1>
          <Image
            src={post.image}
            width={1024}
            height={200}
            className="mt-5 object-cover rounded-lg mb-6"
            alt="blog_img"
          />
          <div className="prose prose-lg dark:prose-invert">
            {post.tags?.length &&
              post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-2"
                >
                  {tag}
                </span>
              ))}
            <MDXContent code={post.body.code} />
          </div>
        </div>

        <aside className="hidden lg:block w-64 ml-10 shrink-0">
          <div className="sticky top-24">
            <div className="mb-5 pb-3 flex items-center border-b">
              <Image
                src={post.author.avatar}
                width={50}
                height={50}
                className="rounded-full mr-3"
                alt="author_img"
              />
              <div>
                <p className="text-sm font-semibold">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.title}</p>
              </div>
            </div>
            <BlogTOC />
          </div>
        </aside>
      </div>
    </>
  );
}
