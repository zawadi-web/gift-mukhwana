"use client";

import React from "react";
import { ArrowRight, Sparkles, Film } from "lucide-react";

export const BrandCTA: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#070A12] py-24 md:py-32 text-white relative overflow-hidden border-b border-[#D4A838]/20">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4A838_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-[#D4A838]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">

        {/* Subtle Gold Pill */}
        <div className="inline-flex items-center space-x-2 bg-[#11182B] border border-[#D4A838]/40 px-4 py-1.5 rounded-full text-xs font-mono text-[#ECC45F]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRODUCTION READINESS // OPEN TO COLLABORATION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight max-w-4xl mx-auto">
          READY TO ARCHITECT A HIGH-IMPACT DIGITAL SYSTEM?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Let&apos;s engineer your business requirements into a robust web platform, full-stack application, or custom business system that performs anywhere.
        </p>

        {/* Action buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
          <button
            onClick={() => scrollToSection("contact")}
            className="gold-btn w-full sm:w-auto px-8 py-4 rounded-md font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
          >
            <span>INITIATE COLLABORATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection("work")}
            className="gold-outline-btn w-full sm:w-auto px-8 py-4 rounded-md font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>REVIEW CASE STUDIES</span>
          </button>
        </div>

      </div>
    </section>
  );
};
