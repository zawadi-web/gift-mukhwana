"use client";

import React from "react";
import { Mail, Globe2, ArrowUp, Film } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GMLogo } from "./GMLogo";

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#06090E] text-slate-400 border-t border-slate-800 pt-16 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">

          {/* Brand & Studio Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="inline-block"
              aria-label="Gift Mukhwana — Home"
            >
              <GMLogo variant="full" mode="dark" size="md" />
            </a>
            <p className="text-xs text-slate-300 font-light max-w-sm leading-relaxed font-sans">
              &quot;Engineering high-impact digital systems, web applications, and scalable business software that travels anywhere.&quot;
            </p>
            <div className="pt-1 text-[11px] text-[#ECC45F] flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Scene Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">SCENE JUMP</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "01. Work & Releases",     id: "work" },
                { label: "02. Services & Systems",  id: "services" },
                { label: "03. Production Workflow", id: "process" },
                { label: "04. System Monograph",    id: "about" },
                { label: "05. Transmit Inquiry",    id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-[#ECC45F] transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">TRANSMISSION CHANNELS</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ECC45F]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#ECC45F] transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#ECC45F]" />
                <span>{PERSONAL_INFO.locationShort}</span>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-[#ECC45F]" />
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ECC45F] transition-colors"
                >
                  {PERSONAL_INFO.github}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 italic font-sans text-[11px]">
                <span className="text-[#25D366] text-xs">●</span>
                <span>WhatsApp: Instant dispatch enabled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Slate */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Film className="w-3.5 h-3.5 text-[#ECC45F]" />
            <span>© 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 px-4 rounded bg-[#11182B] text-[#ECC45F] hover:bg-[#D4A838] hover:text-[#06090E] transition-colors flex items-center gap-1.5 cursor-pointer border border-[#D4A838]/30 font-bold"
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
