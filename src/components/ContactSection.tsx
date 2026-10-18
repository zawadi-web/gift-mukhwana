"use client";

import React, { useState, useCallback } from "react";
import { Mail, Globe2, Send, CheckCircle2, AlertCircle, MessageSquare, Clock, ExternalLink, Terminal, Radio } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { PERSONAL_INFO } from "@/data/portfolioData";

// ── Simple input sanitizer (strip HTML tags to prevent XSS in display)
const sanitizeText = (value: string): string =>
  value.replace(/<[^>]*>/g, "").slice(0, 2000);

interface FormData {
  name: string;
  email: string;
  organization: string;
  serviceNeeded: string;
  estimatedBudget: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  organization: "",
  serviceNeeded: "Full-Stack Web Application",
  estimatedBudget: "Flexible / To Be Discussed",
  message: "",
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData]         = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors]             = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const clean = sanitizeText(value);
      setFormData((prev) => ({ ...prev, [name]: clean }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim())    newErrors.name    = "Please enter your name.";
    if (!formData.email.trim())   newErrors.email   = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  newErrors.email   = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Please describe your project or system requirements.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // 1. Post to internal API route
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.log("Inquiry submit notice:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }
  };

  // Helper to generate a pre-filled mailto URL for direct email client opening
  const getMailtoUrl = () => {
    const subject = `New Project Inquiry from ${formData.name} (${formData.serviceNeeded})`;
    const body = `Hi Gift,

I would like to discuss a software project with you:

- Name: ${formData.name}
- Email: ${formData.email}
- Business / Organization: ${formData.organization || "N/A"}
- Service Needed: ${formData.serviceNeeded}
- Estimated Budget: ${formData.estimatedBudget}

Project Overview & Requirements:
${formData.message}`;
    return `mailto:giftmukhwana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Helper to generate a pre-filled WhatsApp message URL
  const getWhatsAppInquiryUrl = () => {
    const text = `Hi Gift, I submitted an inquiry on your portfolio website:
- Name: ${formData.name}
- Email: ${formData.email}
- Organization: ${formData.organization || "N/A"}
- Service Needed: ${formData.serviceNeeded}
- Budget: ${formData.estimatedBudget}

Message:
${formData.message}`;
    return `https://wa.me/254769047490?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="bg-[#0A0F1D] py-24 md:py-32 text-slate-100 border-b border-[#D4A838]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Scene Header ── */}
        <div className="text-left mb-16 space-y-3 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ECC45F] uppercase">
            <Radio className="w-4 h-4 text-[#D4A838] animate-pulse" />
            <span>SCENE 06 // TRANSMISSION &amp; INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            INITIATE COLLABORATION
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            Available for remote contracts, full-stack builds, and bespoke software projects. Send your specifications directly to Gift Mukhwana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Left Column: Direct Contact Telemetry ── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Availability Box */}
            <div className="viewfinder-bracket bg-[#11182B] p-6 rounded-xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#ECC45F] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>COMMUNICATION STATUS // ACTIVE</span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                LET&apos;S DISCUSS YOUR PROJECT
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Whether you need a full-stack platform, custom business system, or technical consultation, I respond promptly with architectural insights and clear milestones.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#ECC45F]" />
                <span>Typical response window: Under 24 hours</span>
              </div>
            </div>

            {/* Instant WhatsApp Priority Route */}
            <div className="bg-[#11182B] p-6 rounded-xl border border-emerald-500/30 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  FAST TRANSMISSION CHANNEL
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase">DIRECT WHATSAPP INQUIRY</h4>
              <p className="text-xs text-slate-300 font-light">
                Prefer immediate messaging? Open an encrypted chat directly with Gift Mukhwana:
              </p>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono font-bold py-3.5 px-4 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>OPEN WHATSAPP CHAT</span>
              </a>
            </div>

            {/* Direct Contact Detail List */}
            <div className="viewfinder-bracket bg-[#11182B] p-6 rounded-xl border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-xs font-mono font-bold text-[#ECC45F] uppercase tracking-widest pb-3 border-b border-slate-800">
                DIRECT CHANNELS &amp; REPOSITORY
              </h3>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-[#06090E] text-[#ECC45F] border border-slate-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Email Transmission</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-[#ECC45F] transition-colors break-all font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location & Remote Availability */}
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-[#06090E] text-[#ECC45F] border border-slate-800">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Location Independence</span>
                  <span className="text-sm font-medium text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-[#06090E] text-[#ECC45F] border border-slate-800">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Code Verification</span>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#ECC45F] transition-colors font-mono"
                  >
                    {PERSONAL_INFO.github}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right Column: Project Inquiry Form ── */}
          <div className="lg:col-span-7">
            <div className="viewfinder-bracket bg-[#11182B] p-6 sm:p-8 rounded-xl border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                PROJECT INQUIRY SPECIFICATION
              </h3>
              <p className="text-xs text-slate-400 font-light mb-6">
                Submit your project requirements directly to Gift Mukhwana (<span className="font-semibold text-[#ECC45F] font-mono">giftmukhwana@gmail.com</span>).
              </p>

              {submitSuccess ? (
                <div className="bg-[#06090E] text-white p-8 rounded-xl border border-[#D4A838]/40 text-center space-y-5 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-white uppercase tracking-wider">INQUIRY PREPARED &amp; LOGGED</h4>
                    <p className="text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
                      Thank you, <span className="text-[#ECC45F] font-semibold">{formData.name}</span>. Your project parameters have been received.
                    </p>
                  </div>

                  {/* Guaranteed Direct Delivery Triggers */}
                  <div className="pt-4 border-t border-slate-800 max-w-md mx-auto space-y-3">
                    <span className="text-[11px] text-slate-400 font-mono block">
                      Choose an instant verification route:
                    </span>

                    {/* Direct Email Client Trigger */}
                    <a
                      href={getMailtoUrl()}
                      className="w-full gold-btn py-3 px-4 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>OPEN EMAIL APP TO SEND NOW</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Instant WhatsApp Option */}
                    <a
                      href={getWhatsAppInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>SEND SPECIFICATIONS VIA WHATSAPP</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                      Your Full Name <span className="text-[#ECC45F]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#06090E] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ECC45F] transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                        Email Address <span className="text-[#ECC45F]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@organization.com"
                        className="w-full bg-[#06090E] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ECC45F] transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                        Organization / Business
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company or venture name"
                        className="w-full bg-[#06090E] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ECC45F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                        Service Category
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full bg-[#06090E] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ECC45F] transition-colors"
                      >
                        <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                        <option value="Custom Business System">Custom Business System</option>
                        <option value="Payment Gateway Integration">Payment Gateway Integration</option>
                        <option value="Corporate / Brand Website">Corporate / Brand Website</option>
                        <option value="System Architecture / Audit">System Architecture / Audit</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="estimatedBudget" className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                        Budget Scope
                      </label>
                      <select
                        id="estimatedBudget"
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full bg-[#06090E] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ECC45F] transition-colors"
                      >
                        <option value="Flexible / To Be Discussed">Flexible / To Be Discussed</option>
                        <option value="Standard Production Build">Standard Production Build</option>
                        <option value="Enterprise / Comprehensive System">Enterprise / Comprehensive System</option>
                        <option value="Long-term Retainer / Ongoing">Long-term Retainer / Ongoing</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-300 mb-1">
                      Project Description &amp; Objectives <span className="text-[#ECC45F]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline what problem you need solved, your desired timeline, and any key feature requirements..."
                      className="w-full bg-[#06090E] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ECC45F] transition-colors"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="gold-btn w-full py-4 rounded-lg font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 cursor-pointer shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SUBMIT PROJECT SPECIFICATION</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
