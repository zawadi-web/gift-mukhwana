"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A1929] via-[#0D233A] to-[#16598D] text-white pt-24 pb-20 px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle atmospheric gradient light */}
      <div className="absolute inset-0 opacity-15 pointer-events-none point-grid" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F28621]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-left relative z-10">
        {/* Subtle Category Kicker */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-0.5 w-10 bg-[#F28621]" />
          <span className="text-[#F28621] font-mono text-xs uppercase tracking-widest font-semibold">
            Software Development &amp; Systems Architecture
          </span>
        </div>

        {/* Large Confident Point Forty Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tight mb-8 leading-[1.08]">
          Helping Organizations <br />
          <span className="text-[#F28621]">Build Better Systems</span>
        </h1>

        {/* Concise Editorial Subhead */}
        <p className="font-sans text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10">
          We architect and deliver resilient business software, custom operational platforms, and full-stack web applications that eliminate operational bottlenecks.
        </p>

        {/* Clean Point Forty Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo("solutions")}
            className="btn-secondary"
          >
            <span>View Solutions</span>
          </button>
        </div>
      </div>
    </section>
  );
};
