import { IBlog, IBlogCategory } from '@/types/blog';

export const BLOG_LIST: IBlog[] = [
  {
    id: 1,
    title: 'Designing a Secure Authentication Model',
    image:
      'https://www.permit.io/_next/image?url=https%3A%2F%2Fus-west-2.graphassets.com%2FAuGrs0mztRH6ldTYKJkSAz%2Fresize%3Dwidth%3A2048%2Fcm8sqs0h3b3a207llo0iwwubr&w=1080&q=75',
    category: { id: 1, name: 'Tech' },
    description: "A beginner's guide to React",
    content:
      'Learn the basics of React, a popular JavaScript library for building user interfaces.',
    author: {
      id: 1,
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    slug: 'authentication-model',
    readTime: '5 min',
    isPublished: true,
    isFeatured: true,
    tags: ['React', 'JavaScript', 'Frontend'],
    metaTitle: 'Intro to React - Learn the Basics',
    metaDescription:
      "A beginner's guide to React, covering the fundamentals of building user interfaces.",
    metaKeywords: ['React', 'JavaScript', 'Frontend Development'],
    createdAt: '2023-10-01T00:00:00Z',
    updatedAt: '2023-10-01T00:00:00Z',
  },
  {
    id: 2,
    title: 'Understanding ResizeObserver in JavaScrip',
    image:
      'https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
    category: { id: 2, name: 'Javascript' },
    description:
      'Learn how to use ResizeObserver to watch element size changes efficiently in modern browsers.',
    content:
      "Tips and strategies for maintaining a healthy work-life balance in today's fast-paced world.",
    author: {
      id: 2,
      name: 'Jane Smith',
      image:
        'https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    slug: 'resize-observer',
    isPublished: true,
    isFeatured: false,
    readTime: '3 min',
    tags: ['Work-Life Balance', 'Productivity', 'Wellness'],
    metaTitle: 'Work-Life Balance - Tips and Strategies',
    metaDescription:
      'Explore effective tips and strategies for achieving a healthy work-life balance.',
    metaKeywords: ['resizeobserver', 'javascript', 'performance'],
    createdAt: '2023-10-02T00:00:00Z',
    updatedAt: '2023-10-02T00:00:00Z',
  },
  {
    id: 3,
    title: 'Getting Started with SSH: Secure Remote Access',
    image: 'https://cloud.z.com/vn/wp-content/uploads/2023/03/image3-5.png',
    category: { id: 3, name: 'Dev' },
    description: 'A beginner-friendly guide to SSH and how to use it for secure remote connections',
    content:
      'An overview of the core principles of design, including balance, contrast, and alignment.',
    author: {
      id: 3,
      name: 'Nhat Huy',
      image:
        'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    createdAt: '2023-10-03T00:00:00Z',
    updatedAt: '2023-10-03T00:00:00Z',
    slug: 'ssh-guide',
    isPublished: true,
    isFeatured: true,
    readTime: '4 min',
    tags: ['ssh', 'linux', 'security', 'networking'],
    metaTitle: 'Design Principles - Core Concepts',
    metaDescription:
      'Explore the core principles of design, including balance, contrast, and alignment.',
    metaKeywords: ['Design', 'Principles', 'Aesthetics'],
  },
  {
    id: 4,
    title: 'Mastering the JavaScript Event Loop',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*vVsia7i4DvG_uGik.png',
    category: { id: 4, name: 'Javascript' },
    description:
      'Understand how the event loop works, including the call stack, task queue, and microtasks',
    content:
      'Discover tips and strategies for maintaining a healthy lifestyle, including nutrition and exercise.',
    author: {
      id: 4,
      name: 'Bob Brown',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    slug: 'event-loop-js',
    isPublished: true,
    isFeatured: false,
    readTime: '6 min',
    tags: ['event loop', 'javascript', 'async', 'microtasks'],
    metaTitle: 'Healthy Living - Tips for a Better Lifestyle',
    metaDescription:
      'Explore tips for maintaining a healthy lifestyle, including nutrition and exercise.',
    metaKeywords: ['event loop', 'javascript', 'async', 'microtasks'],
    createdAt: '2023-10-04T00:00:00Z',
    updatedAt: '2023-10-04T00:00:00Z',
  },
  {
    id: 5,
    title: 'Client Components vs Server Components in Next.js 13+',
    image:
      'https://www.zen8labs.com/wp-content/uploads/2024/06/zen8labs-Nextjs_Client-Components-V-Server-Component-1.png',
    category: { id: 4, name: 'NextJS' },
    description:
      'Understand the key differences between Client and Server Components in Next.js and when to use each effectively.',
    content:
      'Discover tips and strategies for maintaining a healthy lifestyle, including nutrition and exercise.',
    author: {
      id: 4,
      name: 'Bob Brown',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    slug: 'csr-vs-ssr',
    isPublished: true,
    isFeatured: false,
    readTime: '10 min',
    tags: ['event loop', 'javascript', 'async', 'microtasks'],
    metaTitle: 'Healthy Living - Tips for a Better Lifestyle',
    metaDescription:
      'Explore tips for maintaining a healthy lifestyle, including nutrition and exercise.',
    metaKeywords: ['event loop', 'javascript', 'async', 'microtasks'],
    createdAt: '2023-10-04T00:00:00Z',
    updatedAt: '2023-10-04T00:00:00Z',
  },
  {
    id: 6,
    title: 'Angular vs Next.js: A Comprehensive Compariso',
    image:
      'https://www.tatvasoft.com/outsourcing/wp-content/uploads/2024/04/Next.js-vs-Angular-Choose-the-Right-Framework.jpg',
    category: { id: 4, name: 'Angular' },
    description:
      'Explore the key differences between Angular and Next.js, their strengths, and which framework fits your project needs.',
    content:
      'Discover tips and strategies for maintaining a healthy lifestyle, including nutrition and exercise.',
    author: {
      id: 4,
      name: 'Bob Brown',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    slug: 'angular-vs-nextjs',
    isPublished: true,
    isFeatured: false,
    readTime: '15 min',
    tags: ['Angular', 'Next.js', 'Frontend Frameworks', 'React', 'Web Development'],
    metaTitle: 'Healthy Living - Tips for a Better Lifestyle',
    metaDescription:
      'Explore tips for maintaining a healthy lifestyle, including nutrition and exercise.',
    metaKeywords: ['Angular', 'Next.js', 'Frontend Frameworks', 'React', 'Web Development'],
    createdAt: '2023-10-04T00:00:00Z',
    updatedAt: '2023-10-04T00:00:00Z',
  },
  {
    id: 7,
    title: 'Next.js Data Fetching Strategies Explained',
    image: 'https://www.petermekhaeil.com/images/uploads/nextjs-static-rendering-1.gif',
    category: { id: 4, name: 'NextJS' },
    description:
      'Learn about different data fetching methods in Next.js including Static Generation, Server-side Rendering, and Client-side Fetching.',
    content:
      'Discover tips and strategies for maintaining a healthy lifestyle, including nutrition and exercise.',
    author: {
      id: 4,
      name: 'Bob Brown',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    slug: 'nextjs-data-fetching',
    isPublished: true,
    isFeatured: false,
    readTime: '15 min',
    tags: ['Next.js', 'Data Fetching', 'SSR', 'SSG', 'React', 'Web Development'],
    metaTitle: 'Healthy Living - Tips for a Better Lifestyle',
    metaDescription:
      'Explore tips for maintaining a healthy lifestyle, including nutrition and exercise.',
    metaKeywords: ['Next.js', 'Data Fetching', 'SSR', 'SSG', 'React', 'Web Development'],
    createdAt: '2023-10-04T00:00:00Z',
    updatedAt: '2023-10-04T00:00:00Z',
  },
];

export const BLOG_CATEGORIES: IBlogCategory[] = [
  { id: 1, name: 'Tech' },
  { id: 2, name: 'Life' },
  { id: 3, name: 'Design' },
  { id: 4, name: 'Health' },
  { id: 5, name: 'Travel' },
];
