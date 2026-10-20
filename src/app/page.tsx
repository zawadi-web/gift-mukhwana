"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById("dispatch");
    if (el) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#090D14] text-[#F1F5F9] selection:bg-[#FF6B35] selection:text-[#090D14]">
      {/* ── Workbench Header & Telemetry Bar ── */}
      <Navbar onStartProject={scrollToContact} />

      {/* ── Station 01: Draughtsman's Desk & Builder Thesis ── */}
      <Hero />

      {/* ── Station 02: Project Artifacts (Interactive Showcases) ── */}
      <SelectedWork />

      {/* ── Station 03: Engineering Ledger & Architectural Disciplines ── */}
      <Services />

      {/* ── The Production Pipeline (Dissect, Architect, Forge, Commission) ── */}
      <Process />

      {/* ── Station 04: Builder Dossier (Profile & Engineering Tenets) ── */}
      <About />

      {/* ── The Toolchain & Production Arsenal ── */}
      <TechStack />

      {/* ── Station 05: Transmission Console (Inquiry Dispatch) ── */}
      <ContactSection />

      {/* ── Workshop Colophon & Footer ── */}
      <Footer />

      {/* ── Floating WhatsApp Hotline ── */}
      <FloatingWhatsApp />
    </main>
  );
}
