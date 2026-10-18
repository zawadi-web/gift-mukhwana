"use client";

import React, { useEffect } from "react";
import { X, Check, Cpu, Terminal, Layers, Globe } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="viewfinder-bracket bg-[#0A0F1D] border border-[#D4A838]/40 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl text-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Slate Header */}
        <div className="bg-[#06090E] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#ECC45F] uppercase tracking-widest">
                {project.reelNumber || "FEATURE RELEASE"} // {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-0.5">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">

          {/* Architectural Overview Box */}
          <div className="bg-[#11182B] border border-slate-800 rounded-lg p-5 relative space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-slate-400 ml-2">{project.id}.production.sys</span>
              </div>
              <span className="text-[#ECC45F] font-semibold">DEPLOYED</span>
            </div>

            {project.logline && (
              <p className="text-xs font-mono text-[#ECC45F] italic">
                &quot;{project.logline}&quot;
              </p>
            )}

            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="pt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#0A0F1D] text-[#ECC45F] border border-[#D4A838]/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-[#ECC45F] tracking-wider flex items-center">
                <Cpu className="w-4 h-4 mr-1.5 text-[#D4A838]" /> Core Deliverables &amp; Architectural Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 bg-[#11182B] p-3 rounded border border-slate-800">
                    <Check className="w-4 h-4 text-[#ECC45F] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Engineering Approach */}
          <div className="bg-[#06090E] p-4 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
            <span className="font-semibold text-white block">Engineering Approach</span>
            <p className="text-slate-400 leading-relaxed">
              Designed with strict type safety, modular data handling, fast loading speeds, and robust error resilience for production business use.
            </p>
          </div>
        </div>

        {/* Modal Slate Footer */}
        <div className="bg-[#06090E] px-6 py-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">STATUS // PRODUCTION READY</span>
          <button
            onClick={onClose}
            className="gold-btn px-5 py-2 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};
