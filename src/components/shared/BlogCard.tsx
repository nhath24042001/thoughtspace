"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { IBlog, IBlogCategory } from "@/types/blog";
import { formatDate } from "@/utils/format";
import { getCategoryColor } from "@/utils/style";

export default function BlogCard({ blog }: { blog: IBlog }) {
  return (
    <motion.div
      key={blog.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="border rounded-xl shadow-sm dark:border-gray-700 bg-white dark:bg-gray-900"
    >
      <div className="relative w-full h-48">
        <Image
          src={blog.image}
          alt="blog-img"
          fill
          className="object-cover rounded-tl-xl rounded-tr-xl"
        />
      </div>

      <div className="p-4">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded mb-2">
          {formatDate(blog.createdAt)}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {blog.title}
        </h3>

        <h5 className="text-sm text-gray-600 leading-relaxed line-clamp-2 h-12">
          {blog.description}
        </h5>

        <div className="flex flex-wrap gap-2">
          {blog.category?.map((cat: IBlogCategory) => (
            <span key={cat.id} className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(cat.name)}`}>
              {cat.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
