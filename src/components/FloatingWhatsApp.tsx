"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={PERSONAL_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Hotline to Gift Mukhwana"
      className="floating-hotline font-mono text-xs text-slate-100 group"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-active" />
      <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline font-bold">WHATSAPP HOTLINE</span>
    </a>
  );
};
