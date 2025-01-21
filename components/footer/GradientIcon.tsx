import React from "react";
import { IconType } from "react-icons";

interface GradientIconProps {
  Icon: IconType; // Type from react-icons for any icon component
  gradientId?: string; // Optional gradient ID for unique gradients
  className?: string; // Optional className for size and styling
}

const GradientIcon: React.FC<GradientIconProps> = ({
  Icon,
  gradientId = "iconGradient",
  className = "h-5 w-5 bg-red-400",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2A0EA6" />
          <stop offset="100%" stopColor="#F54208" />
        </linearGradient>
      </defs>
      <Icon fill={`url(#${gradientId})`} />
    </svg>
  );
};

export default GradientIcon;
