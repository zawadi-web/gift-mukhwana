"use client";

import React from "react";

interface GMLogoProps {
  className?: string;
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
}

export const GMLogo: React.FC<GMLogoProps> = ({
  className = "",
  variant = "full",
  size = "md",
}) => {
  const heightMap = {
    sm: 30,
    md: 38,
    lg: 48,
  };
  const currentHeight = heightMap[size] || 38;

  return (
    <div className={`inline-flex items-center gap-3 ${className} select-none`}>
      <svg
        height={currentHeight}
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-auto object-contain flex-shrink-0"
        style={{ height: `${currentHeight}px` }}
        aria-label="Gift Mukhwana Logo"
      >
        {/* 'G' Stem */}
        <path
          d="M96 26C96 14.95 87.05 6 76 6H36C18.33 6 4 20.33 4 38V82C4 99.67 18.33 114 36 114H76C87.05 114 96 105.05 96 94V66H50V84H76V94H36C29.37 94 24 88.63 24 82V38C24 31.37 29.37 26 36 26H76C79.31 26 82 28.69 82 32V38H96V26Z"
          fill="#FFFFFF"
        />
        {/* 'M' Left */}
        <path d="M106 6H126V114H106V6Z" fill="#FFFFFF" />
        <path d="M126 32L156 86L164 74L136 24H126V32Z" fill="#FFFFFF" />
        {/* 'M' Right Accent */}
        <path d="M156 86L184 24H198V114H178V52L164 90L156 86Z" fill="#F28621" />
      </svg>

      {variant === "full" && (
        <div className="flex flex-col justify-center text-left leading-tight">
          <span className="font-sans font-bold tracking-tight text-white text-base sm:text-lg uppercase">
            Gift Mukhwana
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#F28621] uppercase">
            Software Systems
          </span>
        </div>
      )}
    </div>
  );
};
