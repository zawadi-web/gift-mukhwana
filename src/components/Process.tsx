"use client";

import React from "react";
import { PHILOSOPHY_PILLARS } from "@/data/portfolioData";
import { TrendingUp, Shield, Target } from "lucide-react";

export const Process: React.FC = () => {
  const icons = [TrendingUp, Shield, Target];

  return (
    <section id="philosophy" className="relative py-28 sm:py-36 bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none point-grid" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-[#F28621]" />
            <span className="text-[#F28621] font-mono text-xs uppercase tracking-widest font-bold">
              Our Philosophy
            </span>
            <div className="h-0.5 w-12 bg-[#F28621]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-[#0A1929] mb-8 leading-tight">
            Codebases evolve. <br className="hidden sm:block" />
            <span className="text-[#F28621]">Principles endure.</span>
          </h2>

          <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Software excellence requires rigorous specification, clean data models, and deliberate implementation. We engineer systems with clear boundaries, ensuring high performance across business cycles.
          </p>
        </div>

        {/* 3 Pillars Grid with Point Forty Large Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || Shield;
            return (
              <div
                key={pillar.number}
                className="group relative border-r border-b md:border-b-0 last:border-r-0 border-gray-200 p-8 sm:p-12 hover:bg-gray-50 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-8 inline-flex p-4 bg-[#F28621]/10 text-[#F28621] group-hover:bg-[#F28621] group-hover:text-white transition-colors duration-300 rounded-sm">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#0A1929] mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400 font-semibold uppercase">
                    Pillar {pillar.number}
                  </span>
                  <span className="text-5xl font-sans font-bold text-gray-200 group-hover:text-[#F28621]/20 transition-colors">
                    {pillar.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
