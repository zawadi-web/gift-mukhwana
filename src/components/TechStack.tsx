"use client";

import React from "react";
import { TOOLCHAIN } from "@/data/portfolioData";
import { Terminal, Cpu, Database, Wrench } from "lucide-react";

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10 bg-[#090D14] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono mb-12">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B35] text-slate-950 font-bold text-[10px] tracking-wider rounded-xs">
              ARSENAL
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">
              ENGINEERING TOOLCHAIN // PRODUCTION CAPABILITIES
            </span>
          </div>
          <div className="text-slate-500">// ALL SYSTEMS OPERATIONAL</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {TOOLCHAIN.map((stack) => (
            <div
              key={stack.group}
              className="p-5 bg-[#0F1522] border border-white/10 rounded-xs flex flex-col justify-between hover:border-[#FF6B35]/40 transition-colors"
            >
              <div>
                <div className="text-[10px] font-mono text-[#FF6B35] font-bold uppercase mb-2">
                  // {stack.group}
                </div>
                <div className="space-y-2 mt-3">
                  {stack.items.map((item) => (
                    <div
                      key={item}
                      className="text-xs font-mono text-slate-300 py-1 border-b border-white/5 flex items-center justify-between"
                    >
                      <span>{item}</span>
                      <span className="text-emerald-400 text-[10px]">✓</span>
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
