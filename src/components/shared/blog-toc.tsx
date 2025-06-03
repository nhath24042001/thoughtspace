"use client";
import { useEffect, useState } from "react";

export default function BlogTOC() {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const content = Array.from(
      document.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];
    setHeadings(content);

    const handleScroll = () => {
      const offset = 100;
      let current: string | null = null;
      for (const heading of content) {
        if (heading.getBoundingClientRect().top - offset <= 0) {
          current = heading.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sticky top-24 pb-3">
      <h3 className="text-base font-semibold mb-4 text-gray-400">CONTENTS</h3>
      <ul className="space-y-2 text-sm">
        {headings.map((h, index) => (
          <li
            key={index}
            className={`pl-${h.tagName === "H3" ? "4" : "2"} ${
              activeId === h.id
                ? "font-medium"
                : "border-transparent text-black"
            }`}
          >
            <a href={`#${h.id}`} className="hover:underline block">
              {h.innerText}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
