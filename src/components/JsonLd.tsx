import React from "react";

export const JsonLd: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://giftmukhwana.co.ke/#person",
    "name": "Gift Mukhwana",
    "givenName": "Gift",
    "familyName": "Mukhwana",
    "url": "https://giftmukhwana.co.ke/",
    "image": "https://giftmukhwana.co.ke/logo.png",
    "jobTitle": "Web Developer & Software Developer",
    "description": "Gift Mukhwana is a Web Developer & Software Developer based in Kenya, specializing in custom business systems, web applications, websites, and payment integrations.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chuka",
      "addressRegion": "Tharaka-Nithi County",
      "addressCountry": "KE"
    },
    "sameAs": [
      "https://github.com/zawadi-web"
    ],
    "knowsAbout": [
      "Web Development",
      "Software Development",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Paystack Payment Integration",
      "M-Pesa Integration",
      "PostgreSQL",
      "Prisma"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://giftmukhwana.co.ke/#website",
    "url": "https://giftmukhwana.co.ke/",
    "name": "Gift Mukhwana | Web Developer & Software Developer in Kenya",
    "description": "Portfolio website of Gift Mukhwana, a Web Developer & Software Developer in Kenya.",
    "publisher": {
      "@id": "https://giftmukhwana.co.ke/#person"
    }
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://giftmukhwana.co.ke/#webpage",
    "url": "https://giftmukhwana.co.ke/",
    "name": "Gift Mukhwana | Web Developer & Software Developer in Kenya",
    "description": "Official website and portfolio of Gift Mukhwana, a Web Developer & Software Developer in Kenya.",
    "isPartOf": {
      "@id": "https://giftmukhwana.co.ke/#website"
    },
    "about": {
      "@id": "https://giftmukhwana.co.ke/#person"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
    </>
  );
};
