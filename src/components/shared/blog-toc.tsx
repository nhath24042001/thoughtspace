'use client';
import { useEffect, useState } from 'react';

export default function BlogTOC() {
    const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
    console.log('headings:', headings);

    useEffect(() => {
        const content = Array.from(document.querySelectorAll('h2, h3')) as HTMLHeadingElement[];
        setHeadings(content);
    }, []);

    return (
        <aside className="sticky top-24">
            <ul className="space-y-2 text-sm">
                {headings.map((h, index) => (
                    <li key={index}>
                        <a href={`#${h.id}`} className="hover:underline text-gray-700">
                            {h.innerText}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}