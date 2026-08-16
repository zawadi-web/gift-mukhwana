"use client";

import React from "react";
import { Globe, LayoutDashboard, CreditCard, Code2, Server, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES, Service } from "@/data/portfolioData";

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-[#B8962E]" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-6 h-6 text-[#B8962E]" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-[#B8962E]" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-[#B8962E]" />;
      case "Server":
        return <Server className="w-6 h-6 text-[#B8962E]" />;
      default:
        return <Globe className="w-6 h-6 text-[#B8962E]" />;
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-white py-20 md:py-28 text-[#111827] border-b border-[#E4E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-[#E4E2DA]">
          <span className="text-xs font-mono font-bold tracking-widest text-[#B8962E] uppercase">
            CAPABILITIES & SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2B5E] uppercase tracking-tight">
            WHAT I BUILD
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-light">
            Technology should solve a business problem, not simply look impressive.
          </p>
        </div>

        {/* Services Grid (5 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className="bg-[#F7F6F2] border border-[#E4E2DA] rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#B8962E]/60 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E4E2DA]">
                  <span className="text-2xl font-mono font-extrabold text-[#B8962E] group-hover:scale-110 transition-transform">
                    {service.number}
                  </span>
                  <div className="p-3 bg-white rounded-lg border border-[#E4E2DA] group-hover:border-[#B8962E] transition-colors shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1C2B5E] group-hover:text-[#B8962E] transition-colors uppercase">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 border-t border-[#E4E2DA]/60">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs font-mono text-slate-700 space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8962E] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Action */}
              <div className="pt-6 mt-6 border-t border-[#E4E2DA]">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center text-xs font-mono font-bold text-[#1C2B5E] group-hover:text-[#B8962E] transition-colors uppercase tracking-wider cursor-pointer"
                >
                  <span>REQUEST THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          {/* Custom Business Solution Card */}
          <div className="bg-[#111E4A] text-white rounded-xl p-8 flex flex-col justify-between border border-[#B8962E]/30 shadow-lg">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#B8962E] uppercase tracking-widest block">
                TAILORED REQUIREMENT?
              </span>
              <h3 className="text-2xl font-bold text-white uppercase">
                HAVE A SPECIFIC SOFTWARE IDEA?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                If your business needs a specialized system, custom database architecture, or unique workflow automation, I can design and build a tailored solution from scratch.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToContact}
                className="gold-btn w-full py-3 rounded text-xs font-semibold uppercase tracking-widest cursor-pointer"
              >
                SCHEDULE CONSULTATION
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
