"use client";

import React from "react";
import { TECH_CATEGORIES, TechCategory } from "@/data/portfolioData";
import { Cpu, Check } from "lucide-react";

export const TechStack: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28 text-[#111827] border-b border-[#E4E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-[#E4E2DA]">
          <span className="text-xs font-mono font-bold tracking-widest text-[#B8962E] uppercase">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2B5E] uppercase tracking-tight">
            TOOLS I WORK WITH
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-light">
            Modern, battle-tested technologies and frameworks used to build secure, scalable digital products.
          </p>
        </div>

        {/* Categorized Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((cat: TechCategory) => (
            <div
              key={cat.category}
              className="bg-[#F7F6F2] border border-[#E4E2DA] rounded-xl p-6 hover:border-[#B8962E] transition-colors shadow-sm"
            >
              <div className="flex items-center space-x-2 pb-4 border-b border-[#E4E2DA] mb-4">
                <Cpu className="w-4 h-4 text-[#B8962E]" />
                <h3 className="text-sm font-mono font-bold uppercase text-[#1C2B5E] tracking-wider">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E4E4DA] text-xs font-mono font-medium text-[#111827] hover:border-[#B8962E] hover:text-[#B8962E] transition-colors shadow-2xs"
                  >
                    <Check className="w-3 h-3 text-[#B8962E]" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Technology Selection */}
        <div className="mt-12 p-4 bg-[#F7F6F2] border border-[#E4E2DA] rounded-lg text-center">
          <p className="text-xs font-mono text-slate-600">
            Technology selections are guided by business requirements, performance needs, and long-term maintainability.
          </p>
        </div>

      </div>
    </section>
  );
};
