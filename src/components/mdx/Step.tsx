import React from "react";

interface StepProps {
  number: number | string;
  title: string;
  children: React.ReactNode;
}

export const Step: React.FC<StepProps> = ({
  number,
  title,
  children,
}) => {
  return (
    <div className="my-5 pb-1">
      <div className="flex items-baseline gap-2.5 mb-2">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white font-semibold text-xs shrink-0 select-none">
          {number}
        </span>
        <h3 className="text-base font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>
      </div>
      <div className="pl-7 text-sm text-gray-700 leading-relaxed space-y-2.5">
        {children}
      </div>
    </div>
  );
};
