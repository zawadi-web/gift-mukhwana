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
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#111E4A] text-[#F7F6F2]">
      {/* Sticky Navigation */}
      <Navbar onStartProject={scrollToContact} />

      {/* Hero */}
      <Hero />

      {/* Capabilities strip */}
      <CapabilitiesStrip />

      {/* Selected work */}
      <SelectedWork />

      {/* Services */}
      <Services />

      {/* How I Work */}
      <Process />

      {/* About Gift */}
      <About />

      {/* Tech Stack */}
      <TechStack />

      {/* Brand CTA */}
      <BrandCTA />

      {/* Contact & Inquiry */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button — always visible, no phone number exposed */}
      <FloatingWhatsApp />
    </main>
  );
}
