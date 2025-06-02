'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
}