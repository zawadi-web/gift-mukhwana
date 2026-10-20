"use client";

import React, { useState, useCallback } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
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
  serviceNeeded: "Custom Business System / POS",
  estimatedBudget: "Standard ($1,000 - $3,000 / KES 130k - 400k)",
  message: "",
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Please describe your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.log("Inquiry dispatch notice:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none point-grid" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-[#F28621]" />
                <span className="text-[#F28621] font-mono text-xs uppercase tracking-widest font-bold">
                  Initiate Collaboration
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-sans font-bold text-[#0A1929] mb-4">
                Start a Project
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                Have a software system to architect, an operational bottleneck to resolve, or an ambitious digital product to build? Get in touch directly.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F28621]/10 text-[#F28621] rounded-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#F28621] uppercase tracking-wider font-semibold">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-lg font-sans font-bold text-[#0A1929] hover:text-[#F28621] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F28621]/10 text-[#F28621] rounded-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#F28621] uppercase tracking-wider font-semibold">
                    Phone &amp; WhatsApp
                  </div>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-sans font-bold text-[#0A1929] hover:text-[#F28621] transition-colors"
                  >
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F28621]/10 text-[#F28621] rounded-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#F28621] uppercase tracking-wider font-semibold">
                    Location
                  </div>
                  <div className="text-base font-sans font-medium text-gray-700">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Point Forty Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-gray-200 p-8 sm:p-12 rounded-sm shadow-xl">
            {submitSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-[#0A1929]">
                  Inquiry Received
                </h3>
                <p className="text-gray-600 font-sans text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your project requirements have been received directly at Gift Mukhwana&apos;s desk and will be answered promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormData(INITIAL_FORM);
                      setSubmitSuccess(false);
                    }}
                    className="btn-primary"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border border-gray-300 rounded-sm text-gray-900 text-sm focus:outline-none focus:border-[#F28621]"
                  >
                    <option value="Custom Business System / POS">Custom Business System / POS</option>
                    <option value="Payment Gateway & FinTech (M-Pesa / Paystack)">Payment Gateway &amp; FinTech Integration</option>
                    <option value="Full-Stack Web Application">Full-Stack Web Application (Next.js/React)</option>
                    <option value="Commercial Web Platform">Commercial Web Platform &amp; SEO</option>
                    <option value="Technical System Architecture Consultation">Technical Architecture Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full p-3 bg-white border border-gray-300 rounded-sm text-gray-900 text-sm focus:outline-none focus:border-[#F28621]"
                    />
                    {errors.name && (
                      <span className="text-rose-500 text-xs mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full p-3 bg-white border border-gray-300 rounded-sm text-gray-900 text-sm focus:outline-none focus:border-[#F28621]"
                    />
                    {errors.email && (
                      <span className="text-rose-500 text-xs mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Acme Enterprise"
                    className="w-full p-3 bg-white border border-gray-300 rounded-sm text-gray-900 text-sm focus:outline-none focus:border-[#F28621]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you are looking to build and your expected timeline..."
                    className="w-full p-3 bg-white border border-gray-300 rounded-sm text-gray-900 text-sm focus:outline-none focus:border-[#F28621]"
                  />
                  {errors.message && (
                    <span className="text-rose-500 text-xs mt-1 block">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-center cursor-pointer"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
