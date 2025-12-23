"use client";
import Script from "next/script";

interface SeoJsonLdProps {
  project: {
    title: string;
    price: number;
    description: string;
    images: string[];
    location: string;
  };
}

export default function SeoJsonLd({ project }: SeoJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.title,
    description: project.description,
    image: project.images.map(
      (img) => `${process.env.NEXT_PUBLIC_SITE_URL}${img}`
    ),
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: project.price,
      availability: "https://schema.org/InStock",
    },
    brand: {
      "@type": "Brand",
      name: "Hithaus Banya",
    },
    areaServed: project.location,
  };

  return <Script type="application/ld+json">{JSON.stringify(jsonLd)}</Script>;
}
