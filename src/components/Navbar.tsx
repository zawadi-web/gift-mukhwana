"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Radio } from "lucide-react";
import { GMLogo } from "./GMLogo";

interface NavbarProps {
  onStartProject?: () => void;
}

const NAV_SCENES = [
  { label: "WORK",         sceneNum: "01", section: "work" },
  { label: "SERVICES",     sceneNum: "02", section: "services" },
  { label: "WORKFLOW",     sceneNum: "03", section: "process" },
  { label: "ABOUT",        sceneNum: "04", section: "about" },
  { label: "CONTACT",      sceneNum: "05", section: "contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    onStartProject ? onStartProject() : scrollToSection("contact");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06090E]/95 backdrop-blur-md py-3 border-b border-[#D4A838]/20 shadow-2xl shadow-black/80"
          : "bg-[#06090E]/80 backdrop-blur-xs py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* ── Brand Logo & Studio Identifier ── */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-shrink-0 focus:outline-none group flex items-center"
            aria-label="Gift Mukhwana — Software Studio"
          >
            <GMLogo variant="full" mode="dark" size="sm" />
          </a>

          {/* Soundstage / Studio Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-800 text-[10px] font-mono text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-widest uppercase text-slate-300">REMOTE COLLABORATION // WORLDWIDE</span>
          </div>
        </div>

        {/* ── Cinematic Scene Navigation (Desktop) ── */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main scene navigation">
          {NAV_SCENES.map((scene) => (
            <button
              key={scene.section}
              onClick={() => scrollToSection(scene.section)}
              className="group flex items-baseline gap-1.5 text-xs font-mono tracking-widest text-slate-300 hover:text-[#ECC45F] transition-colors uppercase cursor-pointer"
            >
              <span className="text-[10px] text-[#D4A838]/60 group-hover:text-[#ECC45F] transition-colors">
                {scene.sceneNum}.
              </span>
              <span className="font-semibold">{scene.label}</span>
            </button>
          ))}
        </nav>

        {/* ── Studio Call To Action ── */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleStartProject}
            className="gold-btn px-5 py-2.5 rounded-md text-[11px] font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ── Mobile Trigger ── */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={handleStartProject}
            className="gold-btn px-3 py-1.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase"
          >
            CONTACT
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-300 hover:text-[#ECC45F] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close scene menu" : "Open scene menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Slate Drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="bg-[#0A0F1D] border-t border-[#D4A838]/20 px-6 pt-4 pb-6 space-y-3 font-mono">
          <div className="flex items-center gap-2 text-[10px] text-[#ECC45F] pb-2 border-b border-slate-800">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>STUDIO NAVIGATION // SCENE SELECT</span>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Mobile navigation">
            {NAV_SCENES.map((scene) => (
              <button
                key={scene.section}
                onClick={() => scrollToSection(scene.section)}
                className="text-left text-sm text-slate-200 hover:text-[#ECC45F] transition-colors py-1 flex items-center justify-between uppercase tracking-wider"
              >
                <span>{scene.label}</span>
                <span className="text-xs text-[#D4A838]/60 font-mono">SCENE {scene.sceneNum}</span>
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={handleStartProject}
              className="w-full gold-btn py-3 rounded text-xs font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <span>INITIATE PROJECT // TRANSMIT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
