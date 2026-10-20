"use client";

import React, { useState } from "react";
import { PROJECTS, Project, PERSONAL_INFO } from "@/data/portfolioData";
import { 
  ExternalLink, 
  Terminal, 
  Check, 
  Plus, 
  Minus, 
  Receipt, 
  Heart, 
  Car, 
  Compass, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Smartphone, 
  Flame, 
  MessageCircle,
  Clock,
  Printer
} from "lucide-react";

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // ── 1. Genesis Minimart POS Interactive State ──
  const posProducts = [
    { id: 1, name: "Unga Maize Flour 2kg", price: 190, sku: "6161100" },
    { id: 2, name: "Broadways Bread 400g", price: 65, sku: "6162200" },
    { id: 3, name: "Brookside Fresh Milk 500ml", price: 70, sku: "6163300" },
    { id: 4, name: "Safari Pure Tea 250g", price: 115, sku: "6164400" },
  ];
  const [posCart, setPosCart] = useState<{ [id: number]: number }>({ 1: 1, 3: 2 });
  const [posPaid, setPosPaid] = useState<boolean>(false);

  const addPosItem = (id: number) => {
    setPosCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setPosPaid(false);
  };
  const removePosItem = (id: number) => {
    setPosCart((prev) => {
      const count = (prev[id] || 0) - 1;
      if (count <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: count };
    });
    setPosPaid(false);
  };

  const posSubtotal = Object.entries(posCart).reduce((sum, [id, qty]) => {
    const p = posProducts.find((item) => item.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);
  const posVat = Math.round(posSubtotal * 0.16);

  // ── 2. Rada Dating App Interactive State ──
  const [radaIntention, setRadaIntention] = useState<string>("Serious Relationship");
  const radaProfiles = [
    {
      name: "Brenda W.",
      age: 27,
      location: "Kilimani, Nairobi",
      intent: "Serious Relationship",
      bio: "Software product manager. Love coffee, weekend hikes at Karura, and deep honest conversations.",
      interests: ["Tech", "Hiking", "Books", "Art"]
    },
    {
      name: "Kevin M.",
      age: 29,
      location: "Westlands, Nairobi",
      intent: "Marriage",
      bio: "Civil engineer. Building a stable life and looking for a genuine life partner who values family.",
      interests: ["Architecture", "Music", "Roadtrips"]
    },
    {
      name: "Amina K.",
      age: 25,
      location: "Lavington, Nairobi",
      intent: "Intentional Dating",
      bio: "Visual designer. Looking to connect with ambitious creatives without casual games.",
      interests: ["Design", "Culinary", "Travel"]
    },
    {
      name: "Brian O.",
      age: 28,
      location: "Karen, Nairobi",
      intent: "Networking",
      bio: "FinTech founder. Looking to build high-value connections in the East African tech ecosystem.",
      interests: ["FinTech", "Startups", "Chess"]
    }
  ];
  const activeRadaProfile = radaProfiles.find(p => p.intent === radaIntention) || radaProfiles[0];

  // ── 3. Express Ride & Safari Interactive State ──
  const [safariVehicle, setSafariVehicle] = useState<string>("Toyota Land Cruiser V8 (4x4)");
  const [safariRoute, setSafariRoute] = useState<string>("Moi Airport (MBA) → Diani Beach");
  
  const fleetInfo: Record<string, { rate: string; seats: string; terrain: string }> = {
    "Toyota Land Cruiser V8 (4x4)": { rate: "KES 14,000 / day", seats: "7 Passengers", terrain: "Rugged Off-Road & Safari" },
    "Toyota Prado TX (Executive)": { rate: "KES 10,000 / day", seats: "5 Passengers", terrain: "VIP City & Coastal Cruising" },
    "Custom VIP Safari Tour Van": { rate: "KES 9,500 / day", seats: "8 Passengers", terrain: "National Park Game Drives" }
  };

  return (
    <section id="artifacts" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10 bg-[#090D14] relative">
      <div className="max-w-7xl mx-auto">
        {/* Station Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono mb-12">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B35] text-slate-950 font-bold text-[10px] tracking-wider rounded-xs">
              STATION 02
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">
              PROJECT ARTIFACTS // BESPOKE SYSTEM SHOWCASES
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">// TOTAL ARTIFACTS:</span>
            <span className="text-[#FF6B35] font-bold">06 VERIFIED SYSTEMS</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Software built for real operational demand.
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg leading-relaxed">
            Every application below was built to address concrete business or social mechanics. 
            Inspect the live interactive simulators, explore the architecture, or launch the production deployments.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            ARTIFACT 01: GENESIS MINIMART POS (Interactive Retail Terminal)
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="mb-20 bg-[#0F1522] border border-white/15 rounded-sm p-6 sm:p-8 lg:p-10 registration-corner shadow-2xl">
          {/* Card Top Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">[ARTIFACT 01]</span>
              <span className="text-slate-200 font-bold tracking-wider">GENESIS MINIMART POS</span>
              <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-xs text-[10px] font-bold">
                OFFLINE-FIRST PWA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://genesis-minimart-pos.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="workshop-btn-primary py-1.5 px-3 text-xs"
              >
                <span>OPEN LIVE POS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left: Project Narrative & Architecture */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider mb-2">
                  // RETAIL SYSTEMS & OFFLINE-READY CHECKOUT
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                  Sub-15ms retail checkout engineered for low-spec counter hardware.
                </h3>
                <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                  Standard web applications freeze or crash when local retail connectivity fluctuates. 
                  I architected Genesis Minimart POS with React 19, Vite, and dedicated Service Worker caching to run flawlessly offline, allowing retail cashiers to scan products, compute totals, and record transactions without internet dependency.
                </p>

                <div className="space-y-3 font-mono text-xs mb-6 p-4 bg-[#090D14] border border-white/10 rounded-xs">
                  <div className="text-slate-500 text-[10px] uppercase">// TECHNICAL SPECIFICATIONS</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">CORE ENGINE:</span>
                      <span className="text-slate-200 font-bold">React 19 + Vite</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">CACHING LAYER:</span>
                      <span className="text-emerald-400 font-bold">Service Worker PWA</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">DATA STORAGE:</span>
                      <span className="text-slate-200 font-bold">IndexedDB / LocalStorage</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">CHECKOUT SPEED:</span>
                      <span className="text-amber-400 font-bold">&lt; 15ms Latency</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["React 19", "Vite", "PWA Service Worker", "TypeScript", "Tailwind CSS", "Thermal Receipt Logic"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px] rounded-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DEMO STATUS: FULLY INTERACTIVE</span>
                <span className="text-emerald-400 font-bold">TEST SIMULATOR &rarr;</span>
              </div>
            </div>

            {/* Right: Live Interactive POS Simulator */}
            <div className="lg:col-span-6 bg-[#090D14] border border-white/15 rounded-xs p-4 sm:p-6 shadow-inner font-mono">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                <span className="text-slate-300 font-bold flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-[#FF6B35]" />
                  <span>SIMULATED POS TERMINAL // LIVE TEST</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 rounded-xs">
                  OFFLINE CACHE: ACTIVE
                </span>
              </div>

              {/* Quick Pick Product Grid */}
              <div className="text-[11px] text-slate-400 mb-2">// TAP AN ITEM TO ADD TO REGISTER:</div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {posProducts.map((p) => {
                  const qty = posCart[p.id] || 0;
                  return (
                    <button
                      key={p.id}
                      onClick={() => addPosItem(p.id)}
                      className={`p-2.5 text-left rounded-xs border transition-all text-xs flex flex-col justify-between ${
                        qty > 0
                          ? "bg-[#141E30] border-[#FF6B35]/60 text-slate-100"
                          : "bg-[#0F1522] border-white/10 text-slate-300 hover:border-white/25"
                      }`}
                    >
                      <span className="font-semibold truncate block">{p.name}</span>
                      <div className="flex items-center justify-between mt-1 text-[11px]">
                        <span className="text-amber-400 font-bold">KES {p.price}</span>
                        {qty > 0 && (
                          <span className="px-1.5 py-0.2 bg-[#FF6B35] text-slate-950 font-bold text-[9px] rounded-xs">
                            x{qty}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Cart Tape */}
              <div className="p-3 bg-[#0B1019] border border-white/10 rounded-xs mb-4">
                <div className="text-[10px] text-slate-500 uppercase pb-1 mb-2 border-b border-white/5 flex justify-between">
                  <span>ACTIVE TRANSACTION RECEIPT</span>
                  <span>SKU / QTY / AMOUNT</span>
                </div>
                
                {Object.keys(posCart).length === 0 ? (
                  <div className="text-center py-4 text-xs text-slate-500 italic">
                    Cart is empty. Tap items above to test live calculation.
                  </div>
                ) : (
                  <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                    {Object.entries(posCart).map(([idStr, qty]) => {
                      const id = Number(idStr);
                      const product = posProducts.find((p) => p.id === id);
                      if (!product) return null;
                      return (
                        <div key={id} className="flex items-center justify-between text-xs text-slate-200">
                          <span className="truncate max-w-[170px]">{product.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 text-[11px]">KES {product.price * qty}</span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => removePosItem(id)}
                                className="w-4 h-4 bg-white/10 hover:bg-white/20 rounded-xs flex items-center justify-center text-slate-300"
                              >
                                <Minus className="w-2.5 h-2.5" />
                              </button>
                              <span className="text-[11px] font-bold text-amber-400 w-3 text-center">{qty}</span>
                              <button
                                onClick={() => addPosItem(id)}
                                className="w-4 h-4 bg-white/10 hover:bg-white/20 rounded-xs flex items-center justify-center text-slate-300"
                              >
                                <Plus className="w-2.5 h-2.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Subtotals */}
                <div className="pt-2 mt-2 border-t border-white/10 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>16% VAT INCLUDED:</span>
                    <span>KES {posVat}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-slate-100">
                    <span>TOTAL PAYABLE:</span>
                    <span className="text-emerald-400">KES {posSubtotal}</span>
                  </div>
                </div>
              </div>

              {/* Checkout / Simulated Cash Action */}
              <div className="flex items-center gap-2">
                <button
                  disabled={posSubtotal === 0}
                  onClick={() => setPosPaid(true)}
                  className={`flex-1 py-2 px-3 text-xs font-bold rounded-xs flex items-center justify-center gap-2 transition-all ${
                    posSubtotal > 0
                      ? "bg-[#FF6B35] text-slate-950 hover:bg-[#FF8859]"
                      : "bg-white/5 text-slate-600 cursor-not-allowed"
                  }`}
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>SIMULATE CASH CHECKOUT</span>
                </button>
                <button
                  onClick={() => { setPosCart({}); setPosPaid(false); }}
                  className="px-3 py-2 text-xs bg-white/5 hover:bg-white/10 text-slate-400 rounded-xs"
                >
                  CLEAR
                </button>
              </div>

              {posPaid && (
                <div className="mt-3 p-2.5 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs rounded-xs flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Transaction logged in &lt;12ms. Receipt buffer dispatched to thermal printer.</span>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            ARTIFACT 02: RADA DATING APP (Intentional Connection Platform)
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="mb-20 bg-[#0F1522] border border-white/15 rounded-sm p-6 sm:p-8 lg:p-10 registration-corner shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-[#FF6B35] font-bold">[ARTIFACT 02]</span>
              <span className="text-slate-200 font-bold tracking-wider">RADA DATING APP</span>
              <span className="px-2 py-0.5 bg-[#0D9488]/20 text-[#2DD4BF] border border-[#0D9488]/40 rounded-xs text-[10px] font-bold">
                INTENTION-FIRST SOCIAL
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://rada-app-z5tx.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="workshop-btn-primary py-1.5 px-3 text-xs"
              >
                <span>OPEN RADA APP</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left: Product Architecture & Intentional Disclosure */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2">
                  // KNOW THE INTENTION BEFORE YOU CATCH FEELINGS
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                  Kenya&apos;s intentional dating platform engineered to cut through ambiguity.
                </h3>
                <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                  Modern dating apps suffer from mismatched goals and endless ghosting. Rada was architected around upfront intention declaration: singles select whether they are seeking Marriage, a Serious Relationship, Intentional Dating, or Networking before matching occurs.
                </p>

                {/* Transparent Engineering Status Note */}
                <div className="p-4 bg-[#090D14] border-l-2 border-[#2DD4BF] rounded-xs mb-6 text-xs font-mono space-y-2">
                  <div className="text-[#2DD4BF] font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>PRODUCTION IMPLEMENTATION DISCLOSURE</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    ✓ <strong className="text-slate-100">Active Live System:</strong> User profiles, intention filtering algorithms, discovery feeds, responsive Nairobi-inspired UI, and PWA packaging are fully implemented and live.
                  </p>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    ⏳ <strong className="text-amber-400">Staged for V2:</strong> Mobile-money subscription paywalls (M-Pesa STK Push / Paystack) are staged in development and scheduled for the next release cycle.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Next.js App Router", "TypeScript", "Tailwind CSS", "PWA Manifest", "Intention Engine", "Nairobi Design System"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px] rounded-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>PLATFORM: MOBILE PWA & RESPONSIVE WEB</span>
                <span className="text-[#2DD4BF] font-bold">TEST INTENTION MATRIX &rarr;</span>
              </div>
            </div>

            {/* Right: Mobile Intention Simulator */}
            <div className="lg:col-span-6 bg-[#090D14] border border-white/15 rounded-xs p-5 sm:p-6 shadow-inner font-sans">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-xs">
                <span className="text-slate-300 font-bold flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#2DD4BF]" />
                  <span>RADA INTENTION DISCOVERY CONSOLE</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-teal-950/40 text-teal-300 border border-teal-500/30 rounded-xs">
                  NAIROBI VIBES
                </span>
              </div>

              {/* Intention Selector Chips */}
              <div className="font-mono text-[11px] text-slate-400 mb-2">// FILTER BY UPFRONT INTENTION:</div>
              <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-xs">
                {["Serious Relationship", "Marriage", "Intentional Dating", "Networking"].map((intent) => {
                  const isActive = radaIntention === intent;
                  return (
                    <button
                      key={intent}
                      onClick={() => setRadaIntention(intent)}
                      className={`px-3 py-1.5 rounded-full border transition-all text-[11px] font-bold ${
                        isActive
                          ? "bg-[#2DD4BF] text-slate-950 border-[#2DD4BF] shadow-[0_0_12px_rgba(45,212,191,0.3)]"
                          : "bg-[#111827] text-slate-300 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {intent}
                    </button>
                  );
                })}
              </div>

              {/* Profile Card Mockup */}
              <div className="bg-[#111827] border border-white/10 rounded-sm p-5 relative overflow-hidden">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white">{activeRadaProfile.name}</h4>
                      <span className="text-slate-400 font-mono text-sm">{activeRadaProfile.age}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-[#2DD4BF]" />
                      <span>{activeRadaProfile.location}</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-[#2DD4BF]/20 text-[#2DD4BF] border border-[#2DD4BF]/40">
                    {activeRadaProfile.intent}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  &ldquo;{activeRadaProfile.bio}&rdquo;
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {activeRadaProfile.interests.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 text-[11px] rounded-xs font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">INTENTION STATUS:</span>
                  <span className="text-emerald-400 font-bold">100% CLEAR MATCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            ARTIFACT 03: EXPRESS RIDE & SAFARI KENYA (Fleet & Route Dispatcher)
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="mb-20 bg-[#0F1522] border border-white/15 rounded-sm p-6 sm:p-8 lg:p-10 registration-corner shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">[ARTIFACT 03]</span>
              <span className="text-slate-200 font-bold tracking-wider">EXPRESS RIDE & SAFARI KENYA</span>
              <span className="px-2 py-0.5 bg-amber-500/15 text-amber-400 border border-amber-500/30 rounded-xs text-[10px] font-bold">
                PRODUCTION LOGISTICS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://express-ride-and-safari.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="workshop-btn-primary py-1.5 px-3 text-xs"
              >
                <span>OPEN OFFICIAL SITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left: Operational Scope */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                  // COASTAL CAR HIRE, CHAUFFEUR & SAFARI EXPEDITIONS
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                  Full production fleet showcase and quotation dispatcher based in Bamburi, Mombasa.
                </h3>
                <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                  Engineered for high-trust commercial car rental, airport transfers (Moi International Airport to Diani/Bamburi/Malindi), and safari excursions to Tsavo and Maasai Mara. 
                  Connects web discovery directly to WhatsApp and email customer service with prefilled parameters.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                  <div className="p-3 bg-[#090D14] border border-white/10 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">HEADQUARTERS</span>
                    <span className="text-slate-200 font-bold">Bamburi Fisheries, Mombasa</span>
                  </div>
                  <div className="p-3 bg-[#090D14] border border-white/10 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">PRIMARY CHANNEL</span>
                    <span className="text-emerald-400 font-bold">WhatsApp Deep Dispatch</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Next.js App Router", "TypeScript", "Tailwind CSS", "WhatsApp Business API", "Google Search Console SEO"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px] rounded-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>CANONICAL: express-ride-and-safari.co.ke</span>
                <span className="text-amber-400 font-bold">TEST FLEET DISPATCH &rarr;</span>
              </div>
            </div>

            {/* Right: Interactive Fleet & Route Terminal */}
            <div className="lg:col-span-6 bg-[#090D14] border border-white/15 rounded-xs p-5 sm:p-6 shadow-inner font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="text-slate-300 font-bold flex items-center gap-2">
                  <Car className="w-4 h-4 text-amber-400" />
                  <span>FLEET & ROUTE DISPATCH CALCULATOR</span>
                </span>
                <span className="text-[10px] text-slate-400">MOMBASA // DIANI</span>
              </div>

              {/* Vehicle Selector */}
              <div className="text-[11px] text-slate-400 mb-1.5">// SELECT VEHICLE:</div>
              <div className="space-y-1.5 mb-4">
                {Object.keys(fleetInfo).map((veh) => {
                  const isSelected = safariVehicle === veh;
                  return (
                    <button
                      key={veh}
                      onClick={() => setSafariVehicle(veh)}
                      className={`w-full p-2.5 text-left rounded-xs border transition-all flex items-center justify-between text-xs ${
                        isSelected
                          ? "bg-[#161F30] border-amber-400 text-slate-100"
                          : "bg-[#0F1522] border-white/10 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <span className="font-semibold">{veh}</span>
                      <span className="text-amber-400 font-bold">{fleetInfo[veh].rate}</span>
                    </button>
                  );
                })}
              </div>

              {/* Vehicle Specs Breakdown */}
              <div className="p-3 bg-[#0B1019] border border-white/10 rounded-xs mb-4 text-[11px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">CAPACITY:</span>
                  <span className="text-slate-200">{fleetInfo[safariVehicle].seats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">TERRAIN RATING:</span>
                  <span className="text-emerald-400">{fleetInfo[safariVehicle].terrain}</span>
                </div>
              </div>

              {/* Route Selector */}
              <div className="text-[11px] text-slate-400 mb-1.5">// SELECT COMMON ROUTE:</div>
              <select
                value={safariRoute}
                onChange={(e) => setSafariRoute(e.target.value)}
                className="w-full p-2.5 bg-[#0F1522] border border-white/10 rounded-xs text-slate-200 text-xs mb-4 focus:outline-none focus:border-amber-400"
              >
                <option value="Moi Airport (MBA) → Diani Beach">Moi Airport (MBA) → Diani Beach (Transfer)</option>
                <option value="Moi Airport (MBA) → Bamburi / Nyali">Moi Airport (MBA) → Bamburi / Nyali (Transfer)</option>
                <option value="Nairobi / Mombasa → Tsavo East 2-Day">Nairobi / Mombasa → Tsavo East 2-Day Safari</option>
                <option value="Nairobi → Maasai Mara 3-Day Package">Nairobi → Maasai Mara 3-Day Safari</option>
              </select>

              <a
                href={`https://wa.me/254769047490?text=${encodeURIComponent(
                  `Hi Gift, I would like to inquire about the ${safariVehicle} for the route: ${safariRoute}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full workshop-btn-primary py-2.5 text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>GENERATE PREFILLED WHATSAPP INQUIRY</span>
              </a>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            ADDITIONAL VERIFIED CLIENT SYSTEMS (ESKA, MusaMaths, Smart Deal)
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-xs font-mono text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-[#FF6B35] font-bold">[ADDITIONAL VERIFIED SYSTEMS]</span>
            <span>COMMERCIAL & EDTECH DEPLOYMENTS:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ESKA Metal Works */}
            <div className="p-6 bg-[#0F1522] border border-white/10 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>[ARTIFACT 04]</span>
                  <span className="text-emerald-400 font-bold">CLIENT DEPLOYMENT</span>
                </div>
                <h4 className="text-lg font-bold text-slate-100 mb-2">ESKA Metal Works</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Industrial fabrication platform engineered for commercial quote acquisition, steel project showcases, and Google Search discoverability.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Next.js SSG", "TypeScript", "Tailwind CSS", "Technical SEO"].map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 rounded-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
                SCOPE: Industrial Engineering Showcase
              </div>
            </div>

            {/* MusaMaths */}
            <div className="p-6 bg-[#0F1522] border border-white/10 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>[ARTIFACT 05]</span>
                  <span className="text-cyan-400 font-bold">EDTECH PLATFORM</span>
                </div>
                <h4 className="text-lg font-bold text-slate-100 mb-2">MusaMaths Learning Engine</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Interactive mathematics learning platform delivering curriculum progression tracking, instant equation verification, and mobile problem-solving.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["React", "TypeScript", "Node.js", "Modular State"].map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 rounded-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
                SCOPE: Educational Problem-Solving
              </div>
            </div>

            {/* Smart Deal Furniture */}
            <div className="p-6 bg-[#0F1522] border border-white/10 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>[ARTIFACT 06]</span>
                  <span className="text-amber-400 font-bold">RETAIL SHOWROOM</span>
                </div>
                <h4 className="text-lg font-bold text-slate-100 mb-2">Smart Deal Furniture</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Digital furniture showroom with direct WhatsApp order negotiation pipelines, high-res spec sheets, and responsive category browsing.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["React", "JavaScript", "WhatsApp API", "Modular CSS"].map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 rounded-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
                SCOPE: Direct-to-Consumer Catalog
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
