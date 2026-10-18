"use client";

import React from "react";
import { Search, Compass, Code2, Rocket, ArrowRight, GitBranch, Film } from "lucide-react";
import { PROCESS_STEPS, ProcessStep } from "@/data/portfolioData";

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Search className="w-5 h-5 text-[#ECC45F]" />;
      case "02":
        return <Compass className="w-5 h-5 text-[#ECC45F]" />;
      case "03":
        return <Code2 className="w-5 h-5 text-[#ECC45F]" />;
      case "04":
        return <Rocket className="w-5 h-5 text-[#ECC45F]" />;
      default:
        return <Search className="w-5 h-5 text-[#ECC45F]" />;
    }
  };

  return (
    <section id="process" className="bg-[#0A0F1D] py-24 md:py-32 text-white border-b border-[#D4A838]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Scene Header ── */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ECC45F] uppercase">
            <Film className="w-4 h-4 text-[#D4A838]" />
            <span>SCENE 04 // THE PRODUCTION SCRIPT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            ENGINEERING WORKFLOW
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            A structured, transparent engineering methodology engineered for seamless remote collaboration and reliable delivery.
          </p>
        </div>

        {/* ── Process Steps Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step: ProcessStep, index: number) => (
            <div
              key={step.number}
              className="viewfinder-bracket bg-[#11182B] border border-slate-800 rounded-xl p-6 relative flex flex-col justify-between hover:border-[#D4A838]/70 transition-all group duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Step Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-[#ECC45F] uppercase tracking-wider">
                      {step.phaseCode || `PHASE 0${index + 1}`}
                    </span>
                    <span className="text-3xl font-mono font-black text-white">
                      {step.number}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#06090E] border border-slate-700/80 group-hover:border-[#ECC45F]/50 transition-colors">
                    {getStepIcon(step.number)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#ECC45F] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Step Output / Deliverable */}
              <div className="pt-4 mt-6 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-[#ECC45F] block font-semibold text-[10px] uppercase mb-1">
                  Deliverable:
                </span>
                <span className="text-slate-300">{step.deliverables}</span>
              </div>

              {/* Connecting Indicator for Desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-7 h-7 rounded-full bg-[#06090E] border border-[#D4A838]/40 flex items-center justify-center text-[#ECC45F] shadow-md">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Remote Delivery Footnote */}
        <div className="mt-12 p-4 bg-[#11182B] border border-slate-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-[#ECC45F]" />
            <span>REMOTE DELIVERY PROTOCOL: Git-driven versioning · Staging previews · Asynchronous async updates</span>
          </div>
          <span className="text-emerald-400 font-semibold">WORLDWIDE COLLABORATION</span>
        </div>

      </div>
    </section>
  );
};
