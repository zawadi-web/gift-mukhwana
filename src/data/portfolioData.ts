export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features?: string[];
  url?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
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
}

export interface TechCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Gift Mukhwana",
  title: "Software Developer",
  tagline: "I build digital solutions that help businesses work smarter.",
  location: "Chuka, Tharaka-Nithi County, Kenya",
  locationShort: "Chuka, Kenya",
  phone: "0769047490",
  phoneFormatted: "+254 769 047 490",
  email: "giftmukhwana@gmail.com",
  github: "github.com/zawadi-web",
  githubUrl: "https://github.com/zawadi-web",
  whatsappUrl: "https://wa.me/254769047490?text=Hi%20Gift,%20I'd%20like%20to%20discuss%20a%20software%20project.",
  availability: "Based in Chuka, Kenya · Available for freelance & contract projects",
  heroSubtitle: "From professional websites and custom business systems to payment integrations and web applications, I turn real business problems into practical digital solutions.",
  aboutText: `I’m Gift Mukhwana, a software developer and Computer Science student based in Kenya. I started by learning how software works and gradually moved into building real digital products and solutions for businesses. Today, I enjoy taking a real-world problem, understanding how a business operates, and turning that problem into software people can actually use. My focus is not simply writing code. It is building useful solutions that create value.`,
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
    name: "Pendo Dating Platform",
    category: "Full-Stack Web Application",
    description: "A full-stack dating platform featuring user authentication, profiles, matching, payments and administration.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Paystack"],
    features: [
      "User authentication & profile management",
      "Dynamic matching logic & filter system",
      "Paystack payment gateway integration",
      "Administrative dashboard & control panel"
    ]
  },
  {
    id: "eska-metalworks",
    name: "ESKA Metalworks",
    category: "Corporate Business Website",
    description: "A professional business website created to establish a stronger digital presence for a metalworks business.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Mobile-optimized product showcase",
      "Custom quote inquiry workflow",
      "SEO-structured business presentation",
      "High-speed responsive layout"
    ]
  },
  {
    id: "musamaths",
    name: "MusaMaths",
    category: "EdTech Learning Platform",
    description: "An online mathematics learning platform designed to provide students with a digital learning experience.",
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
    name: "Smart Deal Furniture",
    category: "Digital Catalog Concept",
    description: "A digital presence concept developed for a furniture business.",
    technologies: ["React", "JavaScript", "CSS3"],
    features: [
      "Product collection showcase",
      "WhatsApp direct order inquiry flow",
      "Category filtering & grid display",
      "Clean commercial brand presentation"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    description: "Professional, responsive websites designed to help businesses establish credibility and attract customers online.",
    highlights: ["Mobile-first responsive design", "SEO optimized structure", "Fast loading speeds", "Lead capture forms"],
    iconName: "Globe"
  },
  {
    id: "custom-systems",
    number: "02",
    title: "Custom Business Systems",
    description: "Digital systems tailored around the way a business actually operates — including dashboards, management workflows and internal tools.",
    highlights: ["Internal management tools", "Operational dashboards", "User role management", "Automated workflows"],
    iconName: "LayoutDashboard"
  },
  {
    id: "payment-integration",
    number: "03",
    title: "Payment Integration",
    description: "Integrate digital payment solutions into websites and applications to make receiving payments simpler and more efficient.",
    highlights: ["Paystack integration", "M-Pesa / Daraja API integration", "Automated transaction callbacks", "Secure checkout flows"],
    iconName: "CreditCard"
  },
  {
    id: "web-applications",
    number: "04",
    title: "Web Applications",
    description: "Build custom web applications around specific business ideas, workflows and customer needs.",
    highlights: ["SaaS & web products", "Database architecture", "RESTful API development", "Authentication & Security"],
    iconName: "Code2"
  },
  {
    id: "hosting-maintenance",
    number: "05",
    title: "Hosting & Maintenance",
    description: "Deployment, domains, SSL, updates and ongoing technical support.",
    highlights: ["Vercel & cPanel setup", "Custom domain configuration", "SSL security certificates", "Ongoing technical maintenance"],
    iconName: "Server"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, the problem and what the solution needs to achieve.",
    deliverables: "Business requirements audit & project objective mapping"
  },
  {
    number: "02",
    title: "PLAN",
    description: "Define the features, user flow, technology and project scope before development begins.",
    deliverables: "Architecture breakdown, design layout & milestone schedule"
  },
  {
    number: "03",
    title: "BUILD",
    description: "Develop, test and refine the solution with a focus on usability, security and reliability.",
    deliverables: "Clean code implementation, rigorous testing & progress previews"
  },
  {
    number: "04",
    title: "LAUNCH",
    description: "Deploy the finished product and provide the support needed after launch.",
    deliverables: "Live server deployment, domain setup & post-launch support"
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend & Core",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" }
    ]
  },
  {
    category: "Backend & Server",
    skills: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Java" }
    ]
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "MySQL" }
    ]
  },
  {
    category: "Payments & FinTech",
    skills: [
      { name: "Paystack" },
      { name: "M-Pesa / Daraja" }
    ]
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "cPanel" }
    ]
  }
];
