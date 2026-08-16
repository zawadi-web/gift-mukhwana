"use client";

import React from "react";
import { Globe, LayoutDashboard, CreditCard, Code2, Server } from "lucide-react";
import { CAPABILITIES } from "@/data/portfolioData";

export const CapabilitiesStrip: React.FC = () => {
  const getIcon = (key: string) => {
    switch (key) {
      case "web-dev":
        return <Globe className="w-4 h-4 text-[#B8962E]" />;
      case "systems":
        return <LayoutDashboard className="w-4 h-4 text-[#B8962E]" />;
      case "payments":
        return <CreditCard className="w-4 h-4 text-[#B8962E]" />;
      case "web-apps":
        return <Code2 className="w-4 h-4 text-[#B8962E]" />;
      case "hosting":
        return <Server className="w-4 h-4 text-[#B8962E]" />;
      default:
        return <Globe className="w-4 h-4 text-[#B8962E]" />;
    }
  };

  return (
    <div className="bg-[#0E1A3D] border-y border-[#B8962E]/20 py-6 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-w-max space-x-6 lg:space-x-12">
          {CAPABILITIES.map((item, idx) => (
            <div
              key={item.key}
              className="flex items-center space-x-3 group text-slate-300 hover:text-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-[#1C2B5E] border border-[#B8962E]/20 group-hover:border-[#B8962E] transition-colors">
                {getIcon(item.key)}
              </div>
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-200 group-hover:text-[#B8962E] transition-colors">
                {item.name}
              </span>
              {idx < CAPABILITIES.length - 1 && (
                <span className="text-slate-700 ml-4 hidden lg:inline-block">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
