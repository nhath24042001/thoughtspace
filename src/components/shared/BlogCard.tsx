"use client";

import { motion } from "framer-motion";

type Blog = {
  id: number;
  title: string;
  category: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      key={blog.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-4 border rounded-xl shadow-sm dark:border-gray-700 bg-white dark:bg-gray-900"
    >
      <h3 className="font-semibold text-lg">{blog.title}</h3>
      <p className="text-sm text-muted-foreground">{blog.category}</p>
    </motion.div>
  );
}
