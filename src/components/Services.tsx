"use client";

import React, { useState } from "react";
import { TECHNICAL_CAPABILITIES } from "@/data/portfolioData";
import { LayoutGrid, CreditCard, Layers, Globe, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export const Services: React.FC = () => {
  const [selectedCapIndex, setSelectedCapIndex] = useState<number>(0);

  const icons = [LayoutGrid, CreditCard, Layers, Globe];

  return (
    <section id="ledger" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10 bg-[#0B0F18] relative">
      <div className="max-w-7xl mx-auto">
        {/* Station Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono mb-12">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B35] text-slate-950 font-bold text-[10px] tracking-wider rounded-xs">
              STATION 03
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">
              ENGINEERING LEDGER // ARCHITECTURAL DISCIPLINES
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>// ARCHITECTURE CONTRACTS</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            How I architect software systems.
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg leading-relaxed">
            I do not build fragile prototypes or assemble generic templates. Each discipline below represents an engineered methodology for eliminating operational friction and guaranteeing system uptime.
          </p>
        </div>

        {/* Interactive Capability Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Discipline Selector */}
          <div className="lg:col-span-5 space-y-3">
            {TECHNICAL_CAPABILITIES.map((cap, idx) => {
              const Icon = icons[idx] || Layers;
              const isSelected = selectedCapIndex === idx;
              return (
                <button
                  key={cap.category}
                  onClick={() => setSelectedCapIndex(idx)}
                  className={`w-full p-5 text-left rounded-xs border transition-all flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#141C2D] border-[#FF6B35] shadow-[0_4px_20px_rgba(255,107,53,0.15)]"
                      : "bg-[#0F1522] border-white/10 hover:border-white/20 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className={`p-2.5 rounded-xs border ${
                    isSelected
                      ? "bg-[#FF6B35] text-slate-950 border-[#FF8859]"
                      : "bg-white/5 text-slate-400 border-white/10"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className={isSelected ? "text-[#FF6B35] font-bold" : "text-slate-500"}>
                        [DISCIPLINE 0{idx + 1}]
                      </span>
                      {isSelected && (
                        <span className="text-emerald-400 font-mono font-bold">ACTIVE VIEW</span>
                      )}
                    </div>
                    <div className="font-bold text-slate-100 text-sm sm:text-base leading-snug">
                      {cap.category}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-1 font-sans">
                      {cap.headline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Deep Dive Spec Sheet */}
          <div className="lg:col-span-7 bg-[#0F1522] border border-white/15 rounded-xs p-6 sm:p-8 registration-corner shadow-2xl">
            {(() => {
              const cap = TECHNICAL_CAPABILITIES[selectedCapIndex];
              return (
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                    <span className="text-[#FF6B35] font-bold">
                      // ARCHITECTURAL DOSSIER: DISCIPLINE 0{selectedCapIndex + 1}
                    </span>
                    <span className="text-slate-500 uppercase">SPEC_SHEET_V4</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-3">
                    {cap.headline}
                  </h3>

                  <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Problem Solved Callout */}
                  <div className="p-4 bg-[#090D14] border border-white/10 rounded-xs mb-6">
                    <div className="text-[10px] font-mono text-amber-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>THE OPERATIONAL PROBLEM SOLVED:</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                      {cap.solvedProblem}
                    </p>
                  </div>

                  {/* Proof Points & Engineering Benchmarks */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-slate-400 mb-3 uppercase">// VERIFIED ENGINEERING BENCHMARKS:</div>
                    <div className="space-y-2">
                      {cap.proofPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tooling Arsenal */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase">// APPLIED TOOLING:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tooling.map((tool) => (
                        <span key={tool} className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-mono rounded-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
