import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    image: { type: 'string', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'json', required: true },
    excerpt: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    readingTime: { type: 'string' },
  },
}));

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Blog],
  mdx: { rehypePlugins: [rehypePrism] },
});
