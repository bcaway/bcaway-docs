import React from "react";

type CalloutType = "info" | "warning" | "danger" | "tip" | "success" | "note" | "important" | "caution";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  type = "note",
  title,
  children,
}) => {
  let normalizedType: "note" | "important" | "tip" | "caution" = "note";
  if (type === "warning" || type === "important") normalizedType = "important";
  else if (type === "danger" || type === "caution") normalizedType = "caution";
  else if (type === "tip" || type === "success") normalizedType = "tip";
  else normalizedType = "note";

  const config = {
    note: {
      border: "border-l-blue-600",
      bg: "bg-blue-50/30 border-blue-100",
      titleColor: "text-blue-900",
      defaultTitle: "Note",
    },
    important: {
      border: "border-l-amber-500",
      bg: "bg-amber-50/30 border-amber-100",
      titleColor: "text-amber-900",
      defaultTitle: "Important",
    },
    tip: {
      border: "border-l-emerald-600",
      bg: "bg-emerald-50/30 border-emerald-100",
      titleColor: "text-emerald-900",
      defaultTitle: "Tip",
    },
    caution: {
      border: "border-l-red-600",
      bg: "bg-red-50/30 border-red-100",
      titleColor: "text-red-900",
      defaultTitle: "Caution",
    },
  }[normalizedType];

  const displayTitle = title || config.defaultTitle;

  return (
    <div
      className={`my-5 py-3 px-4 rounded-r border-l-4 ${config.border} ${config.bg} border-t border-r border-b text-sm leading-relaxed text-gray-800`}
      role="note"
    >
      <div className={`font-semibold mb-1 ${config.titleColor}`}>{displayTitle}</div>
      <div className="text-gray-700 space-y-2">{children}</div>
    </div>
  );
};
