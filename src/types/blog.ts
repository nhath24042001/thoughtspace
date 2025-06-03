export interface IBlog {
  id: number;
  title: string;
  description: string;
  image: string;
  category: IBlogCategory;
  content: string;
  author: IAuthor;
  slug: string;
  isPublished: boolean;
  isFeatured: boolean;
  readTime?: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  metaImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlogCategory {
  id: number;
  name: string;
}

interface IAuthor {
  id: number;
  name: string;
  image?: string;
}
