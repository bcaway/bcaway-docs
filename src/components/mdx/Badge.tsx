import React from "react";

export type BadgeVariant =
  | "beta"
  | "new"
  | "away"
  | "present"
  | "free"
  | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className = "",
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    beta: "bg-amber-50 text-amber-800 border-amber-200",
    new: "bg-blue-50 text-blue-800 border-blue-200",
    away: "bg-red-50 text-red-700 border-red-200",
    present: "bg-green-50 text-green-700 border-green-200",
    free: "bg-blue-50 text-blue-700 border-blue-200",
    default: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
