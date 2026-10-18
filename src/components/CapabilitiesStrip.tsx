"use client";

import React from "react";
import { Globe, LayoutDashboard, CreditCard, Code2, Server, Film, Cpu } from "lucide-react";
import { CAPABILITIES } from "@/data/portfolioData";

export const CapabilitiesStrip: React.FC = () => {
  const getIcon = (key: string) => {
    switch (key) {
      case "web-dev":
        return <Globe className="w-4 h-4 text-[#ECC45F]" />;
      case "systems":
        return <LayoutDashboard className="w-4 h-4 text-[#ECC45F]" />;
      case "payments":
        return <CreditCard className="w-4 h-4 text-[#ECC45F]" />;
      case "web-apps":
        return <Code2 className="w-4 h-4 text-[#ECC45F]" />;
      case "hosting":
        return <Server className="w-4 h-4 text-[#ECC45F]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#ECC45F]" />;
    }
  };

  return (
    <div className="bg-[#0A0F1D] border-y border-[#D4A838]/20 py-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-6 lg:gap-8 py-1">
          {CAPABILITIES.map((item, idx) => (
            <div
              key={item.key}
              className="flex items-center gap-3 shrink-0 group text-slate-300 hover:text-white transition-colors"
            >
              <div className="p-2 rounded bg-[#11182B] border border-[#D4A838]/25 group-hover:border-[#ECC45F] transition-colors">
                {getIcon(item.key)}
              </div>
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-slate-200 group-hover:text-[#ECC45F] transition-colors">
                {item.name}
              </span>
              {idx < CAPABILITIES.length - 1 && (
                <span className="text-slate-700 ml-6 hidden lg:inline-block font-mono">
                  //
                </span>
              )}
            </div>
          ))}

          {/* Location-independent badge */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-800 shrink-0 text-[11px] font-mono text-[#ECC45F]">
            <Film className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase">GLOBAL REMOTE DELIVERY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
