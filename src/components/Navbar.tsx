"use client";

import React, { useState, useEffect } from "react";
import { GMLogo } from "./GMLogo";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1929]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <GMLogo variant="full" size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-white/90">
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-[#F28621] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("solutions")}
              className="hover:text-[#F28621] transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollTo("philosophy")}
              className="hover:text-[#F28621] transition-colors cursor-pointer"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="hover:text-[#F28621] transition-colors cursor-pointer"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-[#F28621] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onStartProject || (() => scrollTo("contact"))}
              className="bg-[#F28621] hover:bg-[#FF9A3C] text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#F28621] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#0A1929] border border-white/10 rounded-xl p-5 shadow-2xl space-y-3">
            <button
              onClick={() => scrollTo("about")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white/90 hover:text-[#F28621]"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("solutions")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white/90 hover:text-[#F28621]"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollTo("philosophy")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white/90 hover:text-[#F28621]"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white/90 hover:text-[#F28621]"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white/90 hover:text-[#F28621]"
            >
              Contact
            </button>
            <div className="pt-2">
              <button
                onClick={onStartProject || (() => scrollTo("contact"))}
                className="w-full bg-[#F28621] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider text-center"
              >
                Start a Project
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
