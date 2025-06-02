import { allBlogs } from '../../../../.contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/shared/mdx-content';

type Params = { params: { slug: string } };

console.log('allBlogs', allBlogs);

export function generateStaticParams() {
    return allBlogs.map((post) => ({ slug: post.slug }));
}


export default function Page({ params }: Params) {
    const post = allBlogs.find((p) => p.slug === params.slug);

    if (!post) return notFound();
    return (
        <article className="max-w-3xl mx-auto py-8 prose prose-neutral dark:prose-invert">
            <h1>{post.title}</h1>
            <p className="text-sm text-gray-500">{post.date} - {post.author}</p>
            <MDXContent code={post.body.code} />
        </article>
    );
}