"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { debounce } from "lodash-es";
import Fuse from "fuse.js";

import BlogCard from "@/components/shared/BlogCard";
import { BLOG_CATEGORIES, BLOG_LIST } from "@/constants/blog";
import IntroSection from "@/components/shared/IntroSection";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [filteredBlogs, setFilteredBlogs] = useState(BLOG_LIST);

  const categories = ["All", ...BLOG_CATEGORIES.map((cat) => cat.name)];

  const filterBlogs = useCallback((searchValue: string, category: string) => {
    setLoading(true);

    let filtered = BLOG_LIST;
    if (category !== "All") {
      filtered = filtered.filter((blog) => blog.category.name === category);
    }

    if (searchValue.trim() !== "") {
      const fuse = new Fuse(filtered, {
        keys: ["title", "description", "tags", "author.name"],
        threshold: 0.4,
      });

      filtered = fuse.search(searchValue).map((result) => result.item);
    }

    setTimeout(() => {
      setFilteredBlogs(filtered);
      setLoading(false);
    }, 300);
  }, []);

  const debouncedFilter = useMemo(
    () => debounce(filterBlogs, 300),
    [filterBlogs]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedFilter(value, active);
  };

  useEffect(() => {
    filterBlogs(search, active);
    setVisibleCount(6);
  }, [active]);

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, [debouncedFilter]);

  return (
    <main className="bg-muted dark:bg-zinc-950 text-gray-800 dark:text-white ">
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
              className="bg-white max-w-sm w-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[200px]">
          {loading ? (
            <div className="col-span-3 flex justify-center items-center h-[200px]">
              <span className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">
              No blogs found.
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {filteredBlogs.slice(0, visibleCount).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </AnimatePresence>
          )}
        </div>

        {visibleCount < filteredBlogs.length && (
          <div className="mt-6 text-center">
            <Button onClick={() => setVisibleCount((prev) => prev + 6)}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
