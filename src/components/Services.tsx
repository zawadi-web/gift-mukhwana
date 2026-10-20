"use client";

import React from "react";
import { SERVICES } from "@/data/portfolioData";
import { Check } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#16598D] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-white" />
            <span className="text-white font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Disciplines
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-6">
            Core Capabilities
          </h2>
          <p className="text-white/80 font-sans text-base sm:text-lg leading-relaxed">
            End-to-end technical execution covering architecture, payments, databases, and high-performance web systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((serv) => (
            <div
              key={serv.number}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-10 rounded-sm flex flex-col justify-between hover:bg-white/15 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/15">
                  <span className="text-3xl font-sans font-bold text-white/40">
                    {serv.number}
                  </span>
                  <span className="w-8 h-1 bg-[#F28621] rounded-full" />
                </div>

                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  {serv.title}
                </h3>

                <p className="text-white/85 font-sans text-sm sm:text-base leading-relaxed mb-8">
                  {serv.description}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-white/60 mb-3 font-semibold">
                  Key Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serv.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
                      <Check className="w-4 h-4 text-[#F28621] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
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
