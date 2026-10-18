"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Globe2, ShieldCheck, Cpu, Code2, Sparkles, Layers } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GMLogo } from "./GMLogo";

export const Hero: React.FC = () => {
  const [timecode, setTimecode] = useState("00:00:24:08");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      const f = String(Math.floor(now.getMilliseconds() / 41)).padStart(2, "0");
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 82);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen bg-[#070A12] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden border-b border-[#D4A838]/20"
    >
      {/* ── Studio Ambient Lighting & Glow FX ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4A838_1px,transparent_1px)] [background-size:44px_44px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D4A838]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#182B5C]/35 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Widescreen Letterbox Subtle Guides ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4A838]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ── Top Production Slate Metadata Bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-[#ECC45F] font-bold tracking-widest uppercase">PROD // GM-STUDIO</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">SCENE 01: COLD OPEN</span>
            <span className="text-slate-600">/</span>
            <span className="hidden sm:inline text-slate-400">[ 2.39 : 1 SCOPE ]</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="tracking-widest uppercase text-slate-300">REC</span>
            </div>
            <div className="bg-[#11182B] px-2.5 py-1 rounded border border-slate-700/60 text-[#ECC45F] font-mono">
              TC {timecode}
            </div>
          </div>
        </div>

        {/* ── Main Hero Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Narrative, Identity, Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Location-Independent & Remote-Ready Pill */}
            <div className="inline-flex items-center gap-2 bg-[#11182B] border border-[#D4A838]/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Globe2 className="w-3.5 h-3.5 text-[#ECC45F]" />
              <span className="tracking-wide">LOCATION-INDEPENDENT · REMOTE COLLABORATION</span>
            </div>

            {/* Studio Director Callout & Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-[0.25em] text-[#ECC45F] uppercase font-bold">
                  SOFTWARE DEVELOPER &amp; SYSTEMS BUILDER
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.08] uppercase">
                GIFT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F8FAFC] to-[#ECC45F]">MUKHWANA</span>
              </h1>
              <p className="text-xl sm:text-2xl font-light text-slate-200 tracking-tight leading-snug">
                Engineering high-impact digital systems &amp; software that <span className="text-[#ECC45F] font-medium underline decoration-[#D4A838]/50 underline-offset-4">travels anywhere</span>.
              </p>
            </div>

            {/* Focused Narrative */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
              From resilient full-stack web applications and custom business platforms to automated payment workflows, I build production software designed to solve real business challenges for organizations and teams worldwide.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollToSection("work")}
                className="gold-btn px-7 py-3.5 rounded-md font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
              >
                <span>EXPLORE FEATURE RELEASES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="gold-outline-btn px-7 py-3.5 rounded-md font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>INITIATE PROJECT // CONTACT</span>
              </button>
            </div>

            {/* Studio Production Telemetry Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
              <div className="space-y-1">
                <span className="block text-[#ECC45F] font-bold text-sm sm:text-base">100%</span>
                <span className="text-[11px] text-slate-300 block">Custom Architecture</span>
                <span className="text-[9px] text-slate-500 hidden sm:block">Tailored for Business Value</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[#ECC45F] font-bold text-sm sm:text-base">REMOTE</span>
                <span className="text-[11px] text-slate-300 block">Cross-Border Ready</span>
                <span className="text-[9px] text-slate-500 hidden sm:block">Asynchronous &amp; Git-Driven</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[#ECC45F] font-bold text-sm sm:text-base">PRODUCTION</span>
                <span className="text-[11px] text-slate-300 block">Tested &amp; Deployed</span>
                <span className="text-[9px] text-slate-500 hidden sm:block">Scalable Cloud Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Telemetry Console (No personal portrait) */}
          <div className="lg:col-span-5">
            <div className="viewfinder-bracket bg-[#0D1322] border border-[#D4A838]/30 rounded-xl overflow-hidden shadow-2xl shadow-black/80">

              {/* Console Header */}
              <div className="bg-[#06090E] px-5 py-3.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-2">ARCH_CONSOLE.SYS</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#ECC45F]">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ACTIVE KERNEL</span>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 space-y-6">

                {/* Studio Monogram Emblem */}
                <div className="p-4 rounded-lg bg-[#11182B] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-[#06090E] border border-[#D4A838]/40">
                      <GMLogo variant="mark" mode="dark" size="sm" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        GIFT MUKHWANA
                      </div>
                      <div className="text-[10px] font-mono text-[#ECC45F]">
                        SOFTWARE DEVELOPER
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-[10px] text-slate-400 block">AVAILABILITY</span>
                    <span className="text-[11px] text-emerald-400 font-bold">OPEN TO CONTRACTS</span>
                  </div>
                </div>

                {/* System Architecture Readout */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[10px] text-[#ECC45F] tracking-widest uppercase flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>SYSTEM ATTRIBUTES &amp; CAPABILITIES</span>
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0F1D] border border-slate-800/80">
                      <span className="text-slate-400">Core Engineering</span>
                      <span className="text-white font-semibold">Full-Stack Web Systems</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0F1D] border border-slate-800/80">
                      <span className="text-slate-400">Primary Stack</span>
                      <span className="text-[#ECC45F]">Next.js · TypeScript · Postgres</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0F1D] border border-slate-800/80">
                      <span className="text-slate-400">Collaboration Model</span>
                      <span className="text-emerald-400 font-semibold">Remote / Distributed / Global</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0F1D] border border-slate-800/80">
                      <span className="text-slate-400">Payment Gateways</span>
                      <span className="text-slate-200">Paystack · M-Pesa · Webhooks</span>
                    </div>
                  </div>
                </div>

                {/* Live Console Terminal Output */}
                <div className="p-3 rounded bg-[#06090E] border border-slate-800/90 font-mono text-[11px] space-y-1 text-slate-400">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span>$</span>
                    <span className="text-[#ECC45F]">status --geo</span>
                  </div>
                  <div className="text-emerald-400 text-[10px]">
                    &gt; Geography decoupled. Engineering capacity available globally.
                  </div>
                  <div className="text-slate-400 text-[10px]">
                    &gt; Asynchronous delivery, high-fidelity commits, verified results.
                  </div>
                </div>

                {/* Console CTA */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#18223C] hover:bg-[#D4A838] hover:text-[#06090E] text-slate-200 py-3 px-4 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-[#D4A838]/30 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#ECC45F]" />
                  <span>TRANSMIT PROJECT SPECIFICATIONS</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
