"use client";

import React from "react";
import { FOUNDATION_METRICS, PERSONAL_INFO } from "@/data/portfolioData";
import { TrendingUp, Globe, Shield, Zap } from "lucide-react";

export const About: React.FC = () => {
  const metricIcons = [TrendingUp, Globe, Shield, Zap];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-white text-gray-900 overflow-hidden">
      {/* Subtle background grid pattern like Point Forty */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none point-grid" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-[#F28621]" />
            <span className="text-[#F28621] font-mono text-xs uppercase tracking-widest font-bold">
              Our Foundation
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-[#0A1929] mb-4">
            Building for Long-Term Impact
          </h2>
          <p className="text-gray-600 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
            A software practice dedicated to bringing institutional-grade reliability, strict engineering standards, and high performance to digital products.
          </p>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {FOUNDATION_METRICS.map((metric, idx) => {
            const Icon = metricIcons[idx] || Shield;
            return (
              <div
                key={metric.label}
                className="border border-gray-200 p-8 bg-white hover:border-[#F28621] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="mb-6 inline-flex p-3 bg-[#F28621]/10 text-[#F28621] group-hover:bg-[#F28621] group-hover:text-white transition-colors duration-300 rounded-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-sans font-bold text-[#16598D] mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-mono text-[#F28621] uppercase tracking-wider mb-2 font-semibold">
                  {metric.label}
                </div>
                <p className="text-gray-600 font-sans text-xs leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Institutional Profile Two-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 border-t border-gray-200">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[#F28621] font-mono text-xs uppercase tracking-widest font-bold">
                // About The Builder
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-sans font-bold text-[#0A1929] leading-tight">
              Gift Mukhwana
            </h3>
            <div className="space-y-4 text-gray-700 font-sans text-base leading-relaxed border-l-2 border-[#F28621] pl-6">
              <p>
                Operating with disciplined engineering principles, Gift Mukhwana designs and deploys custom software systems for commercial enterprises, high-growth startups, and institutions worldwide.
              </p>
              <p>
                Rather than deploying bloated templates or unverified frameworks, our focus is direct operational value: eliminating manual bottlenecks through offline-ready point-of-sale applications, hardened payment gateways, and resilient web infrastructure.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8 space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#F28621] uppercase tracking-widest font-semibold">
                Operating Model
              </div>
              <div className="text-xl font-sans text-[#0A1929] font-bold">
                Location-Independent · Global Remote
              </div>
              <p className="text-gray-500 text-xs font-sans">
                Active worldwide collaboration with seamless cross-timezone communication.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#F28621] uppercase tracking-widest font-semibold">
                Core Disciplines
              </div>
              <div className="text-xl font-sans text-[#0A1929] font-bold">
                Custom Systems, POS, FinTech &amp; Full-Stack
              </div>
              <p className="text-gray-500 text-xs font-sans">
                Next.js, React 19, TypeScript, PostgreSQL, Prisma, M-Pesa &amp; Paystack.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#F28621] uppercase tracking-widest font-semibold">
                Primary Focus
              </div>
              <div className="text-xl font-sans text-[#0A1929] font-bold">
                Measurable Operational Uptime &amp; Speed
              </div>
              <p className="text-gray-500 text-xs font-sans">
                Defensive data schemas and fast, dependable user workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
