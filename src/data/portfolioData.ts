export interface Project {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  logline: string;
  description: string;
  technicalOverview: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  features: string[];
  architectureScope: string;
  url?: string;
  githubUrl?: string;
  statusBadge: "PRODUCTION LIVE" | "ACTIVE WEB APP" | "STAGED FOR V2" | "CLIENT DEPLOYMENT";
  highlightBadge?: string;
  stationType: "pos-simulator" | "mobile-intention" | "fleet-dispatcher" | "spec-sheet" | "standard";
}

export interface WorkshopStation {
  id: string;
  code: string;
  title: string;
  descriptor: string;
}

export interface TechnicalCapability {
  category: string;
  iconName: string;
  headline: string;
  description: string;
  solvedProblem: string;
  tooling: string[];
  proofPoints: string[];
}

export interface ProcessStage {
  step: string;
  phase: string;
  title: string;
  action: string;
  artifact: string;
}

export const PERSONAL_INFO = {
  name: "Gift Mukhwana",
  title: "Software Developer & Systems Builder",
  roleTitle: "Software Developer · Systems Architect",
  tagline: "Architecting high-impact business systems, web applications, and resilient digital tools.",
  shortBio: "I design, engineer, and deploy production software systems. From offline-first point-of-sale platforms and intentional web applications to fleet logistics engines and payment pipelines, I specialize in transforming complex operational friction into clean, dependable code.",
  location: "Location-Independent · Worldwide Remote Engineering",
  locationShort: "Remote / Global",
  phone: "0769047490",
  phoneFormatted: "+254 769 047 490",
  email: "giftmukhwana@gmail.com",
  github: "github.com/zawadi-web",
  githubUrl: "https://github.com/zawadi-web",
  whatsappUrl: "https://wa.me/254769047490?text=Hi%20Gift,%20I'd%20like%20to%20discuss%20a%20software%20project.",
  availability: "Available for Remote Contract Engineering & Select Client Systems",
  web3formsKey: "0f0a774f-ee44-48ec-b657-8a154a1a99af",
};

export const WORKSHOP_STATIONS: WorkshopStation[] = [
  { id: "workbench", code: "01", title: "Draughtsman's Desk", descriptor: "Builder Telemetry & Overview" },
  { id: "artifacts", code: "02", title: "Project Artifacts", descriptor: "Interactive Software Showcases" },
  { id: "ledger",    code: "03", title: "Engineering Ledger", descriptor: "Architecture & Problem Solving" },
  { id: "craftsman", code: "04", title: "Builder Dossier", descriptor: "Philosophy, Standards & Profile" },
  { id: "dispatch",  code: "05", title: "Transmission Console", descriptor: "Direct Project Inquiry" },
];

export const PROJECTS: Project[] = [
  {
    id: "genesis-pos",
    name: "Genesis Minimart POS",
    subtitle: "Offline-First Point of Sale & Inventory Engine",
    category: "Retail Systems & Offline PWA",
    logline: "High-speed retail checkout, inventory tracking, and sales telemetry engineered to run smoothly on low-spec counter hardware even during internet dropouts.",
    description: "A production-grade Point of Sale (POS) and inventory control web application created for fast-paced retail convenience stores. Engineered as a Progressive Web App (PWA) with client-side caching, instant barcode and item lookup, dynamic cart calculation, cash transaction logging, and thermal-ready receipt formatting.",
    technicalOverview: "Built with React 19 and Vite for instantaneous sub-10ms UI state transitions. Employs Service Workers for offline-first resilience, JetBrains Mono and Inter for high-contrast legibility, and structured state engines that ensure zero lost transactions during network drops.",
    technologies: ["React 19", "Vite", "PWA / Service Worker", "TypeScript", "Tailwind CSS", "IndexedDB / Local Cache"],
    metrics: [
      { label: "Checkout Latency", value: "< 15ms" },
      { label: "Network Requirement", value: "Offline-First" },
      { label: "Hardware Target", value: "Low-Spec POS / Tablet" },
    ],
    features: [
      "Instant barcode SKU lookup and categorized quick-pick grid",
      "Real-time subtotal, tax breakdown, and change calculator",
      "Thermal receipt format generator and printable order summary",
      "PWA Service Worker offline caching for uninterrupted checkout",
      "Inventory stock decrementing and low-stock warning indicators"
    ],
    architectureScope: "React 19 · Vite PWA · Service Worker · TypeScript · Client Caching",
    url: "https://genesis-minimart-pos.vercel.app/",
    githubUrl: "https://github.com/zawadi-web",
    statusBadge: "ACTIVE WEB APP",
    highlightBadge: "FLAGSHIP RETAIL SYSTEM",
    stationType: "pos-simulator",
  },
  {
    id: "rada-dating",
    name: "Rada Dating App",
    subtitle: "Intentional Connection Platform",
    category: "Full-Stack Social Platform",
    logline: "Kenya's intentional dating platform designed around upfront relationship goals, verified profiles, and authentic Nairobi vibes.",
    description: "Rada redefines digital dating by requiring users to declare their dating intention upfront—filtering out ambiguity before conversation starts. Features responsive profile cards, intention badges, algorithmic matching feeds, and messaging flows.",
    technicalOverview: "Built on Next.js App Router with PWA mobile packaging, custom theme tokens (Nairobi Teal & Warm Gold), and responsive client-side routing. Transparent engineering disclosure: profile discovery, intention filtering, and matching algorithms are active; mobile-money subscription gateways (M-Pesa / Paystack) are staged for the upcoming phase.",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "PWA", "PostgreSQL", "Prisma ORM"],
    metrics: [
      { label: "Core Concept", value: "Intention-First Matching" },
      { label: "Platform", value: "Mobile PWA + Responsive Web" },
      { label: "Payment Phase", value: "Staged for V2 (M-Pesa/Paystack)" },
    ],
    features: [
      "Upfront intention declarations ('Serious Relationship', 'Intentional Dating', 'Marriage', 'Networking')",
      "Custom Nairobi-inspired design system with dark/light theme switching",
      "PWA installability with offline splash and optimized mobile viewport",
      "Interactive discovery cards with biographical and interest tags",
      "Direct messaging workflow and profile integrity controls"
    ],
    architectureScope: "Next.js App Router · TypeScript · PWA · Responsive Glass Engine",
    url: "https://rada-app-z5tx.vercel.app/",
    githubUrl: "https://github.com/zawadi-web",
    statusBadge: "ACTIVE WEB APP",
    highlightBadge: "INTENTIONAL SOCIAL APP",
    stationType: "mobile-intention",
  },
  {
    id: "express-ride-safari",
    name: "Express Ride & Safari Kenya",
    subtitle: "Fleet Logistics & Safari Booking Engine",
    category: "Commercial Transport & Tourism",
    logline: "Comprehensive vehicle hire, airport transfer, and bespoke safari excursion reservation platform operating out of Mombasa, Kenya.",
    description: "A production booking and fleet showcase platform for a premier coastal transport operator. Features an interactive fleet inspection system (Toyota Land Cruiser V8, Prado TX, VIP Safari Vans), fixed-rate airport transfer routing (Moi International Airport / Bamburi / Diani), custom safari package discovery, and prefilled WhatsApp quote dispatch.",
    technicalOverview: "Architected in Next.js with modular component separation, animated route visualizers, SEO metadata tuning for Google Search Console, and automated inquiry pipelines connecting web discovery directly to WhatsApp and email customer service.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Business API", "Google Search Console SEO"],
    metrics: [
      { label: "Fleet Scope", value: "Land Cruiser, Prado, Vans" },
      { label: "Primary Hub", value: "Bamburi, Mombasa" },
      { label: "Inquiry Channel", value: "Instant WhatsApp & Email" },
    ],
    features: [
      "Detailed fleet specs with passenger capacity, luggage volume, and terrain ratings",
      "Dynamic airport pickup calculator (Mombasa, Diani, Malindi, Nairobi)",
      "Multi-day safari excursion itineraries (Maasai Mara, Tsavo East/West, Amboseli)",
      "Direct WhatsApp dispatch with prefilled vehicle and date parameters",
      "High-speed responsive delivery with custom brand photography"
    ],
    architectureScope: "Next.js App Router · TypeScript · Fleet Dispatch Engine",
    url: "https://express-ride-and-safari.co.ke",
    githubUrl: "https://github.com/zawadi-web",
    statusBadge: "PRODUCTION LIVE",
    highlightBadge: "COASTAL FLEET ENGINE",
    stationType: "fleet-dispatcher",
  },
  {
    id: "eska-metalworks",
    name: "ESKA Metal Works",
    subtitle: "Industrial Fabrication Commercial Platform",
    category: "Commercial Engineering Showcase",
    logline: "High-performance digital presence built to establish market authority for an industrial steel and metal fabrication firm.",
    description: "Engineered to convert commercial architects, construction managers, and developers into firm quotation leads. Features structural project galleries, steel fabrication capacity breakdowns, and automated quotation acquisition workflows.",
    technicalOverview: "Next.js static site generation (SSG) with optimized Core Web Vitals, rich JSON-LD Schema markup for local industrial search ranking, and instant lead capture forms.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Technical SEO", "Lead Dispatch"],
    metrics: [
      { label: "Performance", value: "98+ Lighthouse" },
      { label: "Lead Funnel", value: "Quotation Dispatch" },
      { label: "Industry", value: "Structural Fabrication" },
    ],
    features: [
      "Industrial fabrication showcase (gates, trusses, decorative steel, balustrades)",
      "Automated quotation inquiry dispatch directly to client estimation team",
      "Search-optimized semantic structure for commercial industrial discovery",
      "High-speed image delivery tuned for mobile construction managers"
    ],
    architectureScope: "Next.js · TypeScript · Tailwind CSS · Static Optimization",
    githubUrl: "https://github.com/zawadi-web",
    statusBadge: "CLIENT DEPLOYMENT",
    stationType: "spec-sheet",
  },
  {
    id: "musamaths",
    name: "MusaMaths Learning Engine",
    subtitle: "Interactive Mathematics Learning Environment",
    category: "EdTech & Interactive Learning",
    logline: "Digital mathematics learning platform offering step-by-step problem solving, automated answer validation, and curriculum tracking.",
    description: "Designed to remove the friction of abstract mathematical concepts for students through interactive problem-solving modules, real-time input verification, and structured curriculum step-progression.",
    technicalOverview: "Lightweight state engine in React and TypeScript with deterministic equation verification, responsive keypad controls, and cross-device accessibility.",
    technologies: ["React", "TypeScript", "Node.js", "Modular State Engine"],
    features: [
      "Interactive mathematical quiz and problem verification logic",
      "Curriculum syllabus breakdown with progressive difficulty modules",
      "Instant feedback evaluation without requiring heavy server roundtrips",
      "Lightweight mobile-first interface accessible on low-bandwidth networks"
    ],
    architectureScope: "React · TypeScript · Modular State Engine",
    githubUrl: "https://github.com/zawadi-web",
    statusBadge: "ACTIVE WEB APP",
    stationType: "standard",
  },
  {
    id: "smart-deal-furniture",
    name: "Smart Deal Furniture",
    subtitle: "Commercial Digital Catalog & Direct Sales",
    category: "Retail Showroom & Catalog",
    logline: "Direct-to-consumer digital furniture catalog connecting inventory discovery directly into WhatsApp transactional negotiations.",
    description: "A streamlined showroom application enabling customers to browse living room, dining, and executive office furniture collections, inspect dimensions and wood finishes, and initiate orders with prefilled item specifications.",
    technicalOverview: "High-contrast visual product gallery with direct WhatsApp API deep-linking, category filtering, and zero-overhead client routing.",
    technologies: ["React", "JavaScript", "Modular CSS", "WhatsApp Deep Links"],
    features: [
      "High-resolution furniture collection showcase with spec sheets",
      "One-tap prefilled WhatsApp order dispatch with item SKU and pricing",
      "Responsive category filtering across living, bedroom, and office lines"
    ],
    architectureScope: "React · JavaScript · Modular CSS · WhatsApp Linkage",
    githubUrl: "https://github.com/zawadi-web",
    statusBadge: "CLIENT DEPLOYMENT",
    stationType: "standard",
  }
];

export const TECHNICAL_CAPABILITIES: TechnicalCapability[] = [
  {
    category: "Custom Business Systems & POS",
    iconName: "LayoutGrid",
    headline: "Operational Tools Built Around Your Exact Workflow",
    description: "Standard off-the-shelf software forces businesses to change how they work. I build custom point-of-sale platforms, inventory trackers, and staff administration consoles tailored strictly around your daily operations.",
    solvedProblem: "Eliminating manual bookkeeping, inventory discrepancies, and slow counter checkout with resilient software that operates even when connectivity drops.",
    tooling: ["React 19 / Next.js", "PWA Service Workers", "IndexedDB", "Tailwind CSS", "TypeScript"],
    proofPoints: [
      "Sub-15ms barcode and cart recalculations in Genesis POS",
      "Uninterrupted offline checkout caching with auto-sync capability",
      "Role-based staff permissions and cash register reconciliation"
    ]
  },
  {
    category: "Payment Pipelines & Transactional APIs",
    iconName: "CreditCard",
    headline: "Frictionless Money Movement & Webhook Verification",
    description: "Integrating seamless payment gateways into web platforms across East Africa and globally. Handling automated STK Push, card processing, and idempotent webhook listeners.",
    solvedProblem: "Preventing double-charging, dropped payments, and unverified customer orders through cryptographically verified webhook callback handlers.",
    tooling: ["M-Pesa Daraja API", "Paystack API", "Stripe Connect", "HMAC Webhooks", "Node.js Serverless"],
    proofPoints: [
      "Real-time M-Pesa STK Push prompts and status query polling",
      "Automated Paystack checkout sessions with transaction reference logging",
      "Idempotent serverless webhook endpoints with database transaction locks"
    ]
  },
  {
    category: "Full-Stack Web Architecture",
    iconName: "Layers",
    headline: "Type-Safe, High-Concurrency Web Applications",
    description: "Developing scalable digital products from database schema design to edge-rendered user interfaces. Prioritizing strict type safety, clear component boundaries, and fast global delivery.",
    solvedProblem: "Replacing fragile, slow spaghetti code with modular architecture that handles user concurrency without crashing or degrading user experience.",
    tooling: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Prisma ORM", "Vercel Edge Network"],
    proofPoints: [
      "End-to-end TypeScript contracts across client, server, and database",
      "Relational data modeling with foreign keys, indexes, and migrations",
      "Optimized Core Web Vitals scoring 95+ on Lighthouse audits"
    ]
  },
  {
    category: "Commercial Platforms & Digital Authority",
    iconName: "Globe",
    headline: "Websites That Turn Visitors Into Commercial Inquiries",
    description: "Engineering professional web presences for industrial fabrication firms, transport fleets, and institutions designed to win high-value contracts and build lasting trust.",
    solvedProblem: "Fixing slow, generic company websites that fail to generate qualified quote inquiries or rank on Google Search.",
    tooling: ["Next.js SSG / SSR", "JSON-LD Schema", "Google Search Console", "WhatsApp Deep Links", "Web3Forms"],
    proofPoints: [
      "Structured quotation acquisition flows tailored to client decision-makers",
      "Automated lead delivery directly to executive inboxes and WhatsApp hotlines",
      "Full SEO optimization with canonical routing, sitemaps, and rich snippets"
    ]
  }
];

export const ENGINEERING_WORKFLOW: ProcessStage[] = [
  {
    step: "01",
    phase: "DISSECT",
    title: "Operational Discovery & Specification",
    action: "Deconstructing business friction, data flows, and architectural constraints into an unambiguous technical specification before writing a single line of code.",
    artifact: "System Blueprint, Schema Draft & Milestone Contracts"
  },
  {
    step: "02",
    phase: "ARCHITECT",
    title: "System Topology & Interface System",
    action: "Designing database entities, API interfaces, authentication boundaries, and high-legibility UI components tailored for real human tasks.",
    artifact: "Entity-Relationship Diagrams, Type Definitions & Wireframes"
  },
  {
    step: "03",
    phase: "FORGE",
    title: "Strict Full-Stack Implementation",
    action: "Writing strict TypeScript with modular separation, defensive error handling, test verification, and continuous client preview builds.",
    artifact: "Clean Git Repository, Type-Safe Codebase & Staging Deployments"
  },
  {
    step: "04",
    phase: "COMMISSION",
    title: "Edge Deployment & Performance Tuning",
    action: "Releasing to global CDN edge networks, configuring custom DNS and SSL, verifying webhook reliability, and training operational stakeholders.",
    artifact: "Production Release, Health Telemetry & System Documentation"
  }
];

export const TOOLCHAIN = [
  { group: "Core Architecture", items: ["TypeScript", "Next.js (App Router)", "React 19", "Node.js", "JavaScript (ESNext)"] },
  { group: "Databases & Storage", items: ["PostgreSQL", "Prisma ORM", "MySQL", "IndexedDB", "Client Caching"] },
  { group: "Payments & Webhooks", items: ["M-Pesa Daraja API", "Paystack", "Stripe", "HMAC Callback Verifiers"] },
  { group: "Styling & Motion", items: ["Tailwind CSS", "Vanilla CSS Tokens", "Micro-Interactions", "Responsive Design"] },
  { group: "DevOps & Edge", items: ["Vercel Edge", "Git & GitHub", "Cloudflare DNS", "Linux / Bash", "PWA Workbox"] },
];
