'use client';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function BlogTOC() {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const contentRoot = document.querySelector('#blog-content');
    if (!contentRoot) return;

    const headingElements = Array.from(
      contentRoot.querySelectorAll('h2, h3'),
    ) as HTMLHeadingElement[];

    const processed = headingElements
      .filter((el) => el.textContent?.trim())
      .map((el, i) => {
        if (!el.id) {
          const generatedId =
            el.textContent
              ?.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]/g, '') || `heading-${i}`;
          el.id = generatedId;
        }
        return el;
      });

    setHeadings(processed);
  }, []);

  return (
    <aside className="sticky top-24 pb-4 max-w-xs">
      <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">Contents</h3>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => {
          const isH3 = h.tagName === 'H3';
          return (
            <li key={h.id} className={`transition-all ${isH3 ? 'pl-4 text-gray-600' : 'pl-2'}`}>
              <Link
                to={h.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
                activeClass="text-blue-600 font-semibold border-l-2 border-blue-600 pl-2"
                className="block hover:underline cursor-pointer text-gray-800"
              >
                {h.innerText}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
