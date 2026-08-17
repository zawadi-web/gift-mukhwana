"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GMLogo } from "./GMLogo";

interface NavbarProps {
  onStartProject?: () => void;
}

const NAV_LINKS = [
  { label: "Work",     section: "work" },
  { label: "Services", section: "services" },
  { label: "About",    section: "about" },
  { label: "Contact",  section: "contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled]       = useState(false);
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
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
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
          ? "bg-[#0C1A3A]/98 backdrop-blur-md py-3 border-b border-[#B8962E]/25 shadow-xl shadow-black/30"
          : "bg-[#0C1A3A] py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* ── Extracted Vector Logo (Transparent, Large, High Contrast) ── */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex-shrink-0 focus:outline-none group flex items-center"
          aria-label="Gift Mukhwana — Home"
        >
          <GMLogo variant="full" mode="dark" size="md" />
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className="text-sm font-medium text-slate-200 hover:text-[#B8962E] transition-colors uppercase tracking-wider cursor-pointer font-sans"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block flex-shrink-0">
          <button
            onClick={handleStartProject}
            className="gold-btn px-6 py-3 rounded text-xs tracking-widest uppercase font-bold flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── Mobile Controls ── */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={handleStartProject}
            className="gold-btn px-3.5 py-2 rounded text-[11px] tracking-widest uppercase font-bold"
          >
            START
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-300 hover:text-[#B8962E] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="bg-[#0C1A3A] border-t border-[#B8962E]/20 px-6 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-left text-base font-medium text-slate-200 hover:text-[#B8962E] transition-colors py-1 uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={handleStartProject}
              className="w-full gold-btn py-3.5 rounded text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
