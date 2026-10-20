"use client";

import React, { useEffect } from "react";
import { X, Check, Terminal, ExternalLink, ShieldCheck } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-[#0F1522] border border-white/20 rounded-xs max-w-2xl w-full overflow-hidden shadow-2xl text-slate-200 relative registration-corner"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#090D14] px-6 py-4 border-b border-white/10 flex items-center justify-between font-mono">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#FF6B35] font-bold uppercase tracking-wider">
                // {project.category}
              </span>
              <span className="px-1.5 py-0.2 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold rounded-xs">
                {project.statusBadge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xs hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto font-sans">
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase">// ARCHITECTURAL SUMMARY</div>
            <p className="text-sm text-slate-300 leading-relaxed mt-1">
              {project.description}
            </p>
          </div>

          <div className="p-4 bg-[#090D14] border border-white/10 rounded-xs font-mono text-xs">
            <div className="text-[10px] text-[#FF6B35] uppercase font-bold mb-1">// TECHNICAL IMPLEMENTATION:</div>
            <p className="text-slate-300 text-xs leading-relaxed font-sans">
              {project.technicalOverview}
            </p>
          </div>

          {/* Features */}
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">// KEY SYSTEM DELIVERABLES</div>
            <div className="space-y-1.5">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-2">
            <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">// TOOLCHAIN</div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-xs text-[11px] font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#090D14] px-6 py-3.5 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <span className="text-slate-500 text-[11px]">
            SCOPE: {project.architectureScope}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="workshop-btn-primary py-1.5 px-3 text-xs"
            >
              <span>LAUNCH LIVE APPLICATION</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
