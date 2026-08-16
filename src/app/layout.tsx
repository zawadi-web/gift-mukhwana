import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Gift Mukhwana — Software Developer | Custom Business Systems & Web Applications",
  description:
    "Gift Mukhwana is a Software Developer based in Chuka, Kenya. Specializing in custom business systems, web applications, payment integrations (Paystack & M-Pesa), and professional business websites.",
  keywords: [
    "Gift Mukhwana",
    "Software Developer Kenya",
    "Software Developer Chuka",
    "Custom Business Systems",
    "Web Developer Kenya",
    "Payment Integration Kenya",
    "Paystack Integration",
    "M-Pesa Integration",
    "Next.js Developer Kenya",
    "Full-Stack Developer Kenya",
  ],
  authors: [{ name: "Gift Mukhwana" }],
  creator: "Gift Mukhwana",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Gift Mukhwana — Software Developer",
    description:
      "I build digital solutions that help businesses work smarter. Custom business systems, web applications, and payment integrations.",
    url: "https://gift-mukhwana.dev",
    siteName: "Gift Mukhwana — Software Developer",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Gift Mukhwana Logo" }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Mukhwana — Software Developer",
    description:
      "I build digital solutions that help businesses work smarter. Custom business systems, web applications, and payment integrations.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      <body
        className="min-h-full flex flex-col bg-[#111E4A] text-[#F7F6F2] selection:bg-[#B8962E] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
