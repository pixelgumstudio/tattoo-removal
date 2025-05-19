'use client'; // if this is a client component

import Head from 'next/head';
import { Clinic } from "@/types/store"
export default function ClinicSchema({ store }: { store: Clinic }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TattooClinic",
    "name": store.name,
    "image": store.photo,
    "description": store.description,
    "url": `https://tattooremovalplace.com/clinic/${store.name}?postal=${store.postal_code}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": store.city,
      "addressRegion": store.state,
      "postalCode": store.postal_code,
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue":  4.5,
      "reviewCount": store.reviews || 17
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}  />
    </Head>
  );
}
