"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface TerminalProps {
  cmd?: string;
  pkgCommand?: {
    npm?: string;
    yarn?: string;
    pnpm?: string;
    bun?: string;
  };
  title?: string;
}

export const Terminal: React.FC<TerminalProps> = ({
  cmd,
  pkgCommand,
  title = "Console",
}) => {
  const [activeTab, setActiveTab] = useState<"npm" | "pnpm" | "yarn" | "bun">(
    "npm"
  );
  const [copied, setCopied] = useState(false);

  const isPkg = !!pkgCommand;
  const currentCommand = isPkg ? pkgCommand[activeTab] || "" : cmd || "";

  const handleCopy = async () => {
    if (!currentCommand) return;
    try {
      await navigator.clipboard.writeText(currentCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-5 rounded border border-gray-200 bg-gray-900 text-gray-100 overflow-hidden text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-gray-950 border-b border-gray-800">
        <div className="flex items-center gap-2">
          {isPkg ? (
            <div className="flex items-center space-x-1">
              {(["npm", "pnpm", "yarn", "bun"] as const).map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setActiveTab(pkg)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    activeTab === pkg
                      ? "bg-gray-800 text-white font-medium"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {pkg}
                </button>
              ))}
            </div>
          ) : (
            <span className="text-gray-400 font-mono text-[11px]">{title}</span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1 px-2 py-0.5 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-[11px] text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-3 font-mono text-[13px] overflow-x-auto leading-relaxed flex items-center">
        <span className="text-gray-500 mr-2 select-none">$</span>
        <span className="text-gray-100">{currentCommand}</span>
      </div>
    </div>
  );
};
