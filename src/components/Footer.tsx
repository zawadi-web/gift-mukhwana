"use client";

import React from "react";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A1230] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Footer top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">

          {/* Brand column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="inline-block"
              aria-label="Gift Mukhwana — Home"
            >
              <div className="bg-white px-3 py-1.5 rounded-lg border border-[#B8962E]/40 inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Gift Mukhwana"
                  className="h-9 w-auto object-contain block"
                />
              </div>
            </a>
            <p className="text-sm text-slate-300 font-light max-w-sm leading-relaxed">
              &quot;Building smart digital solutions that grow businesses.&quot;
            </p>
            <div className="pt-1 text-xs font-mono text-slate-500">
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-mono">
              {[
                { label: "Work",     id: "work" },
                { label: "Services", id: "services" },
                { label: "About",    id: "about" },
                { label: "Contact",  id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-[#B8962E] transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">DIRECT CONTACT</h4>
            <div className="space-y-2.5 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8962E]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#B8962E] transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B8962E]" />
                <span>{PERSONAL_INFO.locationShort}</span>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-[#B8962E]" />
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B8962E] transition-colors"
                >
                  {PERSONAL_INFO.github}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-500 italic">
                <span className="text-[#25D366] text-xs">●</span>
                <span>WhatsApp: use the green icon ↘</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <span>© 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 px-4 rounded bg-[#1C2B5E] text-[#B8962E] hover:bg-[#B8962E] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer border border-[#B8962E]/30"
            aria-label="Scroll to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
