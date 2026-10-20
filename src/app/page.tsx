"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SelectedWork } from "@/components/SelectedWork";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#0A1929] text-white">
      {/* ── Fixed Clean Navigation ── */}
      <Navbar onStartProject={scrollToContact} />

      {/* ── Hero: Confident Large Typography & Value Proposition ── */}
      <Hero />

      {/* ── Foundation & Overview: Clean Metrics & Institutional Profile ── */}
      <About />

      {/* ── Featured Systems: Clean Solutions (Genesis POS, Rada, Express Ride, ESKA) ── */}
      <SelectedWork />

      {/* ── Philosophy: 3 Enduring Principles ── */}
      <Process />

      {/* ── Core Capabilities: 4 Engineering Disciplines ── */}
      <Services />

      {/* ── Contact: Initiate Collaboration & Start a Project ── */}
      <ContactSection />

      {/* ── Institutional Footer ── */}
      <Footer />

      {/* ── WhatsApp Hotline ── */}
      <FloatingWhatsApp />
    </main>
  );
}
