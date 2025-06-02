import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/shared/mdx-content';
import ReadingProgress from '@/components/shared/reading-progress';
import BlogTOC from '@/components/shared/blog-toc';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return allBlogs.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    console.log('allBlogs:', allBlogs);
    const post = allBlogs.find((p) => p.slug === slug);
    if (!post) return notFound();
    return (
        <>
            <ReadingProgress />
            <div className="container mx-auto px-4 py-10 max-w-4xl">
                <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-500 text-sm mb-6">{post.date} • {post.readingTime}</p>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 prose prose-lg dark:prose-invert">
                        <MDXContent code={post.body.code} />
                    </div>
                    <div className="w-64 hidden md:block">
                        <BlogTOC />
                    </div>
                </div>
            </div>
        </>
    );
}