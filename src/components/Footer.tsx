"use client";

import React from "react";
import { GMLogo } from "./GMLogo";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1929] text-white border-t border-white/10 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-start">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <GMLogo variant="full" size="md" />
            <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-sm">
              Architecting resilient digital systems, custom business software, and high-impact web applications for organizations worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#F28621] uppercase tracking-wider font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-[#F28621] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F28621] transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#F28621] transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F28621] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F28621] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-[#F28621] uppercase tracking-wider font-semibold">
              Direct Contact
            </div>
            <div className="text-sm text-gray-300">
              Email:{" "}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white hover:text-[#F28621] font-semibold underline"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="text-sm text-gray-300">
              Phone:{" "}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F28621] font-semibold"
              >
                {PERSONAL_INFO.phoneFormatted}
              </a>
            </div>
            <div className="text-xs text-gray-400 pt-2">
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Gift Mukhwana. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-300 hover:text-[#F28621] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
