import { IBlog, IBlogCategory } from "@/types/blog";

export const BLOG_LIST: IBlog[] = [
  {
    id: 1,
    title: "Intro to React",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: [{ id: 1, name: "Tech" }],
    description: 'A beginner\'s guide to React',
    content:
      "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    author: {
      id: 1,
      name: "John Doe",
    },
    slug: "intro-to-react",
    isPublished: true,
    isFeatured: true,
    tags: ["React", "JavaScript", "Frontend"],
    metaTitle: "Intro to React - Learn the Basics",
    metaDescription:
      "A beginner's guide to React, covering the fundamentals of building user interfaces.",
    metaKeywords: ["React", "JavaScript", "Frontend Development"],
    createdAt: "2023-10-01T00:00:00Z",
    updatedAt: "2023-10-01T00:00:00Z",
  },
  {
    id: 2,
    title: "Work-Life Balance",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    category: [{ id: 2, name: "Life" }],
    description: "Tips and strategies for maintaining a healthy work-life balance.",
    content:
      "Tips and strategies for maintaining a healthy work-life balance in today's fast-paced world.",
    author: {
      id: 2,
      name: "Jane Smith",
    },
    slug: "work-life-balance",
    isPublished: true,
    isFeatured: false,
    tags: ["Work-Life Balance", "Productivity", "Wellness"],
    metaTitle: "Work-Life Balance - Tips and Strategies",
    metaDescription:
      "Explore effective tips and strategies for achieving a healthy work-life balance.",
    metaKeywords: ["Work-Life Balance", "Productivity", "Wellness"],
    createdAt: "2023-10-02T00:00:00Z",
    updatedAt: "2023-10-02T00:00:00Z",
  },
];

export const BLOG_CATEGORIES: IBlogCategory[] = [
  { id: 1, name: "Tech" },
  { id: 2, name: "Life" },
  { id: 3, name: "Design" },
  { id: 4, name: "Health" },
  { id: 5, name: "Travel" },
];
