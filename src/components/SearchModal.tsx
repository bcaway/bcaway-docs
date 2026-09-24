"use client";

import React, { useState, useEffect } from "react";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SearchItem {
  title: string;
  category: string;
  href: string;
  keywords: string;
  description: string;
}

const SEARCH_INDEX: SearchItem[] = [
  {
    title: "Home",
    category: "Get Started",
    href: "/",
    keywords: "welcome overview introduction bcaway docs home portal",
    description: "Documentation portal and quickstart guide.",
  },
  {
    title: "Install BCAway Beta",
    category: "Get Started",
    href: "/install-beta",
    keywords:
      "testflight install beta download ios apple iphone ipad macos setup join invitation",
    description:
      "Comprehensive walkthrough on installing BCAway Beta via Apple TestFlight.",
  },
  {
    title: "MDX Elements Showcase",
    category: "Testing & Elements",
    href: "/test",
    keywords:
      "mdx test elements kitchen sink components terminal callout step tabs collapsible badge layout",
    description:
      "Interactive test page demonstrating all MDX components and layout primitives.",
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? SEARCH_INDEX.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_INDEX;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/25 backdrop-blur-xs">
      <div
        className="w-full max-w-xl rounded-lg bg-white border border-gray-200 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-gray-200">
          <Search className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-gray-400 hover:text-gray-600 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-gray-400 bg-gray-100 rounded border border-gray-200">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[340px] overflow-y-auto p-2 divide-y divide-gray-50">
          {results.length > 0 ? (
            results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between p-2.5 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-gray-900 group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-700 transition-colors" />
              </Link>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-gray-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
