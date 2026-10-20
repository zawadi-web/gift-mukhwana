import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giftmukhwana.co.ke"),
  title: "Gift Mukhwana | Software Developer & Systems Builder",
  description:
    "Gift Mukhwana is a mobile, location-independent Software Developer specializing in high-impact custom business systems, full-stack web applications, and frictionless payment integrations. Available for remote collaboration worldwide.",
  keywords: [
    "Gift Mukhwana",
    "Software Developer",
    "Full-Stack Developer",
    "Remote Software Developer",
    "Systems Architect",
    "Gift Mukhwana portfolio",
    "Custom Business Systems",
    "Web Applications",
    "Next.js Developer",
    "TypeScript Developer",
    "Payment Integrations",
    "Paystack Integration",
    "M-Pesa API",
    "PostgreSQL",
    "Prisma ORM",
  ],
  authors: [{ name: "Gift Mukhwana", url: "https://giftmukhwana.co.ke/" }],
  creator: "Gift Mukhwana",
  alternates: {
    canonical: "https://giftmukhwana.co.ke/",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Gift Mukhwana | Software Developer & Systems Builder",
    description:
      "Gift Mukhwana is a mobile, location-independent Software Developer building resilient custom business systems, full-stack web applications, and payment integrations. Available for remote collaboration worldwide.",
    url: "https://giftmukhwana.co.ke/",
    siteName: "Gift Mukhwana — Software Studio",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Gift Mukhwana - Software Developer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Mukhwana | Software Developer & Systems Builder",
    description:
      "Gift Mukhwana is a location-independent Software Developer building resilient custom business systems, full-stack web applications, and payment integrations.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3COypc3x4WLEn88ql2QV6rHARy-EQv0HkqAeJ2x7LKg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#090D14] text-[#F1F5F9] selection:bg-[#FF6B35] selection:text-[#090D14]"
      >
        {children}
      </body>
    </html>
  );
}
