"use client";

import React from "react";
import { TECH_CATEGORIES, TechCategory } from "@/data/portfolioData";
import { Cpu, Check, Layers } from "lucide-react";

export const TechStack: React.FC = () => {
  return (
    <section className="bg-[#0A0F1D] py-24 md:py-32 text-slate-100 border-b border-[#D4A838]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ECC45F] uppercase">
            <Cpu className="w-4 h-4 text-[#D4A838]" />
            <span>PRODUCTION ARSENAL // TOOLCHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            ENGINEERING STACK &amp; TECHNOLOGIES
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            Modern, industry-standard technologies selected for type safety, computational performance, and architectural longevity.
          </p>
        </div>

        {/* ── Categorized Tech Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((cat: TechCategory) => (
            <div
              key={cat.category}
              className="viewfinder-bracket bg-[#11182B] border border-slate-800 rounded-xl p-6 hover:border-[#D4A838]/60 transition-colors shadow-xl"
            >
              <div className="flex items-center space-x-2 pb-4 border-b border-slate-800 mb-5">
                <Cpu className="w-4 h-4 text-[#ECC45F]" />
                <h3 className="text-xs font-mono font-bold uppercase text-white tracking-widest">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#06090E] border border-slate-800 text-xs font-mono font-medium text-slate-200 hover:border-[#D4A838] hover:text-[#ECC45F] transition-colors"
                  >
                    <Check className="w-3 h-3 text-[#ECC45F]" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Technology Selection */}
        <div className="mt-12 p-4 bg-[#11182B] border border-slate-800 rounded-lg text-center">
          <p className="text-xs font-mono text-slate-400">
            Technology selections are guided by business requirements, operational efficiency, and long-term maintainability—not transient trends.
          </p>
        </div>

      </div>
    </section>
  );
};
