"use client";

import React from "react";
import { GMLogo } from "./GMLogo";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Terminal, Shield, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060A10] border-t border-white/10 px-4 sm:px-8 py-16 text-slate-400 font-mono text-xs relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          {/* Logo & Colophon */}
          <div className="md:col-span-5">
            <GMLogo variant="full" size="md" />
            <p className="mt-4 text-slate-400 text-xs leading-relaxed max-w-sm font-sans">
              The Digital Workshop of Gift Mukhwana. Architecting custom business systems, offline-ready applications, and high-impact digital solutions for clients worldwide.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>COLOPHON // ALL SYSTEMS VERIFIED &amp; MAINTAINED</span>
            </div>
          </div>

          {/* Quick Station Navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase text-[#FF6B35] font-bold tracking-wider mb-2">
              // WORKSHOP DIRECTORY
            </div>
            <div>
              <a href="#workbench" className="hover:text-slate-200 transition-colors block py-0.5">
                [01] Draughtsman&apos;s Desk
              </a>
            </div>
            <div>
              <a href="#artifacts" className="hover:text-slate-200 transition-colors block py-0.5">
                [02] Project Artifacts
              </a>
            </div>
            <div>
              <a href="#ledger" className="hover:text-slate-200 transition-colors block py-0.5">
                [03] Engineering Ledger
              </a>
            </div>
            <div>
              <a href="#craftsman" className="hover:text-slate-200 transition-colors block py-0.5">
                [04] Builder Dossier
              </a>
            </div>
            <div>
              <a href="#dispatch" className="hover:text-slate-200 transition-colors block py-0.5">
                [05] Transmission Console
              </a>
            </div>
          </div>

          {/* Verified Contacts */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] uppercase text-[#FF6B35] font-bold tracking-wider mb-2">
              // VERIFIED CHANNELS
            </div>
            <div className="text-slate-300">
              EMAIL:{" "}
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-400 hover:underline">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="text-slate-300">
              HOTLINE:{" "}
              <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                {PERSONAL_INFO.phoneFormatted}
              </a>
            </div>
            <div className="text-slate-300">
              GITHUB:{" "}
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:underline">
                {PERSONAL_INFO.github}
              </a>
            </div>
            <div className="text-[11px] text-slate-500 pt-2">
              OPERATING: Location-Independent · Global Client Delivery
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Gift Mukhwana. Handcrafted in TypeScript &amp; Next.js.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors py-1 px-2.5 bg-white/5 border border-white/10 rounded-xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
