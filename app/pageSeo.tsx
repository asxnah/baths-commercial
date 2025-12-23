import Script from "next/script";
import { projects } from "@data/baths";

export function HomeSeo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/baths/${p.id}`,
    })),
  };

  return <Script type="application/ld+json">{JSON.stringify(jsonLd)}</Script>;
}
