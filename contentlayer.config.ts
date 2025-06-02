import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [rehypePrism],
  },
});
