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
    "jobTitle": "Software Developer & Systems Builder",
    "description": "Gift Mukhwana is a mobile, location-independent Software Developer specializing in custom business systems, full-stack web applications, and seamless payment integrations.",
    "sameAs": [
      "https://github.com/zawadi-web"
    ],
    "knowsAbout": [
      "Software Development",
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Paystack Payment Integration",
      "M-Pesa / Daraja Integration",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful API Architecture",
      "Cloud Deployment"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://giftmukhwana.co.ke/#website",
    "url": "https://giftmukhwana.co.ke/",
    "name": "Gift Mukhwana | Software Developer & Systems Builder",
    "description": "Portfolio website of Gift Mukhwana, a mobile, location-independent Software Developer and Systems Builder.",
    "publisher": {
      "@id": "https://giftmukhwana.co.ke/#person"
    }
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://giftmukhwana.co.ke/#webpage",
    "url": "https://giftmukhwana.co.ke/",
    "name": "Gift Mukhwana | Software Developer & Systems Builder",
    "description": "Official portfolio of Gift Mukhwana, Software Developer building custom business systems, full-stack web applications, and payment integrations.",
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
