"use client";

import React from "react";
import { Code, CheckCircle, Globe2, Briefcase, Terminal, Shield, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GMLogo } from "./GMLogo";

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#070A12] py-24 md:py-32 text-slate-100 border-b border-[#D4A838]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Scene Header ── */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ECC45F] uppercase">
            <Sparkles className="w-4 h-4 text-[#D4A838]" />
            <span>SCENE 05 // SYSTEM MONOGRAPH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            THE DEVELOPER BEHIND THE WORK
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            An engineering identity built on technical capability, reliable execution, and software that travels anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left Column: Studio Developer Console (No personal portrait) ── */}
          <div className="lg:col-span-5">
            <div className="viewfinder-bracket bg-[#0D1322] text-white rounded-xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
              {/* Subtle ambient amber backdrop */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4A838]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Emblem Frame */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-xl bg-[#06090E] border-2 border-[#D4A838] shadow-md flex items-center justify-center">
                    <GMLogo variant="mark" mode="dark" size="lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-wider">
                      {PERSONAL_INFO.name}
                    </h3>
                    <span className="text-xs font-mono text-[#ECC45F] block font-semibold">
                      {PERSONAL_INFO.roleTitle}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center mt-1 gap-1">
                      <Globe2 className="w-3 h-3 text-emerald-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </span>
                  </div>
                </div>

                {/* Key Studio Attributes */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs font-mono">
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#11182B] border border-slate-800/80">
                    <span className="text-slate-400">Core Focus</span>
                    <span className="text-[#ECC45F] font-semibold">Business Software &amp; Systems</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#11182B] border border-slate-800/80">
                    <span className="text-slate-400">Engineering Style</span>
                    <span className="text-slate-200">Pragmatic · Production-Ready</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#11182B] border border-slate-800/80">
                    <span className="text-slate-400">Availability</span>
                    <span className="text-emerald-400 font-semibold">Remote &amp; Contract Builds</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#11182B] border border-slate-800/80">
                    <span className="text-slate-400">Work Mode</span>
                    <span className="text-slate-200">Location-Independent</span>
                  </div>
                </div>

                {/* GitHub link preview */}
                <div className="pt-2">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#18223C] hover:bg-[#D4A838] hover:text-[#06090E] text-slate-200 text-xs font-mono py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all border border-slate-700/80 cursor-pointer"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>VERIFY CODE ON GITHUB // {PERSONAL_INFO.github}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Narrative & Professional Identity ── */}
          <div className="lg:col-span-7 space-y-6">

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-xl text-white font-medium">
                I’m Gift Mukhwana, a software developer engineering digital systems, web applications, and business software built to operate reliably across borders.
              </p>
              <p>
                My professional identity is rooted in technical capability, practical problem-solving, and the measurable value delivered to clients—not tied to any single town or region. As a mobile, location-independent developer, I collaborate with organizations and founders remotely, delivering high-performance digital products that scale wherever they are deployed.
              </p>
              <p>
                Whether building a full-stack platform with authenticated portals and payment integrations, architecting a bespoke operational dashboard, or deploying high-conversion web infrastructure, I approach every build with rigorous type safety, modular architecture, and user-centric clarity.
              </p>
              <div className="p-4 rounded-lg bg-[#11182B] border-l-4 border-[#D4A838] border border-slate-800 text-slate-200 font-mono text-sm">
                &quot;Software should solve a concrete operational problem and create real business leverage, anywhere in the world.&quot;
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#0D1322] p-4 rounded-lg border border-slate-800 space-y-1.5">
                <Briefcase className="w-5 h-5 text-[#ECC45F] mb-1" />
                <h4 className="text-xs font-bold text-white uppercase font-mono">Business First</h4>
                <p className="text-xs text-slate-400 font-light">Aligning software architecture with operational goals and client ROI.</p>
              </div>

              <div className="bg-[#0D1322] p-4 rounded-lg border border-slate-800 space-y-1.5">
                <Code className="w-5 h-5 text-[#ECC45F] mb-1" />
                <h4 className="text-xs font-bold text-white uppercase font-mono">Clean Code</h4>
                <p className="text-xs text-slate-400 font-light">Maintainable TypeScript, Prisma schemas, and tested endpoints.</p>
              </div>

              <div className="bg-[#0D1322] p-4 rounded-lg border border-slate-800 space-y-1.5">
                <Globe2 className="w-5 h-5 text-[#ECC45F] mb-1" />
                <h4 className="text-xs font-bold text-white uppercase font-mono">Remote Ready</h4>
                <p className="text-xs text-slate-400 font-light">Asynchronous workflows, transparent git history, and global availability.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
