"use client";

import React, { useState, useEffect } from "react";
import { GMLogo } from "./GMLogo";
import { WORKSHOP_STATIONS, PERSONAL_INFO } from "@/data/portfolioData";
import { Terminal, Menu, X, ArrowUpRight, Radio } from "lucide-react";

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStation, setActiveStation] = useState("workbench");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Track active section
      const stations = ["workbench", "artifacts", "ledger", "craftsman", "dispatch"];
      const scrollPos = window.scrollY + 200;

      for (let i = stations.length - 1; i >= 0; i--) {
        const el = document.getElementById(stations[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStation(stations[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090D14]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.7)]"
          : "bg-[#090D14]/50 backdrop-blur-xs border-b border-white/5"
      }`}
    >
      {/* Top micro telemetry strip */}
      <div className="border-b border-white/5 bg-[#0B1019]/60 px-4 sm:px-8 py-1 hidden sm:flex items-center justify-between text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 beacon-active" />
            STATION: DIGITAL WORKSHOP
          </span>
          <span className="text-slate-600">|</span>
          <span>LOCATION: INDEPENDENT / WORLDWIDE</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">SYS LATENCY: &lt;15ms</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors flex items-center gap-1"
          >
            {PERSONAL_INFO.github}
            <ArrowUpRight className="w-3 h-3 text-slate-500" />
          </a>
          <span className="text-slate-600">|</span>
          <span className="text-amber-400 font-mono">STATUS: AVAILABLE</span>
        </div>
      </div>

      {/* Main navigation toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        <a
          href="#workbench"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("workbench");
          }}
          className="cursor-pointer"
        >
          <GMLogo variant="full" size="md" />
        </a>

        {/* Desktop Stations Switcher */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#101726]/80 p-1 border border-white/10 rounded-sm">
          {WORKSHOP_STATIONS.map((station) => {
            const isActive = activeStation === station.id;
            return (
              <button
                key={station.id}
                onClick={() => scrollTo(station.id)}
                className={`px-3 py-1.5 text-xs font-mono transition-all rounded-xs flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#FF6B35] text-slate-950 font-bold shadow-[0_0_12px_rgba(255,107,53,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={isActive ? "text-slate-950" : "text-amber-500 font-bold"}>
                  [{station.code}]
                </span>
                <span>{station.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onStartProject || (() => scrollTo("dispatch"))}
            className="workshop-btn-primary"
          >
            <span>DISPATCH INQUIRY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onStartProject || (() => scrollTo("dispatch"))}
            className="px-2.5 py-1 text-[11px] font-mono font-bold bg-[#FF6B35] text-slate-950 rounded-xs"
          >
            INQUIRE
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white border border-white/10 rounded-xs bg-[#101726]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#090D14]/98 border-b border-white/10 px-6 py-6 flex flex-col gap-3 font-mono text-sm animate-in fade-in duration-200">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
            // WORKSHOP STATIONS
          </div>
          {WORKSHOP_STATIONS.map((station) => (
            <button
              key={station.id}
              onClick={() => scrollTo(station.id)}
              className="flex items-center justify-between py-2 text-left text-slate-200 hover:text-[#FF6B35] border-b border-white/5"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#FF6B35] font-bold">[{station.code}]</span>
                <span>{station.title}</span>
              </span>
              <span className="text-[10px] text-slate-500">{station.descriptor}</span>
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onStartProject) onStartProject();
                else scrollTo("dispatch");
              }}
              className="w-full workshop-btn-primary py-2.5 text-center text-xs"
            >
              INITIALIZE INQUIRY // DISPATCH
            </button>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 text-xs text-emerald-400 border border-emerald-500/30 rounded-xs bg-emerald-950/20 font-bold"
            >
              DIRECT WHATSAPP HOTLINE
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
