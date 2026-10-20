"use client";

import React from "react";
import { SOLUTIONS } from "@/data/portfolioData";
import { Layers } from "lucide-react";

export const SelectedWork: React.FC = () => {
  return (
    <section id="solutions" className="relative py-28 sm:py-36 bg-[#0A1929] text-white overflow-hidden">
      {/* Subtle grid line overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none point-grid-dark" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-[#F28621]" />
            <span className="text-[#F28621] font-mono text-xs uppercase tracking-widest font-bold">
              Featured Systems
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-6">
            Software Solutions
          </h2>
          <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed">
            A curated selection of production software platforms engineered to eliminate operational friction and deliver verified reliability.
          </p>
        </div>

        {/* Clean Solutions 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.number}
              className="bg-[#102A43]/50 border border-white/10 hover:border-[#F28621] transition-all duration-300 p-8 sm:p-10 rounded-sm flex flex-col justify-between group hover:shadow-2xl"
            >
              <div>
                {/* Header row with Number and Category */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#F28621] uppercase">
                    {sol.category}
                  </span>
                  <span className="text-4xl font-sans font-bold text-white/20 group-hover:text-[#F28621]/40 transition-colors">
                    {sol.number}
                  </span>
                </div>

                {/* Title & Headline */}
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-2 group-hover:text-[#F28621] transition-colors">
                  {sol.name}
                </h3>
                <div className="text-sm font-sans font-medium text-gray-300 mb-4">
                  {sol.headline}
                </div>

                {/* Transparent Narrative */}
                <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
                  {sol.description}
                </p>
              </div>

              {/* Impact Metric & Applied Technologies */}
              <div>
                <div className="p-4 bg-[#0A1929]/70 border border-white/5 rounded-sm mb-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400 uppercase">
                    {sol.impactLabel}
                  </span>
                  <span className="text-lg font-mono font-bold text-[#F28621]">
                    {sol.impactMetric}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {sol.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-mono rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
