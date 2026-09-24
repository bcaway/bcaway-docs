import React from "react";
import { Apple, Smartphone, Globe, Monitor } from "lucide-react";

export type Platform = "ios" | "ipados" | "macos" | "android" | "web";

interface PlatformTagsProps {
  platforms: Platform[];
}

export const PlatformTags: React.FC<PlatformTagsProps> = ({ platforms }) => {
  const meta: Record<Platform, { label: string; icon: React.ReactNode }> = {
    ios: {
      label: "iOS",
      icon: <Apple className="w-3.5 h-3.5" />,
    },
    ipados: {
      label: "iPadOS",
      icon: <Apple className="w-3.5 h-3.5" />,
    },
    macos: {
      label: "macOS",
      icon: <Monitor className="w-3.5 h-3.5" />,
    },
    android: {
      label: "Android",
      icon: <Smartphone className="w-3.5 h-3.5" />,
    },
    web: {
      label: "Web",
      icon: <Globe className="w-3.5 h-3.5" />,
    },
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5 my-3">
      {platforms.map((platform) => {
        const item = meta[platform];
        if (!item) return null;
        return (
          <span
            key={platform}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-dark-hover text-slate-700 dark:text-dark-secondary border border-slate-200/80 dark:border-dark-border"
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        );
      })}
    </div>
  );
};
