"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Terminal, Shield, ArrowDown, ExternalLink, Zap, Layers, Cpu, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"thesis" | "telemetry" | "architecture">("thesis");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
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
      id="workbench"
      className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-8 border-b border-white/10 blueprint-grid overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF6B35]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Draughtsman's Desk Station Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B35] text-slate-950 font-bold text-[10px] tracking-wider rounded-xs">
              STATION 01
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">
              DRAUGHTSMAN&apos;S DESK // BUILDER TELEMETRY
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-active" />
              <span className="text-emerald-400 font-bold">READY FOR DISPATCH</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">LOC: LOCATION-INDEPENDENT</span>
          </div>
        </div>

        {/* Central Editorial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 lg:pt-14 items-start">
          {/* Main Manifesto Column */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6B35] mb-4 tracking-widest uppercase">
              <span className="w-6 h-px bg-[#FF6B35]" />
              <span>GIFT MUKHWANA · SOFTWARE BUILDER</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.08] mb-6">
              Engineering resilient{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-[#FF6B35]">
                business systems
              </span>
              , offline-first apps, and transactional engines.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl mb-8">
              I specialize in deconstructing complex operational friction into clean, robust code.
              From high-speed offline point-of-sale platforms and intentional web applications to fleet logistics engines and automated M-Pesa / Paystack payment pipelines.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo("artifacts")}
                className="workshop-btn-primary"
              >
                <span>INSPECT PROJECT ARTIFACTS</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("dispatch")}
                className="workshop-btn-secondary"
              >
                <span>COMMISSION A SYSTEM</span>
              </button>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors border border-white/10 rounded-xs bg-[#0F1522]"
              >
                <span>GITHUB REPOSITORIES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Core Verification Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="p-3 bg-[#0F1522]/80 border border-white/5 rounded-xs">
                <div className="text-[#FF6B35] font-bold mb-1">[01] MECHANICS FIRST</div>
                <div className="text-slate-400 text-[11px] leading-snug">
                  Strict type-safe architecture. Zero unneeded bloated libraries.
                </div>
              </div>
              <div className="p-3 bg-[#0F1522]/80 border border-white/5 rounded-xs">
                <div className="text-emerald-400 font-bold mb-1">[02] OFFLINE & EDGE</div>
                <div className="text-slate-400 text-[11px] leading-snug">
                  PWA caching & edge deployment for uninterrupted operations.
                </div>
              </div>
              <div className="p-3 bg-[#0F1522]/80 border border-white/5 rounded-xs">
                <div className="text-cyan-400 font-bold mb-1">[03] FINTECH HARDENED</div>
                <div className="text-slate-400 text-[11px] leading-snug">
                  Idempotent webhook verifiers & transactional payment callbacks.
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Terminal / Drawing Board Preview */}
          <div className="lg:col-span-4 flex flex-col bg-[#0F1522] border border-white/15 rounded-sm shadow-2xl registration-corner overflow-hidden">
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#141C2D] border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-300 font-bold">ATELIER_TERMINAL.sh</span>
              </div>
              <span className="text-[10px] text-slate-500">v4.2-STABLE</span>
            </div>

            {/* Terminal Switcher Tabs */}
            <div className="flex border-b border-white/10 bg-[#0B1019] text-[11px] font-mono">
              <button
                onClick={() => setActiveTab("thesis")}
                className={`flex-1 py-2 text-center transition-colors ${
                  activeTab === "thesis"
                    ? "bg-[#0F1522] text-[#FF6B35] font-bold border-b border-[#FF6B35]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                // SCOPE
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`flex-1 py-2 text-center transition-colors ${
                  activeTab === "telemetry"
                    ? "bg-[#0F1522] text-[#FF6B35] font-bold border-b border-[#FF6B35]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                // TELEMETRY
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`flex-1 py-2 text-center transition-colors ${
                  activeTab === "architecture"
                    ? "bg-[#0F1522] text-[#FF6B35] font-bold border-b border-[#FF6B35]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                // PROTOCOL
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 min-h-[290px] flex flex-col justify-between">
              {activeTab === "thesis" && (
                <div className="space-y-3">
                  <div className="text-slate-500 text-[10px] uppercase">// PRIMARY CAPABILITIES</div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF6B35] font-bold">&gt;</span>
                    <div>
                      <span className="text-slate-100 font-semibold">Custom POS & Inventory:</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Sub-15ms barcode checkout, offline caching & receipt logic.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <div>
                      <span className="text-slate-100 font-semibold">Transactional FinTech:</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">M-Pesa STK push, Paystack sessions & HMAC webhook handlers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <div>
                      <span className="text-slate-100 font-semibold">Production Web Apps:</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Strict Next.js App Router, Prisma ORM & PostgreSQL schemas.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "telemetry" && (
                <div className="space-y-2.5 text-[11px]">
                  <div className="text-slate-500 text-[10px] uppercase">// LIVE SYSTEM TELEMETRY</div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">OPERATING MODEL</span>
                    <span className="text-slate-200 font-bold">Location-Independent</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">TIMEZONE COVERAGE</span>
                    <span className="text-slate-200 font-bold">EAT / UTC+3 (Global Remote)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">DEPLOYMENT TARGET</span>
                    <span className="text-emerald-400 font-bold">Global Vercel Edge</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">SECURITY POSTURE</span>
                    <span className="text-amber-400 font-bold">Strict Type Safety</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">ACTIVE INTAKE</span>
                    <span className="text-emerald-400 font-bold">Q4 Contracts Open</span>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="space-y-2.5 text-[11px]">
                  <div className="text-slate-500 text-[10px] uppercase">// CORE STACK SPECS</div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["TypeScript", "Next.js", "React 19", "Prisma", "PostgreSQL", "Tailwind CSS", "PWA Workbox", "M-Pesa API", "Paystack", "REST APIs", "Node.js"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-xs text-[10px] text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 p-2.5 bg-emerald-950/20 border border-emerald-500/30 rounded-xs text-[10px] text-emerald-300">
                    ✓ All architectures prioritize real business continuity and zero unvetted dependencies.
                  </div>
                </div>
              )}

              {/* Terminal Footer Status */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  DAEMON_RUNNING
                </span>
                <button
                  onClick={() => scrollTo("artifacts")}
                  className="text-[#FF6B35] hover:underline flex items-center gap-1 font-bold"
                >
                  VIEW WORK // 02 &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Quick-Jump Station Bar */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>DISCOVER WORKSHOP ARTIFACTS BY SYSTEM TYPE:</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: "genesis-pos", label: "GENESIS MINIMART POS", type: "Retail POS / PWA", badge: "Live Interactive" },
              { id: "rada-dating", label: "RADA DATING APP", type: "Intentional Social Web", badge: "Active Platform" },
              { id: "express-ride-safari", label: "EXPRESS RIDE & SAFARI", type: "Fleet & Tourism Logistics", badge: "Production Live" },
              { id: "eska-metalworks", label: "ESKA METAL WORKS", type: "Industrial Commercial", badge: "Client Deploy" },
            ].map((station, idx) => (
              <button
                key={station.id}
                onClick={() => scrollTo("artifacts")}
                className="p-3 bg-[#0F1522]/90 border border-white/10 hover:border-[#FF6B35]/60 hover:bg-[#141C2D] transition-all rounded-xs text-left group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                    <span>[SYS 0{idx + 1}]</span>
                    <span className="text-amber-400 group-hover:text-[#FF6B35] font-bold">{station.badge}</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {station.label}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 font-sans">
                  {station.type}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
