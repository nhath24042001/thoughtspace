"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import { JSX } from "react";

type Props<T extends keyof JSX.IntrinsicElements> =
  React.ComponentPropsWithoutRef<T>;

const mdxComponents = {
  h2: (props: Props<"h2">) => (
    <h2 className="text-2xl font-bold mt-5 mb-4" {...props} />
  ),
  h3: (props: Props<"h3">) => (
    <h3 className="text-xl font-semibold mt-6 mb-2" {...props} />
  ),
  p: (props: Props<"p">) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: Props<"ul">) => <ul className="list-disc pl-6 mb-4" {...props} />,
  code: (props: Props<"code">) => (
    <code className="bg-gray-100 px-1 rounded text-pink-600" {...props} />
  ),
  pre: (props: Props<"pre">) => (
    <pre
      className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm my-4"
      {...props}
    />
  ),
  blockquote: (props: Props<"blockquote">) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4"
      {...props}
    />
  ),
};

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <article id="blog-content" className="max-w-none">
      <Component components={mdxComponents} />
    </article>
  );
}
