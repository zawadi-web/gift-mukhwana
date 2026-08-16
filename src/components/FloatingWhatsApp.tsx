"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={PERSONAL_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with Gift Mukhwana on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.738 5.47 2.027 7.776L0 32l8.436-2.013A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.22 22.376c-.342.96-1.695 1.756-2.77 1.988-.736.158-1.697.285-4.93-1.06-4.14-1.693-6.807-5.895-7.012-6.166-.198-.27-1.672-2.222-1.672-4.239 0-2.017 1.056-3.002 1.43-3.41.376-.41.822-.512 1.096-.512.274 0 .548.003.787.013.252.012.59-.095.924.707.342.818 1.16 2.822 1.262 3.028.103.206.17.448.034.718-.137.27-.205.437-.41.673-.204.236-.43.527-.613.707-.204.2-.416.416-.18.818.237.401 1.053 1.738 2.26 2.816 1.552 1.38 2.86 1.807 3.27 2.011.41.205.65.172.889-.102.24-.274 1.026-1.197 1.3-1.607.274-.41.548-.342.924-.205.377.138 2.394 1.129 2.803 1.334.41.205.684.308.787.479.103.17.103.987-.239 1.947z"/>
      </svg>

      {/* Tooltip on hover */}
      {hovered && (
        <span
          style={{
            position: "absolute",
            right: "68px",
            whiteSpace: "nowrap",
            background: "#111E4A",
            color: "#F7F6F2",
            fontSize: "12px",
            fontWeight: 600,
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid rgba(184,150,46,0.3)",
            pointerEvents: "none",
            letterSpacing: "0.04em",
          }}
        >
          Chat on WhatsApp
        </span>
      )}
    </a>
  );
};
