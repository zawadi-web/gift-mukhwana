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
      className="wa-floating-btn"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-[#F28621] animate-pulse" />
      <MessageSquare className="w-5 h-5 text-[#F28621]" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};
