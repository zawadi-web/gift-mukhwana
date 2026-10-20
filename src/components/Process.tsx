"use client";

import React from "react";
import { ENGINEERING_WORKFLOW } from "@/data/portfolioData";
import { GitCommit, Compass, Hammer, Radio, ArrowRight } from "lucide-react";

export const Process: React.FC = () => {
  const stepIcons = [Compass, GitCommit, Hammer, Radio];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10 bg-[#090D14] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono mb-12">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B35] text-slate-950 font-bold text-[10px] tracking-wider rounded-xs">
              WORKFLOW
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">
              THE PRODUCTION PIPELINE // SPEC TO EDGE COMMISSION
            </span>
          </div>
          <div className="text-slate-500">// 4-PHASE PROTOCOL</div>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mb-3">
            A deterministic engineering pipeline.
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            Software projects fail when developers write code before understanding the data constraints and business dependencies. I enforce a strict, transparent 4-stage pipeline on every build.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENGINEERING_WORKFLOW.map((stage, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={stage.step}
                className="p-6 bg-[#0F1522] border border-white/10 rounded-xs flex flex-col justify-between hover:border-[#FF6B35]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="text-[#FF6B35] font-bold text-sm">[{stage.step}]</span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] text-slate-400 font-bold rounded-xs">
                      PHASE // {stage.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    {stage.action}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono text-[11px]">
                  <span className="text-slate-500 block text-[9px] uppercase">KEY DELIVERABLE:</span>
                  <span className="text-emerald-400 font-semibold">{stage.artifact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
