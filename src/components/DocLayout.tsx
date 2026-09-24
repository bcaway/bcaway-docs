"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TableOfContents, TOCHeading } from "./TableOfContents";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface PaginationLink {
  title: string;
  href: string;
}

interface DocLayoutProps {
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  description?: string;
  readingTime?: string;
  headings?: TOCHeading[];
  prevPage?: PaginationLink;
  nextPage?: PaginationLink;
  isHome?: boolean;
  children: React.ReactNode;
}

export const DocLayout: React.FC<DocLayoutProps> = ({
  breadcrumbs,
  title,
  description,
  readingTime = "3 minutes to read",
  headings = [],
  prevPage,
  nextPage,
  isHome = false,
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      {/* Top Header */}
      <Header
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        isSidebarOpen={sidebarOpen}
      />

      <div className="max-w-7xl w-full mx-auto flex-1 flex">
        {/* Left Navigation Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Center Content Column */}
        <main className={`flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 mx-auto ${isHome ? "max-w-5xl" : "max-w-4xl"}`}>
          {/* Breadcrumbs (for articles only) */}
          {!isHome && breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-1.5 text-xs text-gray-500 mb-3"
            >
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Docs
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3 h-3 text-gray-300" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-gray-900 transition-colors"
                    >
                      {crumb.title}
                    </Link>
                  ) : (
                    <span className="text-gray-800 font-medium">
                      {crumb.title}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Article Header (for articles only) */}
          {!isHome && title && (
            <header className="mb-8 pb-5 border-b border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <span className="font-medium text-gray-600">Article</span>
                <span>•</span>
                <span>{readingTime}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2.5">
                {title}
              </h1>

              {description && (
                <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                  {description}
                </p>
              )}
            </header>
          )}

          {/* Main Content Area */}
          <article className="prose-clean text-gray-800 text-[15px] leading-relaxed">
            {children}
          </article>

          {/* Footer (Feedback & Pagination, for articles) */}
          {!isHome && (
            <footer className="mt-14 pt-6 border-t border-gray-200 space-y-6">
              <div className="flex items-center justify-between text-xs py-2">
                <span className="text-gray-600 font-medium">
                  Is this page helpful?
                </span>

                {feedbackGiven ? (
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>Thank you for your feedback</span>
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFeedbackGiven(true)}
                      className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setFeedbackGiven(true)}
                      className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                    >
                      No
                    </button>
                  </div>
                )}
              </div>

              {(prevPage || nextPage) && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm">
                  {prevPage ? (
                    <Link
                      href={prevPage.href}
                      className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{prevPage.title}</span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextPage ? (
                    <Link
                      href={nextPage.href}
                      className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium transition-colors ml-auto"
                    >
                      <span>{nextPage.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : null}
                </div>
              )}
            </footer>
          )}
        </main>

        {/* Right Table of Contents Sidebar */}
        {!isHome && headings.length > 0 && <TableOfContents headings={headings} />}
      </div>
    </div>
  );
};
