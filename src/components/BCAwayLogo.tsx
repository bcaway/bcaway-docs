import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const BCAwayLogo: React.FC<LogoProps> = ({
  width = 36,
  height,
  color = "#2563EB",
  className = "",
}) => {
  const calculatedHeight = height ?? width * (348 / 818);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 818 348"
      width={width}
      height={calculatedHeight}
      fill="none"
      className={className}
    >
      {/* Bottom horizontal rod */}
      <rect x="0" y="229" width="409" height="119" rx="59.5" fill={color} />
      {/* Middle horizontal rod */}
      <rect x="90" y="106" width="409" height="119" rx="59.5" fill={color} />
      {/* Tilted top-right rod */}
      <rect
        x="425"
        y="66"
        width="409"
        height="119"
        rx="59.5"
        fill={color}
        transform="rotate(27 629.5 125.3)"
      />
    </svg>
  );
};
