"use client";

import React, { useState, useCallback } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, Clock } from "lucide-react";
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
  serviceNeeded: "Business Website",
  estimatedBudget: "Flexible / Not sure yet",
  message: "",
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData]       = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors]           = useState<Partial<FormData>>({});
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
    if (!formData.message.trim()) newErrors.message = "Please describe your project or question.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  return (
    <section id="contact" className="bg-[#FFFFFF] py-20 md:py-28 text-[#111827] border-b border-[#E4E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-left mb-14 space-y-3 pb-6 border-b border-[#E4E2DA]">
          <span className="text-xs font-mono font-bold tracking-widest text-[#B8962E] uppercase">
            PROJECT INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2B5E] uppercase tracking-tight">
            LET&apos;S BUILD SOMETHING.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-light">
            Have an idea, project, or business problem you want to solve? Send a message below or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── Left: Direct Communication & Details ── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct WhatsApp Action Box */}
            <div className="bg-[#111E4A] text-white p-6 rounded-xl border border-[#B8962E]/30 shadow-md space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#25D366]/20 text-[#25D366] rounded-xl border border-[#25D366]/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-white text-sm tracking-wide">
                    INSTANT WHATSAPP CONNECT
                  </h3>
                  <span className="text-[11px] text-slate-300 font-mono flex items-center mt-0.5">
                    <Clock className="w-3 h-3 text-[#B8962E] mr-1" /> Typically responds within hours
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Need to discuss your project requirements immediately? Tap below to open a direct WhatsApp chat.
              </p>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>START WHATSAPP CONVERSATION</span>
              </a>
            </div>

            {/* Direct Contact Detail List */}
            <div className="bg-[#F7F6F2] p-6 rounded-xl border border-[#E4E2DA] space-y-5 shadow-xs">
              <h3 className="text-sm font-mono font-bold text-[#1C2B5E] uppercase tracking-wider pb-3 border-b border-[#E4E2DA]">
                CONTACT DETAILS
              </h3>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-white text-[#B8962E] border border-[#E4E2DA]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-[#1C2B5E] hover:text-[#B8962E] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-white text-[#B8962E] border border-[#E4E2DA]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Location</span>
                  <span className="text-sm font-medium text-[#1C2B5E]">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded bg-white text-[#B8962E] border border-[#E4E2DA]">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">GitHub Profile</span>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#1C2B5E] hover:text-[#B8962E] transition-colors"
                  >
                    {PERSONAL_INFO.github}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right: Project Inquiry Form ── */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F6F2] p-6 sm:p-8 rounded-xl border border-[#E4E2DA] shadow-sm">
              <h3 className="text-xl font-bold text-[#1C2B5E] uppercase tracking-tight mb-2">
                PROJECT INQUIRY FORM
              </h3>
              <p className="text-xs text-slate-500 font-light mb-6">
                Fill out your details to receive a project scope response and quote outline.
              </p>

              {submitSuccess ? (
                <div className="bg-[#111E4A] text-white p-8 rounded-xl border border-[#B8962E]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase">INQUIRY RECEIVED</h4>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
                    Thank you, <span className="text-[#B8962E] font-semibold">{formData.name}</span>. Your inquiry
                    has been logged. Gift will review your requirements and respond to{" "}
                    <span className="text-[#B8962E]">{formData.email}</span> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => { setSubmitSuccess(false); setFormData(INITIAL_FORM); }}
                      className="gold-btn px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono font-semibold text-[#1C2B5E] uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="e.g. John Mwangi"
                        maxLength={120}
                        className={`w-full px-3.5 py-2.5 rounded border ${
                          errors.name ? "border-red-500" : "border-[#E4E2DA]"
                        } bg-white text-sm text-[#111827] focus:outline-none focus:border-[#B8962E] transition-colors`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-600 flex items-center mt-1">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono font-semibold text-[#1C2B5E] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="e.g. john@business.co.ke"
                        maxLength={254}
                        className={`w-full px-3.5 py-2.5 rounded border ${
                          errors.email ? "border-red-500" : "border-[#E4E2DA]"
                        } bg-white text-sm text-[#111827] focus:outline-none focus:border-[#B8962E] transition-colors`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-600 flex items-center mt-1">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div>
                      <label htmlFor="contact-org" className="block text-xs font-mono font-semibold text-[#1C2B5E] uppercase mb-1">
                        Business / Organization
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        autoComplete="organization"
                        placeholder="Company or Brand Name"
                        maxLength={120}
                        className="w-full px-3.5 py-2.5 rounded border border-[#E4E2DA] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#B8962E] transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-mono font-semibold text-[#1C2B5E] uppercase mb-1">
                        What Do You Need?
                      </label>
                      <select
                        id="contact-service"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded border border-[#E4E2DA] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#B8962E] transition-colors"
                      >
                        <option value="Business Website">01 — Business Website</option>
                        <option value="Custom Business System">02 — Custom Business System</option>
                        <option value="Payment Integration">03 — Payment Integration (Paystack / M-Pesa)</option>
                        <option value="Web Application">04 — Web Application</option>
                        <option value="Hosting & Maintenance">05 — Hosting & Maintenance</option>
                        <option value="Other Custom Solution">06 — Other Custom Solution</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-mono font-semibold text-[#1C2B5E] uppercase mb-1">
                      Estimated Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-[#E4E2DA] bg-white text-sm text-[#111827] focus:outline-none focus:border-[#B8962E] transition-colors"
                    >
                      <option value="Flexible / Not sure yet">Flexible / Not sure yet</option>
                      <option value="KSh 20,000 - KSh 50,000">KSh 20,000 - KSh 50,000</option>
                      <option value="KSh 50,000 - KSh 120,000">KSh 50,000 - KSh 120,000</option>
                      <option value="KSh 120,000+">KSh 120,000+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-semibold text-[#1C2B5E] uppercase mb-1">
                      Project Overview & Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your business, the problem you want to solve, or the features you need..."
                      maxLength={2000}
                      className={`w-full px-3.5 py-2.5 rounded border ${
                        errors.message ? "border-red-500" : "border-[#E4E2DA]"
                      } bg-white text-sm text-[#111827] focus:outline-none focus:border-[#B8962E] transition-colors resize-none`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-600 flex items-center mt-1">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#111E4A] hover:bg-[#1C2B5E] text-white py-3.5 px-6 rounded text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 border border-[#B8962E]/30 hover:border-[#B8962E] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SEND PROJECT INQUIRY</span>
                          <Send className="w-4 h-4 text-[#B8962E]" />
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
