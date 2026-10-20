"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Shield, Terminal, Globe, Award, CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="craftsman" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10 bg-[#0B0F18] relative">
      <div className="max-w-7xl mx-auto">
        {/* Station Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono mb-12">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B35] text-slate-950 font-bold text-[10px] tracking-wider rounded-xs">
              STATION 04
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">
              BUILDER DOSSIER // PROFESSIONAL PROFILE & PRINCIPLES
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>OPERATING MODEL: LOCATION-INDEPENDENT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Dossier Card */}
          <div className="lg:col-span-5 bg-[#0F1522] border border-white/15 rounded-xs p-6 sm:p-8 registration-corner shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
              <span className="text-[#FF6B35] font-bold">[ENGINEER IDENTIFICATION]</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-active" />
                ACTIVE
              </span>
            </div>

            <div className="mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">CRAFTSMAN</div>
              <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Gift Mukhwana</h3>
              <div className="text-sm font-mono text-[#FF6B35] mt-1 font-semibold">
                Software Developer & Systems Builder
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs border-y border-white/10 py-5 my-6">
              <div className="flex justify-between">
                <span className="text-slate-500">COLLABORATION:</span>
                <span className="text-slate-200 font-bold">Remote Worldwide</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SPECIALIZATION:</span>
                <span className="text-slate-200 font-bold">Systems, POS, Full-Stack Web</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">PRIMARY TOOLING:</span>
                <span className="text-slate-200 font-bold">Next.js · React 19 · TypeScript</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">DATABASE SCOPE:</span>
                <span className="text-slate-200 font-bold">PostgreSQL · Prisma ORM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">PAYMENT GATEWAYS:</span>
                <span className="text-emerald-400 font-bold">M-Pesa Daraja · Paystack</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="workshop-btn-secondary text-xs py-2 px-3 w-full text-center flex items-center justify-center gap-2"
              >
                <span>VERIFIED GITHUB: zawadi-web</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Code of Engineering */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider mb-2">
                // PHILOSOPHY & WORK ETHIC
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-6 leading-snug">
                I build software to solve operational bottlenecks, not to pad a portfolio.
              </h2>

              <div className="space-y-4 font-sans text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  I&apos;m <strong>Gift Mukhwana</strong>, an independent software developer working with businesses, startups, and institutions globally. My focus is engineering production software systems that businesses actually depend on every single day.
                </p>
                <p>
                  Too much modern software is bloated, fragile, and designed around visual trends rather than real operational constraints. When a store cashier needs to check out an order, they can&apos;t wait for a 5-second bundle download or fail because the store Wi-Fi dipped. When a customer pays, the transaction handler cannot drop an order webhook.
                </p>
                <p>
                  Whether architecting an offline-first retail POS platform, an intentional social matching application, or an executive transport booking engine, I believe in:
                </p>
              </div>

              {/* The 4 Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#0F1522] border border-white/10 rounded-xs">
                  <div className="text-xs font-mono font-bold text-slate-100 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                    <span>ZERO UNVETTED BLOAT</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    Every dependency is deliberate. Lean bundles, fast load times, and near-zero runtime overhead.
                  </p>
                </div>

                <div className="p-4 bg-[#0F1522] border border-white/10 rounded-xs">
                  <div className="text-xs font-mono font-bold text-slate-100 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>DEFENSIVE DATA SCHEMAS</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    Relational integrity, foreign keys, and strict TypeScript types from database to UI.
                  </p>
                </div>

                <div className="p-4 bg-[#0F1522] border border-white/10 rounded-xs">
                  <div className="text-xs font-mono font-bold text-slate-100 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>TRANSPARENT ENGINEERING</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    Clear project milestones, live staging URLs, and honest communication about capabilities.
                  </p>
                </div>

                <div className="p-4 bg-[#0F1522] border border-white/10 rounded-xs">
                  <div className="text-xs font-mono font-bold text-slate-100 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>LONG-TERM STABILITY</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    Clean commit histories, documented code, and post-deployment reliability guarantees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
