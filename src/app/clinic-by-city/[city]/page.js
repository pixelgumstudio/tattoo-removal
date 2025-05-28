// app/clinic-by-city/[city]/page.js
export const dynamic = 'force-dynamic';

import PageFile from './pageFile';

export async function generateMetadata({ params, searchParams }) {
  const { city: cities } = await params;
   const state = await searchParams?.state;
  const city = decodeURIComponent(cities);
  const states = decodeURIComponent(state.trim());

  const data = {
    title: `TattooRemovalPlace - Tattoo Removal in ${city} ${states}, US`,
    description: `Discover the best tattoo removal services in ${city} ${states}, US. Compare clinics, explore reviews, and book safe, affordable tattoo removal treatments with TattooRemovalPlace.`,
    url: `https://tattooremoval.com/clinic-by-city/${cities}?state=${state}`,
    image: '/city.webp',
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.title,
    image: data.image,
    description: data.description,
    address: {
      "@type": "Address",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    url: data.url,
  };

  return {
    title: data.title,
    description: data.description,
    icons: {
      icon: data.image,
    },
    openGraph: {
      type: 'website',
      siteName: 'TattooRemovalPlace',
      title: data.title,
      description: data.description,
      url: data.url,
      images: [{ url: data.image }],
    },
    twitter: {
      card: 'summary_large_image',
      site: data.url,
      title: data.title,
      description: data.description,
      images: [{ url: data.image }],
    },
    alternates: {
      canonical: data.url,
    },
    other: {
      'script:ld+json': JSON.stringify(structuredData),
    },
  };
}

export default function Page({ params, searchParams }) {
  return <PageFile city={params.city} state={searchParams.state} />;
}
