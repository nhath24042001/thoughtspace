"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { IBlog } from "@/types/blog";
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
      className="border rounded-xl shadow-sm dark:border-gray-700 bg-white dark:bg-zinc-950 hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl group">
        <Image
          src={blog.image}
          alt="blog-img"
          fill
          className="object-cover transition-transform cursor-pointer duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-1">
          <span className={`font-medium ${getCategoryColor(blog.category.name)}`}>
            {blog.category.name}
          </span>
          <span className="mx-1">•</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 h-10 leading-relaxed line-clamp-2">
          {blog.description}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <Image
            src={blog.author.image ?? "/default-avatar.png"}
            alt="author-avatar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <span>{blog.author.name}</span>
            <span className="mx-1">•</span>
            <span>{formatDate(blog.createdAt)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
