"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface CollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 border border-gray-200 rounded overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs font-semibold text-gray-800 bg-gray-50/80 hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronRight
          className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${
            isOpen ? "rotate-90 text-gray-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-3.5 text-xs text-gray-600 border-t border-gray-200 bg-white leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};
