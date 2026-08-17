"use client";

import React from "react";

interface GMLogoProps {
  className?: string;
  variant?: "full" | "mark" | "stacked";
  mode?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
}

export const GMLogo: React.FC<GMLogoProps> = ({
  className = "",
  variant = "full",
  mode = "dark",
  size = "md",
}) => {
  // Mode-based color assignment
  // Dark mode (on dark navy background): 'G' and 'M-left' are crisp White (#FFFFFF), 'M-right' is Gold (#B8962E)
  // Light mode (on white/light background): 'G' and 'M-left' are Deep Navy (#0C1A3A), 'M-right' is Gold (#B8962E)
  const primaryColor = mode === "dark" ? "#FFFFFF" : "#0C1A3A";
  const goldColor = "#B8962E";

  // Size configurations
  const heightMap = {
    sm: 34,
    md: 44,
    lg: 56,
    xl: 72,
  };
  const currentHeight = heightMap[size] || 44;

  return (
    <div className={`inline-flex items-center gap-3.5 ${className} select-none`}>
      {/* ── Monogram SVG Icon ── */}
      <svg
        height={currentHeight}
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-auto object-contain flex-shrink-0"
        style={{ height: `${currentHeight}px` }}
        aria-label="Gift Mukhwana GM Monogram Logo"
      >
        {/* ── 'G' Monogram ── */}
        <path
          d="M96 26C96 14.95 87.05 6 76 6H36C18.33 6 4 20.33 4 38V82C4 99.67 18.33 114 36 114H76C87.05 114 96 105.05 96 94V66H50V84H76V94H36C29.37 94 24 88.63 24 82V38C24 31.37 29.37 26 36 26H76C79.31 26 82 28.69 82 32V38H96V26Z"
          fill={primaryColor}
        />

        {/* ── 'M' Left Stem & V-Diagonal (Navy/White) ── */}
        <path
          d="M106 6H126V114H106V6Z"
          fill={primaryColor}
        />
        <path
          d="M126 32L156 86L164 74L136 24H126V32Z"
          fill={primaryColor}
        />

        {/* ── 'M' Right Leg (Gold Accent) ── */}
        <path
          d="M156 86L184 24H198V114H178V52L164 90L156 86Z"
          fill={goldColor}
        />
      </svg>

      {/* ── Brand Typography Label (Prominent & Visible) ── */}
      {variant === "full" && (
        <div className="flex flex-col justify-center text-left leading-tight font-sans">
          <span
            className={`font-black uppercase tracking-[0.16em] ${
              size === "sm"
                ? "text-sm"
                : size === "md"
                ? "text-base sm:text-lg"
                : size === "lg"
                ? "text-xl sm:text-2xl"
                : "text-2xl sm:text-3xl"
            }`}
            style={{ color: primaryColor, fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            GIFT MUKHWANA
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="h-[1.5px] w-3 bg-[#B8962E] inline-block" />
            <span
              className={`font-mono font-bold uppercase tracking-[0.24em] ${
                size === "sm" ? "text-[9px]" : "text-[10px] sm:text-[11px]"
              }`}
              style={{ color: goldColor }}
            >
              SOFTWARE DEVELOPER
            </span>
            <span className="h-[1.5px] w-3 bg-[#B8962E] inline-block" />
          </div>
        </div>
      )}
    </div>
  );
};
