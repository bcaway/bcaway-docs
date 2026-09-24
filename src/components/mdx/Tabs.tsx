"use client";

import React, { useState } from "react";

export interface TabItem {
  label: string;
  id: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  if (!items.length) return null;

  return (
    <div className="my-6 border border-gray-200 rounded overflow-hidden">
      {/* Tab navigation headers */}
      <div className="flex border-b border-gray-200 bg-gray-50 px-2 pt-1 gap-1 overflow-x-auto">
        {items.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-t transition-colors border-b-2 -mb-[1px] whitespace-nowrap ${
                isActive
                  ? "bg-white text-gray-900 border-gray-900 font-semibold"
                  : "text-gray-600 hover:text-gray-900 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="p-4 text-sm text-gray-700 leading-relaxed bg-white">
        {items.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
