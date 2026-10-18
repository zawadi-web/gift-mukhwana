"use client";

import React from "react";
import { Navbar }             from "@/components/Navbar";
import { Hero }               from "@/components/Hero";
import { CapabilitiesStrip }  from "@/components/CapabilitiesStrip";
import { SelectedWork }       from "@/components/SelectedWork";
import { Services }           from "@/components/Services";
import { Process }            from "@/components/Process";
import { About }              from "@/components/About";
import { TechStack }          from "@/components/TechStack";
import { BrandCTA }           from "@/components/BrandCTA";
import { ContactSection }     from "@/components/ContactSection";
import { Footer }             from "@/components/Footer";
import { FloatingWhatsApp }   from "@/components/FloatingWhatsApp";

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#06090E] text-[#F8FAFC]">
      {/* Cinematic Studio Navigation */}
      <Navbar onStartProject={scrollToContact} />

      {/* Scene 01: Cold Open & Studio Telemetry */}
      <Hero />

      {/* Capabilities Strip / Reel Ticker */}
      <CapabilitiesStrip />

      {/* Scene 02: Feature Releases & Case Studies */}
      <SelectedWork />

      {/* Scene 03: Production Capabilities & Systems */}
      <Services />

      {/* Scene 04: The Production Script & Workflow */}
      <Process />

      {/* Scene 05: System Monograph (About The Maker) */}
      <About />

      {/* Technical Arsenal & Toolchain */}
      <TechStack />

      {/* Cinematic Studio CTA */}
      <BrandCTA />

      {/* Scene 06: Transmission & Inquiry */}
      <ContactSection />

      {/* Studio Colophon & Footer */}
      <Footer />

      {/* Floating Encrypted WhatsApp Dispatch */}
      <FloatingWhatsApp />
    </main>
  );
}
