"use client";

import React from "react";

interface GMLogoProps {
  className?: string;
  variant?: "full" | "mark" | "stacked";
  size?: "sm" | "md" | "lg" | "xl";
}

export const GMLogo: React.FC<GMLogoProps> = ({
  className = "",
  variant = "full",
  size = "md",
}) => {
  const heightMap = {
    sm: 28,
    md: 36,
    lg: 46,
    xl: 60,
  };
  const currentHeight = heightMap[size] || 36;

  return (
    <div className={`inline-flex items-center gap-3 ${className} select-none group`}>
      {/* ── Monogram SVG Icon ── */}
      <svg
        height={currentHeight}
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ height: `${currentHeight}px` }}
        aria-label="Gift Mukhwana GM Monogram Logo"
      >
        {/* ── 'G' Monogram ── */}
        <path
          d="M96 26C96 14.95 87.05 6 76 6H36C18.33 6 4 20.33 4 38V82C4 99.67 18.33 114 36 114H76C87.05 114 96 105.05 96 94V66H50V84H76V94H36C29.37 94 24 88.63 24 82V38C24 31.37 29.37 26 36 26H76C79.31 26 82 28.69 82 32V38H96V26Z"
          fill="#F1F5F9"
        />

        {/* ── 'M' Left Stem & V-Diagonal (Pure White/Slate) ── */}
        <path
          d="M106 6H126V114H106V6Z"
          fill="#F1F5F9"
        />
        <path
          d="M126 32L156 86L164 74L136 24H126V32Z"
          fill="#F1F5F9"
        />

        {/* ── 'M' Right Leg (Signal Amber Accent) ── */}
        <path
          d="M156 86L184 24H198V114H178V52L164 90L156 86Z"
          fill="#FF6B35"
        />
      </svg>

      {/* ── Brand Typography Label ── */}
      {variant === "full" && (
        <div className="flex flex-col justify-center text-left leading-tight">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono font-bold tracking-[0.14em] text-slate-100 ${
                size === "sm" ? "text-xs" : size === "md" ? "text-sm sm:text-base" : "text-lg sm:text-xl"
              }`}
            >
              GIFT MUKHWANA
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-mono font-bold bg-[#FF6B35]/15 text-[#FF6B35] border border-[#FF6B35]/30 rounded-xs">
              V4.2
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-slate-400 uppercase">
              Software Builder · Systems
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
