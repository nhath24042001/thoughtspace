import { IBlog, IBlogCategory } from "@/types/blog";

export const BLOG_LIST: IBlog[] = [
  {
    id: 1,
    title: "Intro to React",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: { id: 1, name: "Tech" },
    description: "A beginner's guide to React",
    content:
      "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    author: {
      id: 1,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    slug: "intro-to-react",
    readTime: "5 min",
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
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    category: { id: 2, name: "Life" },
    description:
      "Tips and strategies for maintaining a healthy work-life balance.",
    content:
      "Tips and strategies for maintaining a healthy work-life balance in today's fast-paced world.",
    author: {
      id: 2,
      name: "Jane Smith",
      image:
        "https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    slug: "work-life-balance",
    isPublished: true,
    isFeatured: false,
    readTime: "3 min",
    tags: ["Work-Life Balance", "Productivity", "Wellness"],
    metaTitle: "Work-Life Balance - Tips and Strategies",
    metaDescription:
      "Explore effective tips and strategies for achieving a healthy work-life balance.",
    metaKeywords: ["Work-Life Balance", "Productivity", "Wellness"],
    createdAt: "2023-10-02T00:00:00Z",
    updatedAt: "2023-10-02T00:00:00Z",
  },
  {
    id: 3,
    title: "Design Principles",
    image:
      "https://images.unsplash.com/photo-1747171232839-a5fea879ca59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    category: { id: 3, name: "Design" },
    description: "Understanding the core principles of design.",
    content:
      "An overview of the core principles of design, including balance, contrast, and alignment.",
    author: {
      id: 3,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    createdAt: "2023-10-03T00:00:00Z",
    updatedAt: "2023-10-03T00:00:00Z",
    slug: "design-principles",
    isPublished: true,
    isFeatured: true,
    readTime: "4 min",
    tags: ["Design", "Principles", "Aesthetics"],
    metaTitle: "Design Principles - Core Concepts",
    metaDescription:
      "Explore the core principles of design, including balance, contrast, and alignment.",
    metaKeywords: ["Design", "Principles", "Aesthetics"],
  },
  {
    id: 4,
    title: "Healthy Living",
    image:
      "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    category: { id: 4, name: "Health" },
    description: "Tips for maintaining a healthy lifestyle.",
    content:
      "Discover tips and strategies for maintaining a healthy lifestyle, including nutrition and exercise.",
    author: {
      id: 4,
      name: "Bob Brown",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    slug: "healthy-living",
    isPublished: true,
    isFeatured: false,
    readTime: "6 min",
    tags: ["Health", "Wellness", "Lifestyle"],
    metaTitle: "Healthy Living - Tips for a Better Lifestyle",
    metaDescription:
      "Explore tips for maintaining a healthy lifestyle, including nutrition and exercise.",
    metaKeywords: ["Health", "Wellness", "Lifestyle"],
    createdAt: "2023-10-04T00:00:00Z",
    updatedAt: "2023-10-04T00:00:00Z",
  },
  {
    id: 5,
    title: "Travel Adventures",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    category: { id: 5, name: "Travel" },
    description: "Exploring the world's most beautiful destinations.",
    content:
      "Join us as we explore some of the world's most beautiful travel destinations and share tips for your next adventure.",
    author: {
      id: 5,
      name: "Charlie Green",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    createdAt: "2023-10-05T00:00:00Z",
    updatedAt: "2023-10-05T00:00:00Z",
    slug: "travel-adventures",
    isPublished: true,
    isFeatured: true,
    readTime: "7 min",
    tags: ["Travel", "Adventure", "Destinations"],
  },
  {
    id: 6,
    title: "JavaScript Tips",
    image:
      "https://images.unsplash.com/photo-1742836531309-838d0f62efaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NDB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    category: { id: 1, name: "Tech" },
    description: "Advanced tips for JavaScript developers.",
    content:
      "Explore advanced tips and techniques for JavaScript developers to enhance their coding skills.",
    author: {
      id: 6,
      name: "David White",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    slug: "javascript-tips",
    isPublished: true,
    isFeatured: false,
    readTime: "5 min",
    tags: ["JavaScript", "Coding", "Development"],
    metaTitle: "JavaScript Tips - Enhance Your Skills",
    metaDescription:
      "Discover advanced tips and techniques for JavaScript developers to enhance their coding skills.",
    metaKeywords: ["JavaScript", "Coding", "Development"],
    createdAt: "2023-10-06T00:00:00Z",
    updatedAt: "2023-10-06T00:00:00Z",
  },
];

export const BLOG_CATEGORIES: IBlogCategory[] = [
  { id: 1, name: "Tech" },
  { id: 2, name: "Life" },
  { id: 3, name: "Design" },
  { id: 4, name: "Health" },
  { id: 5, name: "Travel" },
];
