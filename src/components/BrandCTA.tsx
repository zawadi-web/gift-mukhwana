"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const BrandCTA: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#111E4A] py-20 md:py-24 text-white relative overflow-hidden border-b border-[#B8962E]/30">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8962E_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#B8962E]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Subtle Gold Pill */}
        <div className="inline-flex items-center space-x-2 bg-[#1C2B5E] border border-[#B8962E]/40 px-4 py-1.5 rounded-full text-xs font-mono text-[#B8962E]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>READY TO BUILD REAL VALUE</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight max-w-3xl mx-auto">
          HAVE A BUSINESS PROBLEM THAT SOFTWARE COULD SOLVE?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Let&apos;s turn the idea into something practical, usable and ready for the real world.
        </p>

        {/* Action buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
          <button
            onClick={() => scrollToSection("contact")}
            className="gold-btn w-full sm:w-auto px-8 py-4 rounded font-semibold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection("work")}
            className="gold-outline-btn w-full sm:w-auto px-8 py-4 rounded font-semibold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>VIEW MY WORK</span>
          </button>
        </div>

      </div>
    </section>
  );
};
