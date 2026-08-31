"use client";

import React from "react";
import { ArrowRight, MapPin, CheckCircle2, CreditCard, LayoutDashboard, Globe, ChevronRight, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GMLogo } from "./GMLogo";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen bg-[#0C1A3A] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden border-b border-slate-700/40"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8962E_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035] pointer-events-none" />
      {/* Soft glow blobs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#B8962E]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-0 w-80 h-80 bg-[#1C2B5E]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── Left: Headline & CTAs ── */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 bg-[#1C2B5E] border border-[#B8962E]/35 px-4 py-1.5 rounded-full text-xs font-mono text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8962E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8962E]" />
              </span>
              <MapPin className="w-3 h-3 text-[#B8962E]" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Introductory Greeting & Main Heading */}
            <div className="space-y-3">
              <span className="inline-block text-[#B8962E] text-sm sm:text-base font-mono font-bold tracking-widest uppercase">
                HI, I&apos;M GIFT MUKHWANA
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-white tracking-tight leading-[1.12] uppercase">
                WEB DEVELOPER &amp; SOFTWARE DEVELOPER IN KENYA
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              I build custom websites, web applications, business systems, and payment integrations that help businesses work smarter.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => scrollToSection("work")}
                className="gold-btn px-8 py-4 rounded-lg font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="gold-outline-btn px-8 py-4 rounded-lg font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>START A PROJECT</span>
              </button>
            </div>

            {/* Quick proof badges */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
              <div>
                <span className="block text-[#B8962E] font-bold text-sm">100%</span>
                <span>Custom Built</span>
              </div>
              <div>
                <span className="block text-[#B8962E] font-bold text-sm">Production</span>
                <span>Ready Software</span>
              </div>
              <div>
                <span className="block text-[#B8962E] font-bold text-sm">Business</span>
                <span>Value Focused</span>
              </div>
            </div>
          </div>

          {/* ── Right: Executive Business Solutions Showcase Card ── */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C2B5E] border border-[#B8962E]/35 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">

              {/* Card Header with Vector GM Logo */}
              <div className="bg-[#081229] p-5 border-b border-slate-700/60 flex items-center justify-between">
                <GMLogo variant="full" mode="dark" size="sm" />

                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CLIENT READY</span>
                </div>
              </div>

              {/* Business Solution Highlights */}
              <div className="p-6 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-700/50 flex items-center justify-between">
                  <span>CORE BUSINESS SOLUTIONS</span>
                  <span className="text-[#B8962E]">PRODUCTION GRADED</span>
                </div>

                {/* Solution 1: FinTech & Payment Gateways */}
                <div className="bg-[#0C1A3A] p-4 rounded-xl border border-slate-700/60 flex items-start space-x-3.5 hover:border-[#B8962E]/50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#1C2B5E] text-[#B8962E] border border-[#B8962E]/30 shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      PAYMENT INTEGRATION (M-PESA & PAYSTACK)
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-light mt-0.5">
                      Direct checkout flows, instant transaction confirmation & webhooks.
                    </p>
                  </div>
                </div>

                {/* Solution 2: Custom Business Systems & Dashboards */}
                <div className="bg-[#0C1A3A] p-4 rounded-xl border border-slate-700/60 flex items-start space-x-3.5 hover:border-[#B8962E]/50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#1C2B5E] text-[#B8962E] border border-[#B8962E]/30 shrink-0">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      CUSTOM BUSINESS SYSTEMS & PORTALS
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-light mt-0.5">
                      Operational dashboards, user role control & automated workflows.
                    </p>
                  </div>
                </div>

                {/* Solution 3: High-Performance Web Applications */}
                <div className="bg-[#0C1A3A] p-4 rounded-xl border border-slate-700/60 flex items-start space-x-3.5 hover:border-[#B8962E]/50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#1C2B5E] text-[#B8962E] border border-[#B8962E]/30 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      BUSINESS WEBSITES & WEB APPS
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-light mt-0.5">
                      Responsive Next.js applications engineered to convert leads & build credibility.
                    </p>
                  </div>
                </div>

                {/* Solution Guarantee Bar */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Fast Turnaround
                  </span>
                  <span className="flex items-center text-[#B8962E]">
                    <Zap className="w-3.5 h-3.5 mr-1" /> Mobile-First Design
                  </span>
                </div>
              </div>

              {/* Card Bottom Call to Action */}
              <div className="bg-[#081229] p-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">Have a software requirement?</span>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="gold-btn px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                >
                  <span>INQUIRE SOLUTION</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
