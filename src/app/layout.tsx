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
  title: "Gift Mukhwana | Web Developer & Software Developer in Kenya",
  description:
    "Gift Mukhwana is a professional Web Developer and Software Developer based in Kenya. Specializing in custom websites, high-performance web applications, digital solutions, business systems, and payment integrations (Paystack & M-Pesa).",
  keywords: [
    "Gift Mukhwana",
    "Gift Mukhwana Kenya",
    "Gift Mukhwana web developer",
    "Gift Mukhwana software developer",
    "Gift Mukhwana portfolio",
    "Gift Mukhwana website",
    "Web Developer Kenya",
    "Software Developer Kenya",
    "Web Developer Chuka",
    "websites",
    "web applications",
    "digital solutions",
    "Custom Business Systems",
    "Payment Integration Kenya",
    "Paystack Integration",
    "M-Pesa Integration",
    "Next.js Developer Kenya",
    "Full-Stack Developer Kenya",
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
    title: "Gift Mukhwana | Web Developer & Software Developer in Kenya",
    description:
      "Gift Mukhwana is a Web Developer & Software Developer in Kenya building custom websites, web applications, business systems, and payment integrations.",
    url: "https://giftmukhwana.co.ke/",
    siteName: "Gift Mukhwana — Web Developer & Software Developer",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Gift Mukhwana - Web & Software Developer in Kenya" }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Mukhwana | Web Developer & Software Developer in Kenya",
    description:
      "Gift Mukhwana is a Web Developer & Software Developer in Kenya building custom websites, web applications, business systems, and payment integrations.",
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
        className="min-h-full flex flex-col bg-[#111E4A] text-[#F7F6F2] selection:bg-[#B8962E] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
