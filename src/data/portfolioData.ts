export interface Project {
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  technologies: string[];
}

export interface MetricCard {
  value: string;
  label: string;
  subtext: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Gift Mukhwana",
  title: "Software Developer & Systems Builder",
  headline: "Engineering High-Impact Digital Systems",
  tagline: "We architect and deliver resilient business software, custom operational platforms, and full-stack web applications for ambitious organizations.",
  description: "Operating with institutional rigor, Gift Mukhwana designs and deploys production systems that solve real operational friction. From offline-first point-of-sale platforms to high-concurrency payment integrations, every codebase is built for speed, reliability, and scale.",
  location: "Nairobi, Kenya · Remote Collaboration Worldwide",
  phone: "0769047490",
  phoneFormatted: "+254 769 047 490",
  email: "giftmukhwana@gmail.com",
  github: "github.com/zawadi-web",
  githubUrl: "https://github.com/zawadi-web",
  whatsappUrl: "https://wa.me/254769047490?text=Hi%20Gift,%20I'd%20like%20to%20discuss%20a%20software%20project.",
};

export const FOUNDATION_METRICS: MetricCard[] = [
  {
    value: "2024",
    label: "Active Builder",
    subtext: "Engineering production software for modern businesses",
  },
  {
    value: "Global",
    label: "Location-Independent",
    subtext: "Collaborating with clients across borders and timezones",
  },
  {
    value: "100%",
    label: "Production-Grade",
    subtext: "Clean architecture with zero bloated dependencies",
  },
  {
    value: "< 15ms",
    label: "High Performance",
    subtext: "Sub-15ms local UI state transitions and edge speed",
  },
];

export const SOLUTIONS: Project[] = [
  {
    number: "01",
    name: "Genesis Minimart POS",
    category: "Retail Systems & Offline PWA",
    headline: "High-Speed Countertop Point of Sale Engine",
    description: "A production-grade retail point of sale and stock tracking platform built for fast-paced retail environments. Engineered to maintain full operational continuity and checkout speed even during unexpected network dropouts.",
    impactMetric: "< 15ms",
    impactLabel: "Checkout Latency",
    technologies: ["React 19", "Vite PWA", "Service Worker", "IndexedDB", "TypeScript"],
  },
  {
    number: "02",
    name: "Rada Social Platform",
    category: "Full-Stack Web Application",
    headline: "Intentional Social Connection Platform",
    description: "An intentional connection platform designed around upfront relationship goals, verified profiles, and authentic Nairobi vibes. Eliminates communication ambiguity through algorithmic intention filtering.",
    impactMetric: "100%",
    impactLabel: "Intention-First Matching",
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
  },
  {
    number: "03",
    name: "Express Ride & Safari",
    category: "Fleet Logistics & Tourism",
    headline: "Commercial Fleet & Tour Reservation Platform",
    description: "A comprehensive transport platform operating out of Bamburi, Mombasa, covering luxury 4x4 safari fleet reservations, corporate chauffeur services, and automated WhatsApp quotation dispatch.",
    impactMetric: "24/7",
    impactLabel: "Direct Dispatch Flow",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Business API", "SEO Engine"],
  },
  {
    number: "04",
    name: "ESKA Metal Works",
    category: "Commercial Digital Platform",
    headline: "Industrial Fabrication Authority Platform",
    description: "A tailored commercial presence engineered to establish digital market authority for a premier structural steel fabrication firm, featuring instant quotation acquisition workflows and technical SEO delivery.",
    impactMetric: "98+",
    impactLabel: "Core Web Vitals",
    technologies: ["Next.js SSG", "TypeScript", "Tailwind CSS", "Technical SEO", "Lead Dispatch"],
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Disciplined Architecture",
    description: "Codebases evolve, but engineering fundamentals endure. We architect clean, type-safe data schemas and modular systems before writing a single line of production code.",
  },
  {
    number: "02",
    title: "Operational Security",
    description: "From idempotent payment webhook callbacks to offline-resilient local caches, our systems are built defensively to prevent data loss, double-charging, and downtime.",
  },
  {
    number: "03",
    title: "Long-Term Scalability",
    description: "We deploy on global edge CDN networks with strict performance budgets, ensuring lightning-fast page delivery and sustainable maintenance across growth cycles.",
  },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Custom Business Systems & POS",
    description: "Operational tools built strictly around your real-world workflows—including inventory consoles, offline checkout engines, and role-based staff portals.",
    capabilities: ["Offline-first PWA caching", "Thermal receipt formatting", "Stock reconciliation", "Low-spec hardware optimization"],
  },
  {
    number: "02",
    title: "Payment Gateways & FinTech",
    description: "Seamless money movement across mobile wallets and cards, featuring automated STK Push, transaction polling, and cryptographically verified webhook handlers.",
    capabilities: ["M-Pesa / Daraja API integration", "Paystack payment flows", "HMAC webhook verifications", "Automated invoice dispatch"],
  },
  {
    number: "03",
    title: "Full-Stack Web Applications",
    description: "End-to-end digital products built with strict type safety, modular component hierarchies, relational database schemas, and edge-rendered user interfaces.",
    capabilities: ["Next.js App Router architecture", "PostgreSQL schema modeling", "Prisma ORM migrations", "Secure session authentication"],
  },
  {
    number: "04",
    title: "Commercial Platforms & Digital Authority",
    description: "High-performance websites engineered for industrial firms, transport fleets, and corporate enterprises designed to turn search visitors into qualified inquiries.",
    capabilities: ["Search Engine Optimization (SEO)", "Automated quotation workflows", "WhatsApp direct integration", "Sub-second global CDN load times"],
  },
];
