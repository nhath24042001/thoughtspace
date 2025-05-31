"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import BlogCard from "@/components/shared/BlogCard";
import { BLOG_CATEGORIES, BLOG_LIST } from "@/constants/blog";


export default function Home() {
  const [active, setActive] = useState("All");

  const categories = ["All", ...BLOG_CATEGORIES.map((cat) => cat.name)];
  const filtered = BLOG_LIST.filter((blog) => {
    if (active === "All") return true;
    return blog.category.some((cat) => cat.name === active);
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={active === cat ? "default" : "outline"}
            onClick={() => setActive(cat)}
            className="cursor-pointer"
            size="sm"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[200px]">
        <AnimatePresence mode="wait">
          {filtered.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
