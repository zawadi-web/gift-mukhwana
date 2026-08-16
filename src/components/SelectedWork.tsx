"use client";

import React, { useState } from "react";
import { ArrowUpRight, FolderCode, ShieldCheck } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-[#F7F6F2] py-20 md:py-28 text-[#111827] border-b border-[#E4E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E2DA]">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#B8962E] uppercase">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2B5E] uppercase tracking-tight">
              SELECTED WORK
            </h2>
            <p className="text-base text-slate-600 max-w-xl font-light">
              Real projects I&apos;ve designed, developed and deployed for businesses and users.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-500 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#B8962E]" />
            <span>Extensible Architecture & Clean Code</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E4E2DA] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image / Graphical Card Header */}
              <div className="bg-[#111E4A] p-6 text-white relative min-h-[180px] flex flex-col justify-between border-b border-slate-700/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#B8962E]"></span>
                    <span className="text-[11px] font-mono text-slate-300 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#B8962E] border border-[#B8962E]/30 px-2 py-0.5 rounded">
                    PRODUCTION
                  </span>
                </div>

                <div className="py-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#B8962E] transition-colors uppercase">
                    {project.name}
                  </h3>
                </div>

                {/* Card Code Visual Bar */}
                <div className="flex items-center space-x-1.5 pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400">
                  <FolderCode className="w-3.5 h-3.5 text-[#B8962E]" />
                  <span className="truncate">
                    {project.technologies.join(" • ")}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-700 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#F7F6F2] text-[#1C2B5E] border border-[#E4E2DA] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-[#111E4A] hover:bg-[#1C2B5E] text-white py-3 px-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 group-hover:border-[#B8962E] border border-transparent transition-all cursor-pointer"
                    >
                      <span>VIEW PROJECT OVERVIEW</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B8962E]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Expansion Note */}
        <div className="mt-12 text-center p-6 bg-white rounded-xl border border-[#E4E2DA]">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Need a similar solution built for your organization?
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 text-sm font-semibold text-[#B8962E] hover:underline uppercase tracking-wider"
          >
            DISCUSS YOUR CUSTOM PROJECT &rarr;
          </a>
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
