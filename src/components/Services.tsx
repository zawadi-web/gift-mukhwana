"use client";

import React from "react";
import { Globe, LayoutDashboard, CreditCard, Code2, Server, CheckCircle2, ArrowRight, Layers, Sparkles } from "lucide-react";
import { SERVICES, Service } from "@/data/portfolioData";

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-[#ECC45F]" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-6 h-6 text-[#ECC45F]" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-[#ECC45F]" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-[#ECC45F]" />;
      case "Server":
        return <Server className="w-6 h-6 text-[#ECC45F]" />;
      default:
        return <Globe className="w-6 h-6 text-[#ECC45F]" />;
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-[#070A12] py-24 md:py-32 text-slate-100 border-b border-[#D4A838]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Scene Header ── */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ECC45F] uppercase">
            <Layers className="w-4 h-4 text-[#D4A838]" />
            <span>SCENE 03 // PRODUCTION CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            SYSTEMS &amp; SERVICES I ENGINEER
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            Software built to eliminate operational bottlenecks, capture customers, and deliver dependable performance anywhere.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className="viewfinder-bracket bg-[#0D1322] border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:border-[#D4A838]/60 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                {/* Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-2xl font-mono font-black text-[#ECC45F] group-hover:scale-105 transition-transform">
                    {service.number}
                  </span>
                  <div className="p-3 bg-[#11182B] rounded-lg border border-slate-700/80 group-hover:border-[#D4A838] transition-colors shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#ECC45F] transition-colors uppercase tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs font-mono text-slate-300 space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ECC45F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Action */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center text-xs font-mono font-bold text-[#ECC45F] hover:text-white transition-colors uppercase tracking-wider cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>REQUEST SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Tailored Requirement Studio Slate */}
          <div className="viewfinder-bracket bg-gradient-to-br from-[#11182B] to-[#18223C] text-white rounded-xl p-8 flex flex-col justify-between border border-[#D4A838]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A838]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono text-[#ECC45F] uppercase tracking-widest block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ECC45F]" />
                BESPOKE SYSTEM REQUIREMENT
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                HAVE A SPECIFIC SYSTEM ARCHITECTURE IN MIND?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                If your organization requires a specialized administrative tool, automated multi-step database pipeline, or unique customer-facing portal, let&apos;s build it from the foundation up.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={scrollToContact}
                className="gold-btn w-full py-3.5 rounded text-xs font-mono font-bold uppercase tracking-widest cursor-pointer shadow-md"
              >
                SCHEDULE ARCHITECTURAL AUDIT
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
