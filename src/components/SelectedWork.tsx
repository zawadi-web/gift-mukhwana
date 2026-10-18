"use client";

import React, { useState } from "react";
import { ArrowUpRight, FolderCode, Film, Layers, Terminal, Sparkles } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="bg-[#0A0F1D] py-24 md:py-32 text-slate-100 border-b border-[#D4A838]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Scene Header & Slate Metadata ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ECC45F] uppercase">
              <Film className="w-4 h-4 text-[#D4A838]" />
              <span>SCENE 02 // REPERTORY WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              FEATURE CASE STUDIES
            </h2>
            <p className="text-base text-slate-300 max-w-2xl font-light leading-relaxed">
              Real-world software systems, platforms, and applications architected and deployed for measurable business impact.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-xs font-mono text-slate-400 flex items-center space-x-2 bg-[#11182B] px-3.5 py-2 rounded-md border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PRODUCTION VERIFIED ARCHITECTURE</span>
          </div>
        </div>

        {/* ── Distinctive Cinematic Case Studies Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="viewfinder-bracket bg-[#11182B] border border-slate-800/80 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col group hover:border-[#D4A838]/60 hover:-translate-y-1.5"
            >
              {/* Marquee Header Frame */}
              <div className="bg-[#06090E] p-6 text-white relative flex flex-col justify-between border-b border-slate-800">
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#ECC45F]" />
                    <span className="text-[11px] font-mono text-slate-300 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#ECC45F] bg-[#11182B] border border-[#D4A838]/40 px-2.5 py-0.5 rounded">
                    {project.reelNumber || "PRODUCTION"}
                  </span>
                </div>

                <div className="py-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#ECC45F] transition-colors uppercase tracking-tight">
                    {project.name}
                  </h3>
                  {project.architectureScope && (
                    <div className="text-xs font-mono text-[#ECC45F]/90 mt-1 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#D4A838]" />
                      <span className="truncate">{project.architectureScope}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body & Narrative */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {project.logline && (
                    <div className="p-3 rounded bg-[#0A0F1D] border-l-2 border-[#ECC45F] text-xs font-mono text-slate-200">
                      {project.logline}
                    </div>
                  )}
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Trigger */}
                <div className="space-y-5 pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#0A0F1D] text-slate-300 border border-slate-800 font-medium group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Deep-Dive Inspection Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-[#18223C] hover:bg-[#D4A838] hover:text-[#06090E] text-slate-200 py-3.5 px-4 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer border border-[#D4A838]/25 group-hover:border-[#ECC45F]"
                  >
                    <span>INSPECT SYSTEM DOSSIER</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ECC45F] group-hover:text-[#06090E] transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Studio Custom Requirement Prompt ── */}
        <div className="mt-16 p-8 bg-[#11182B] rounded-xl border border-slate-800 text-center space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A838]/5 rounded-full blur-3xl pointer-events-none" />
          <span className="text-xs font-mono text-[#ECC45F] uppercase tracking-widest block">
            NEED A CUSTOM BUSINESS SYSTEM OR FULL-STACK PLATFORM?
          </span>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-light">
            I engineer software tailored specifically around your business requirements, operational bottlenecks, and expansion goals.
          </p>
          <div className="pt-2">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ECC45F] hover:text-white uppercase tracking-wider cursor-pointer transition-colors"
            >
              <span>DISCUSS YOUR SYSTEM REQUIREMENTS WITH GIFT MUKHWANA &rarr;</span>
            </button>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
