"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { debounce } from "lodash-es";

import BlogCard from "@/components/shared/BlogCard";
import { BLOG_CATEGORIES, BLOG_LIST } from "@/constants/blog";
import IntroSection from "@/components/shared/IntroSection";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(BLOG_LIST);

  const categories = ["All", ...BLOG_CATEGORIES.map((cat) => cat.name)];

  const filterBlogs = useCallback(
    (searchValue: string, category: string) => {
      const lower = searchValue.toLowerCase();
      const filtered = BLOG_LIST.filter((blog) => {
        const matchesCategory = category === "All" || blog.category.name === category;
        const matchesSearch =
          blog.title.toLowerCase().includes(lower) ||
          blog.description.toLowerCase().includes(lower);
        return matchesCategory && matchesSearch;
      });
      setFilteredBlogs(filtered);
    },
    []
  );

  const debouncedFilter = useMemo(() => debounce(filterBlogs, 300), [filterBlogs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedFilter(value, active);
  };

  useEffect(() => {
    filterBlogs(search, active);
  }, [active]);

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, [debouncedFilter]);

  return (
    <main className="bg-muted">
      <IntroSection />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-8">
          <div className="flex flex-wrap gap-2">
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

          <div className="w-full sm:w-auto">
            <Input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={handleInputChange}
              autoComplete="off"
              className="max-w-sm w-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[200px]">
          <AnimatePresence mode="wait">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
