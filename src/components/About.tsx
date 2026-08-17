"use client";

import React from "react";
import { Code, CheckCircle, MapPin, Briefcase, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GMLogo } from "./GMLogo";

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#F7F6F2] py-20 md:py-28 text-[#111827] border-b border-[#E4E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Card & Builder Visual */}
          <div className="lg:col-span-5">
            <div className="bg-[#0C1A3A] text-white rounded-xl p-8 border border-[#B8962E]/30 shadow-xl relative overflow-hidden">
              {/* Decorative subtle ambient backdrop */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8962E]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Developer Avatar / Profile Frame */}
              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[#1C2B5E] border-2 border-[#B8962E] shadow-md flex items-center justify-center">
                    <GMLogo variant="mark" mode="dark" size="lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      {PERSONAL_INFO.name}
                    </h3>
                    <span className="text-xs font-mono text-[#B8962E] block font-semibold">
                      {PERSONAL_INFO.title}
                    </span>
                    <span className="text-[11px] text-slate-300 flex items-center mt-1">
                      <MapPin className="w-3 h-3 text-[#B8962E] mr-1" />
                      {PERSONAL_INFO.locationShort}
                    </span>
                  </div>
                </div>

                {/* Key Attributes */}
                <div className="space-y-3 pt-4 border-t border-slate-700/60 text-xs font-mono text-slate-300">
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#1C2B5E] border border-slate-700/60">
                    <span className="text-slate-400">Core Focus</span>
                    <span className="text-[#B8962E] font-semibold">Business Software Solutions</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#1C2B5E] border border-slate-700/60">
                    <span className="text-slate-400">Engineering Style</span>
                    <span className="text-slate-200">Pragmatic & Production-Ready</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#1C2B5E] border border-slate-700/60">
                    <span className="text-slate-400">Location</span>
                    <span className="text-slate-200">Chuka, Tharaka-Nithi, Kenya</span>
                  </div>
                </div>

                {/* GitHub link preview */}
                <div className="pt-2">
                  <a
                    href={`https://${PERSONAL_INFO.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1C2B5E] hover:bg-[#B8962E] hover:text-white text-slate-200 text-xs font-mono py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors border border-slate-700/60"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>{PERSONAL_INFO.github}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Business Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#B8962E] uppercase">
                ABOUT THE DEVELOPER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C1A3A] uppercase tracking-tight">
                MEET GIFT
              </h2>
            </div>

            {/* Exact Required Text & Narrative */}
            <div className="space-y-4 text-slate-700 text-base leading-relaxed font-light">
              <p className="text-lg text-[#0C1A3A] font-semibold">
                I’m Gift Mukhwana, a software developer and Computer Science student based in Kenya.
              </p>
              <p>
                I started by learning how software works and gradually moved into building real digital products and solutions for businesses.
              </p>
              <p>
                Today, I enjoy taking a real-world problem, understanding how a business operates, and turning that problem into software people can actually use.
              </p>
              <p className="p-4 bg-white rounded-xl border-l-4 border-[#B8962E] text-[#0C1A3A] font-semibold shadow-sm border border-r-[#E4E2DA] border-t-[#E4E2DA] border-b-[#E4E2DA]">
                My focus is not simply writing code. It is building useful solutions that create value.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-[#E4E2DA]">
                <Briefcase className="w-5 h-5 text-[#B8962E] mb-2" />
                <h4 className="text-xs font-bold text-[#0C1A3A] uppercase mb-1">Business First</h4>
                <p className="text-[11px] text-slate-600 font-light">Aligning software architecture with operational goals.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E4E2DA]">
                <Code className="w-5 h-5 text-[#B8962E] mb-2" />
                <h4 className="text-xs font-bold text-[#0C1A3A] uppercase mb-1">Clean Engineering</h4>
                <p className="text-[11px] text-slate-600 font-light">Maintainable TypeScript & database structures.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E4E2DA]">
                <CheckCircle className="w-5 h-5 text-[#B8962E] mb-2" />
                <h4 className="text-xs font-bold text-[#0C1A3A] uppercase mb-1">Reliable Execution</h4>
                <p className="text-[11px] text-slate-600 font-light">Tested, secure, and production-ready code.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
