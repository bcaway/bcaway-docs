"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  Search,
  X,
  ExternalLink,
} from "lucide-react";

interface NavChild {
  title: string;
  href: string;
  isExternal?: boolean;
}

interface NavSection {
  title: string;
  defaultOpen?: boolean;
  children: NavChild[];
}

const TREE_DATA: NavSection[] = [
  {
    title: "Get Started",
    defaultOpen: true,
    children: [
      {
        title: "Install BCAway Beta",
        href: "/install-beta",
      },
    ],
  },
  {
    title: "Testing & Elements",
    defaultOpen: true,
    children: [
      {
        title: "MDX Elements Showcase",
        href: "/test",
      },
    ],
  },
  {
    title: "Resources & Links",
    defaultOpen: true,
    children: [
      {
        title: "Web App (app.bcaway.app)",
        href: "https://app.bcaway.app",
        isExternal: true,
      },
      {
        title: "Apple TestFlight Portal",
        href: "https://testflight.apple.com/join/tAmRzzn3",
        isExternal: true,
      },
      {
        title: "Official Homepage (bcaway.app)",
        href: "https://bcaway.app",
        isExternal: true,
      },
      {
        title: "GitHub Organization",
        href: "https://github.com/bcaway",
        isExternal: true,
      },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [filter, setFilter] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Get Started": true,
    "Testing & Elements": true,
    "Resources & Links": true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filteredData = useMemo(() => {
    if (!filter.trim()) return TREE_DATA;
    const q = filter.toLowerCase();

    return TREE_DATA.map((section) => {
      const sectionMatch = section.title.toLowerCase().includes(q);
      const matchingChildren = section.children.filter((child) =>
        child.title.toLowerCase().includes(q)
      );

      if (sectionMatch || matchingChildren.length > 0) {
        return {
          ...section,
          children: sectionMatch ? section.children : matchingChildren,
        };
      }
      return null;
    }).filter(Boolean) as NavSection[];
  }, [filter]);

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-[56px] bottom-0 left-0 z-40 w-64 md:sticky md:block shrink-0 bg-white border-r border-gray-200 overflow-y-auto px-3 py-4 transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Filter by title */}
        <div className="pb-3 mb-3 border-b border-gray-100">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 absolute left-2.5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by title"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-8 pr-7 py-1 text-xs bg-gray-50 border border-gray-200 rounded focus:bg-white focus:border-blue-500 focus:outline-none placeholder-gray-400 text-gray-800 transition-colors"
            />
            {filter && (
              <button
                onClick={() => setFilter("")}
                className="absolute right-2 p-0.5 text-gray-400 hover:text-gray-600 rounded"
                aria-label="Clear filter"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Tree List */}
        <nav className="space-y-1">
          {/* Docs Home link */}
          <Link
            href="/"
            onClick={onClose}
            className={`flex items-center px-2.5 py-1.5 text-xs rounded-md transition-colors mb-1 ${
              pathname === "/"
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium"
            }`}
          >
            <span>Home</span>
          </Link>

          {filteredData.map((section) => {
            const isExpanded = filter ? true : openSections[section.title] ?? true;

            return (
              <div key={section.title} className="space-y-0.5">
                {/* Folder Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md select-none transition-colors text-left"
                >
                  <span>{section.title}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-150 ${
                      isExpanded ? "rotate-90 text-gray-600" : ""
                    }`}
                  />
                </button>

                {/* Folder Children */}
                {isExpanded && (
                  <div className="pl-2 space-y-0.5 border-l border-gray-100 ml-3">
                    {section.children.map((item) => {
                      const isActive = !item.isExternal && pathname === item.href;

                      if (item.isExternal) {
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between px-2.5 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors group"
                          >
                            <span className="truncate">{item.title}</span>
                            <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gray-500 shrink-0 ml-1" />
                          </a>
                        );
                      }

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className={`block px-2.5 py-1.5 text-xs rounded-md transition-colors truncate ${
                            isActive
                              ? "bg-blue-50 text-blue-600 font-semibold"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-normal"
                          }`}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
