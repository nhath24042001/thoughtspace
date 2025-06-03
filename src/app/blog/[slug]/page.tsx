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
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-4xl text-center font-bold mb-2">{post.title}</h1>
        <Image
          src={post.image}
          width={864}
          height={200}
          className="mt-5 object-cover rounded-lg mb-6"
          alt="blog_img"
        />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 prose prose-lg dark:prose-invert">
            <MDXContent code={post.body.code} />
          </div>
          <div className="w-64 hidden md:block">
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
        </div>
      </div>
    </>
  );
}
