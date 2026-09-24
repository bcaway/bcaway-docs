"use client";

import React, { useState, useEffect } from "react";

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCHeading[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
}) => {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id || "");

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0% 0% -70% 0%",
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0 sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto px-4 py-8 text-xs select-none">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-xs text-gray-900 mb-2.5">
            In this article
          </h4>
          <nav className="space-y-1 border-l border-gray-200 pl-2">
            {headings.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block transition-colors leading-snug py-0.5 ${
                    item.level === 3 ? "pl-3 text-[11px]" : "font-normal"
                  } ${
                    isActive
                      ? "text-blue-600 font-semibold -ml-[9px] pl-[8px] border-l-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.text}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-gray-100 text-[11px]">
          <a
            href="mailto:kabsek30@bergen.org?subject=BCAway%20Docs%20Feedback"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            Submit feedback
          </a>
        </div>
      </div>
    </aside>
  );
};
