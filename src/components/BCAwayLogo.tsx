import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  alt?: string;
}

export const BCAwayLogo: React.FC<LogoProps> = ({
  width = 36,
  height,
  className = "",
  alt = "BCAway Logo",
}) => {
  const calculatedHeight = height ?? Math.round(width * (348 / 818));

  return (
    <img
      src="/logo.svg"
      alt={alt}
      width={width}
      height={calculatedHeight}
      className={className}
    />
  );
};
