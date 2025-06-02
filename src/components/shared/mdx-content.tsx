'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props {
  code: string;
}

export function MDXContent({ code }: Props) {
  const Component = useMDXComponent(code);

  return <Component />;
}