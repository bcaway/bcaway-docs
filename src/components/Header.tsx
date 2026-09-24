"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  ExternalLink,
  Github,
} from "lucide-react";
import { BCAwayLogo } from "./BCAwayLogo";
import { SearchModal } from "./SearchModal";

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  isSidebarOpen,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full h-[56px] bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-1.5 -ml-1 text-gray-500 hover:text-gray-900 md:hidden rounded hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <BCAwayLogo width={28} color="#2563EB" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-[17px] text-gray-900 tracking-tight">
                  BCAway
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Docs
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Simple Search Box */}
          <div className="flex-1 max-w-sm mx-4 hidden sm:block">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded border border-gray-200 bg-gray-50 hover:bg-gray-100/70 text-gray-400 text-xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-gray-400" />
                <span>Search documentation...</span>
              </div>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-200 font-mono text-[10px] text-gray-500">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right: Ecosystem Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden p-2 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="https://app.bcaway.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>Web App</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </Link>

            <Link
              href="https://bcaway.app"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>Main Site</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </Link>

            <div className="w-[1px] h-3.5 bg-gray-200 mx-1" />

            <Link
              href="https://github.com/bcaway"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
