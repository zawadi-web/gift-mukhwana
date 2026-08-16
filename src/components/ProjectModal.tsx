"use client";

import React from "react";
import { X, Check, Cpu } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#111E4A] border border-[#B8962E]/40 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl text-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A1230] px-6 py-4 border-b border-slate-700/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#B8962E] uppercase tracking-widest block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white uppercase">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Visual Showcase Box */}
          <div className="bg-[#1C2B5E] border border-slate-700/60 rounded-lg p-6 relative overflow-hidden">
            <div className="flex items-center space-x-2 pb-4 border-b border-slate-700/60 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-xs font-mono text-slate-400 ml-2">{project.id}.production.app</span>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-200 font-sans">
                {project.description}
              </div>

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#111E4A] text-[#B8962E] border border-[#B8962E]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Deliverables & Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-[#B8962E] tracking-wider flex items-center">
                <Cpu className="w-4 h-4 mr-1.5" /> Core Implementation & Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 bg-[#1C2B5E]/60 p-2.5 rounded border border-slate-700/60">
                    <Check className="w-4 h-4 text-[#B8962E] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Business Impact Note */}
          <div className="bg-[#0A1230] p-4 rounded-lg border border-[#B8962E]/20 text-xs text-slate-300 space-y-1">
            <span className="font-semibold text-white block">Engineering Approach</span>
            <p className="text-slate-400 leading-relaxed">
              Designed with scalability, high-speed page loads, responsive layout, and robust data integrity tailored for business operations.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-[#0A1230] px-6 py-4 border-t border-slate-700/60 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Status: Deployed & Active</span>
          <button
            onClick={onClose}
            className="gold-btn px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
