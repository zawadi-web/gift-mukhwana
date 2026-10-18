export interface Project {
  id: string;
  name: string;
  category: string;
  logline?: string;
  description: string;
  technologies: string[];
  features?: string[];
  url?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
  reelNumber?: string;
  architectureScope?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string;
  phaseCode?: string;
}

export interface TechCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Gift Mukhwana",
  title: "Software Developer",
  roleTitle: "Software Developer & Systems Builder",
  tagline: "Engineering high-impact digital systems, web applications, and scalable business software that travel anywhere.",
  location: "Location-Independent · Remote Collaboration Worldwide",
  locationShort: "Location-Independent",
  phone: "0769047490",
  phoneFormatted: "+254 769 047 490",
  email: "giftmukhwana@gmail.com",
  github: "github.com/zawadi-web",
  githubUrl: "https://github.com/zawadi-web",
  whatsappUrl: "https://wa.me/254769047490?text=Hi%20Gift,%20I'd%20like%20to%20discuss%20a%20software%20project.",
  availability: "Available for Remote Collaboration & Contract Engineering",
  heroSubtitle: "From enterprise-grade web platforms and custom business systems to frictionless payment integrations and full-stack software, I build resilient digital solutions for ambitious clients across locations.",
  aboutText: `I’m Gift Mukhwana, a software developer building production digital systems, modern web applications, and high-impact digital solutions. I specialize in turning complex operational challenges into high-performance software people and businesses actually rely on. Working across borders and timezones, my focus is delivering measurable business value through clean engineering, intuitive interfaces, and robust system architecture.`,
};

export const CAPABILITIES = [
  { name: "WEB DEVELOPMENT", key: "web-dev" },
  { name: "BUSINESS SYSTEMS", key: "systems" },
  { name: "PAYMENT INTEGRATION", key: "payments" },
  { name: "WEB APPLICATIONS", key: "web-apps" },
  { name: "HOSTING & DEPLOYMENT", key: "hosting" },
];

export const PROJECTS: Project[] = [
  {
    id: "pendo-dating",
    reelNumber: "REEL 01",
    name: "Pendo Dating Platform",
    category: "Full-Stack Web Architecture",
    logline: "High-concurrency social matching platform featuring resilient authentication, telemetry, and transactional gateways.",
    description: "A comprehensive full-stack social web platform featuring user authentication, verified profile workflows, algorithmic matching logic, automated payment gateways, and administrative command telemetry.",
    architectureScope: "Next.js App Router · Prisma ORM · PostgreSQL · Paystack API",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Paystack", "TypeScript"],
    features: [
      "User authentication & session management",
      "Dynamic matching logic & algorithmic filtering",
      "Paystack secure payment gateway integration",
      "Real-time administrative telemetry & control panel"
    ]
  },
  {
    id: "eska-metalworks",
    reelNumber: "REEL 02",
    name: "ESKA Metalworks",
    category: "Enterprise Commercial Platform",
    logline: "High-performance digital brand experience engineered for industrial quotation and precision discovery.",
    description: "A tailored commercial platform built to elevate market authority for an industrial fabrication firm, featuring interactive project showcases, client quote acquisition workflows, and search-optimized structure.",
    architectureScope: "Next.js · TypeScript · Tailwind CSS · Static Optimization",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Mobile-optimized industrial catalogue showcase",
      "Automated quotation inquiry dispatch workflow",
      "Technical SEO & performance-tuned page delivery",
      "High-speed responsive layout and micro-interactions"
    ]
  },
  {
    id: "musamaths",
    reelNumber: "REEL 03",
    name: "MusaMaths",
    category: "EdTech Learning Engine",
    logline: "Interactive mathematical learning environment delivering curriculum modules and real-time student evaluation.",
    description: "An interactive online mathematics learning platform designed to provide students with intuitive digital problem-solving modules, automated answer verification, curriculum progression tracking, and seamless cross-device accessibility.",
    architectureScope: "Next.js · Node.js · TypeScript · Modular State Engine",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    features: [
      "Interactive quiz & evaluation modules",
      "Structured mathematics curriculum display",
      "Student progress tracking view",
      "Mobile-friendly learning UI"
    ]
  },
  {
    id: "smart-deal-furniture",
    reelNumber: "REEL 04",
    name: "Smart Deal Furniture",
    category: "Commercial Digital Catalog",
    logline: "Conversion-oriented digital showroom connecting inventory discovery to direct transactional pipelines.",
    description: "A modern commercial digital showroom engineered for retail furniture sales, offering seamless category browsing, high-resolution product carousels, and rapid direct-to-messaging conversion channels.",
    architectureScope: "React · JavaScript · Modular CSS · WhatsApp API Linkage",
    technologies: ["React", "JavaScript", "CSS3"],
    features: [
      "Dynamic product collection showcase",
      "Direct order inquiry flow with prefilled cart details",
      "Category filtering & responsive grid display",
      "Clean commercial brand presentation"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "business-websites",
    number: "01",
    title: "High-Impact Web Platforms",
    description: "Production-ready, ultra-responsive web applications and corporate platforms built to establish market authority, attract international audiences, and convert visitors into clients.",
    highlights: ["Mobile-first responsive architecture", "Core Web Vitals & SEO optimization", "Fast global CDN load speeds", "High-conversion lead capture systems"],
    iconName: "Globe"
  },
  {
    id: "custom-systems",
    number: "02",
    title: "Custom Business Systems",
    description: "Software tailored precisely around your operational model—including internal workflow tools, automated reporting dashboards, inventory tracking, and client administration consoles.",
    highlights: ["Internal management tools", "Operational dashboards & analytics", "Role-based access & permissions", "Workflow automation & logic"],
    iconName: "LayoutDashboard"
  },
  {
    id: "payment-integration",
    number: "03",
    title: "Payment Gateways & FinTech",
    description: "Frictionless transactional infrastructure integrated into web apps, enabling seamless digital payments across cards, mobile wallets, and regional gateways with webhook verifications.",
    highlights: ["Paystack integration", "M-Pesa / Daraja API integration", "Automated webhook transaction callbacks", "Secure checkout & invoice flows"],
    iconName: "CreditCard"
  },
  {
    id: "web-applications",
    number: "04",
    title: "Full-Stack Web Applications",
    description: "End-to-end software products engineered from the ground up—covering resilient database schemas, RESTful & serverless APIs, real-time interactivity, and authenticated portals.",
    highlights: ["SaaS & web products", "Database architecture & indexing", "RESTful & secure API development", "Authentication & session security"],
    iconName: "Code2"
  },
  {
    id: "hosting-maintenance",
    number: "05",
    title: "Cloud Deployment & DevOps",
    description: "Production infrastructure engineering, automated CI/CD pipelines, SSL provisioning, custom domain routing, performance monitoring, and continuous system maintenance.",
    highlights: ["Vercel, AWS & modern cloud setup", "Custom domain & DNS configuration", "Automated deployment & SSL security", "Continuous technical maintenance"],
    iconName: "Server"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    phaseCode: "SCENE // DISCOVERY",
    title: "DISCOVER & AUDIT",
    description: "Deconstructing the core business objective, user needs, and architectural constraints into a clear technical blueprint.",
    deliverables: "Requirements specification, user journeys & technical milestone plan"
  },
  {
    number: "02",
    phaseCode: "SCENE // BLUEPRINT",
    title: "ARCHITECT & DESIGN",
    description: "Establishing schema models, interface design systems, component hierarchies, and integration contracts before writing code.",
    deliverables: "Wireframes, system architecture diagrams & schema definitions"
  },
  {
    number: "03",
    phaseCode: "SCENE // PRODUCTION",
    title: "ENGINEER & TEST",
    description: "Full-stack development executed with strict type safety, modular design patterns, test coverage, and continuous client preview builds.",
    deliverables: "Production-ready codebase, automated test suites & staging review"
  },
  {
    number: "04",
    phaseCode: "SCENE // PREMIERE",
    title: "DEPLOY & SCALE",
    description: "Production release on global edge networks, SSL verification, telemetry monitoring, and ongoing post-launch maintenance.",
    deliverables: "Live production deployment, documentation & ongoing support"
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend & Core",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript (ESNext)" },
      { name: "React" },
      { name: "Next.js (App Router)" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Java" },
      { name: "RESTful APIs" }
    ]
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "Prisma ORM" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Database Modeling" }
    ]
  },
  {
    category: "Payments & Integration",
    skills: [
      { name: "Paystack" },
      { name: "M-Pesa / Daraja API" },
      { name: "Stripe" },
      { name: "Webhook Pipelines" }
    ]
  },
  {
    category: "DevOps & Workflow",
    skills: [
      { name: "Git & GitHub" },
      { name: "Vercel & Edge Network" },
      { name: "CI / CD Pipelines" },
      { name: "Linux / Cloud Servers" }
    ]
  }
];
