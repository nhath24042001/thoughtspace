"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BlogCard from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Tech", "Life", "Design"];

const blogs = [
  { id: 1, title: "Intro to React", category: "Tech" },
  { id: 2, title: "Work-Life Balance", category: "Life" },
  { id: 3, title: "Design Systems", category: "Design" },
  { id: 4, title: "Server Actions in Next.js 15", category: "Tech" },
  { id: 5, title: "Digital Minimalism", category: "Life" },
];

export default function Home() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? blogs : blogs.filter((b) => b.category === active);

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
