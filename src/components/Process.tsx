"use client";

import React from "react";
import { Search, Compass, Code2, Rocket, ArrowRight } from "lucide-react";
import { PROCESS_STEPS, ProcessStep } from "@/data/portfolioData";

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Search className="w-5 h-5 text-[#B8962E]" />;
      case "02":
        return <Compass className="w-5 h-5 text-[#B8962E]" />;
      case "03":
        return <Code2 className="w-5 h-5 text-[#B8962E]" />;
      case "04":
        return <Rocket className="w-5 h-5 text-[#B8962E]" />;
      default:
        return <Search className="w-5 h-5 text-[#B8962E]" />;
    }
  };

  return (
    <section className="bg-[#111E4A] py-20 md:py-28 text-white border-b border-slate-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-slate-700/60">
          <span className="text-xs font-mono font-bold tracking-widest text-[#B8962E] uppercase">
            DEVELOPMENT WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            FROM IDEA TO WORKING PRODUCT
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            A structured, transparent engineering process that ensures reliable delivery and clear communication.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step: ProcessStep, index: number) => (
            <div
              key={step.number}
              className="bg-[#1C2B5E] border border-[#B8962E]/20 rounded-xl p-6 relative flex flex-col justify-between hover:border-[#B8962E] transition-all group duration-300"
            >
              <div className="space-y-4">
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-[#B8962E]">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-[#111E4A] border border-slate-700/60 group-hover:border-[#B8962E]/50 transition-colors">
                    {getStepIcon(step.number)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#B8962E] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Step Output / Deliverable */}
              <div className="pt-4 mt-6 border-t border-slate-700/60 text-[11px] font-mono text-slate-400">
                <span className="text-[#B8962E] block font-semibold text-[10px] uppercase mb-1">
                  Key Output:
                </span>
                <span>{step.deliverables}</span>
              </div>

              {/* Connecting Arrow for Desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-[#111E4A] border border-[#B8962E]/40 flex items-center justify-center text-[#B8962E]">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
