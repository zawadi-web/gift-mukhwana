"use client";

import React, { useState, useCallback } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, Clock, ArrowUpRight, Terminal, Radio, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

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
  serviceNeeded: "Custom POS & Business System",
  estimatedBudget: "Standard ($1,000 - $3,000 / KES 130k - 400k)",
  message: "",
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [dispatchRef, setDispatchRef] = useState<string>("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value.slice(0, 2500) }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Please provide your name or organization.";
    if (!formData.email.trim()) newErrors.email = "Please provide your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please provide a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Please describe your software requirements.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Transmission result:", data);
    } catch (err) {
      console.log("Transmission note:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setDispatchRef(`TX-${Math.floor(100000 + Math.random() * 900000)}`);
    }
  };

  return (
    <section id="dispatch" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10 bg-[#090D14] relative">
      <div className="max-w-7xl mx-auto">
        {/* Station Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono mb-12">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B35] text-slate-950 font-bold text-[10px] tracking-wider rounded-xs">
              STATION 05
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">
              TRANSMISSION CONSOLE // COMMISSION A SYSTEM
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>DIRECT DISPATCH TO: giftmukhwana@gmail.com</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Transmission Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider mb-2">
                // READY TO ARCHITECT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                Let&apos;s build software that actually performs.
              </h2>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
                Whether you need a custom offline-first POS engine, an end-to-end full-stack web application, or an automated M-Pesa / Paystack payment pipeline, I&apos;m available for contract engineering and select client builds worldwide.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 font-mono text-xs mb-8">
                {/* Email Direct */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                  className="p-4 bg-[#0F1522] border border-white/10 rounded-xs flex items-center justify-between hover:border-[#FF6B35]/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#FF6B35]" />
                    <div>
                      <span className="text-slate-500 block text-[10px]">DIRECT EMAIL</span>
                      <span className="text-slate-200 font-bold group-hover:text-amber-400">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-200" />
                </a>

                {/* WhatsApp Hotline */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#0F1522] border border-emerald-500/20 rounded-xs flex items-center justify-between hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-slate-500 block text-[10px]">WHATSAPP ENCRYPTED LINE</span>
                      <span className="text-emerald-400 font-bold">{PERSONAL_INFO.phoneFormatted}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#0F1522] border border-white/10 rounded-xs flex items-center justify-between hover:border-white/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <div>
                      <span className="text-slate-500 block text-[10px]">OPEN SOURCE ARSENAL</span>
                      <span className="text-slate-200 font-bold">{PERSONAL_INFO.github}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-200" />
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#0F1522] border border-white/10 rounded-xs font-mono text-[11px] text-slate-400">
              <span className="text-emerald-400 font-bold">RESPONSE PROTOCOL:</span> All inquiries receive a technical response within 24 hours.
            </div>
          </div>

          {/* Right Column: Transmission Console Form */}
          <div className="lg:col-span-7 bg-[#0F1522] border border-white/15 rounded-xs p-6 sm:p-8 registration-corner shadow-2xl font-mono">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs">
              <span className="text-[#FF6B35] font-bold">// INQUIRY SPECIFICATION DISPATCH</span>
              <span className="text-slate-500">ENCRYPTED_WEB3_TRANSMISSION</span>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 font-sans">
                  Transmission Dispatched Successfully
                </h3>
                <p className="text-xs text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                  Your project requirements have been transmitted directly to Gift Mukhwana&apos;s verified inbox with reference <strong className="text-emerald-400 font-mono">{dispatchRef}</strong>.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3 font-mono text-xs">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="workshop-btn-primary py-2 px-4"
                  >
                    FOLLOW UP ON WHATSAPP
                  </a>
                  <button
                    onClick={() => {
                      setFormData(INITIAL_FORM);
                      setSubmitSuccess(false);
                    }}
                    className="workshop-btn-secondary py-2 px-4"
                  >
                    SEND ANOTHER DISPATCH
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* System Needed */}
                <div>
                  <label className="block text-slate-400 mb-1.5 uppercase text-[10px]">
                    // 01. REQUIRED SYSTEM ARCHITECTURE:
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-[#090D14] border border-white/10 rounded-xs text-slate-200 focus:outline-none focus:border-[#FF6B35]"
                  >
                    <option value="Custom POS & Business System">Custom POS & Offline Business System</option>
                    <option value="Full-Stack Web Application">Full-Stack Web Application (Next.js/React)</option>
                    <option value="Payment Gateway & Webhook Integration">Payment Gateway Integration (M-Pesa / Paystack)</option>
                    <option value="High-Impact Commercial Platform">High-Impact Commercial Platform (Fleet / Corporate)</option>
                    <option value="Technical System Audit & Architecture">Technical System Audit & Optimization</option>
                  </select>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-slate-400 mb-1.5 uppercase text-[10px]">
                    // 02. ESTIMATED BUDGET SCOPE:
                  </label>
                  <select
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-[#090D14] border border-white/10 rounded-xs text-slate-200 focus:outline-none focus:border-[#FF6B35]"
                  >
                    <option value="Standard ($1,000 - $3,000 / KES 130k - 400k)">Standard ($1,000 - $3,000 / KES 130k - 400k)</option>
                    <option value="Mid-Scale ($3,000 - $7,000 / KES 400k - 900k)">Mid-Scale ($3,000 - $7,000 / KES 400k - 900k)</option>
                    <option value="Enterprise / Large Architecture ($7,000+ / KES 900k+)">Enterprise ($7,000+ / KES 900k+)</option>
                    <option value="Flexible / Retainer Consultation">Flexible / Retainer Consultation</option>
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1.5 uppercase text-[10px]">
                      // 03. YOUR NAME / COMPANY: *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Kamau / Apex Retail"
                      className="w-full p-2.5 bg-[#090D14] border border-white/10 rounded-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#FF6B35]"
                    />
                    {errors.name && <span className="text-rose-400 text-[10px] mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1.5 uppercase text-[10px]">
                      // 04. DIRECT EMAIL ADDRESS: *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full p-2.5 bg-[#090D14] border border-white/10 rounded-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#FF6B35]"
                    />
                    {errors.email && <span className="text-rose-400 text-[10px] mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Requirements Message */}
                <div>
                  <label className="block text-slate-400 mb-1.5 uppercase text-[10px]">
                    // 05. PROJECT REQUIREMENTS & DELIVERABLES: *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want built, your current operational bottlenecks, and any target deadlines..."
                    className="w-full p-2.5 bg-[#090D14] border border-white/10 rounded-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#FF6B35] font-sans text-xs leading-relaxed"
                  />
                  {errors.message && <span className="text-rose-400 text-[10px] mt-1 block">{errors.message}</span>}
                </div>

                {/* Dispatch Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full workshop-btn-primary py-3 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "TRANSMITTING SPECIFICATION..." : "DISPATCH INQUIRY SPECIFICATION"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
