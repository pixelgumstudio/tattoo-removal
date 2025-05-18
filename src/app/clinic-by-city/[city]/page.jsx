// app/clinic-by-city/[city]/page.tsx
export const dynamic = 'force-dynamic';

import PageFile from './pageFile';

export async function generateMetadata({
  params,
  searchParams,
}) {
  const city = decodeURIComponent(params.city);
  const state = typeof searchParams?.state === 'string' ? decodeURIComponent(searchParams.state.trim()) : null;

  if (!city || !state) {
    return {
      title: "TattooRemovalPlace - Tattoo Removal Clinics Near You",
      description: "Find and compare top-rated tattoo removal services in your area.",
    };
  }

  const data = {
    title: `Tattooremovalplace - Tattoo Removal near ${city}, ${state}, US`,
    description: `Discover top-rated tattoo removal services near ${city}, ${state}, US. Compare clinics, explore reviews, and book safe, affordable laser removal treatments with TattooRemovalPlace.`,
    url: `https://tattooremoval.com/clinic-by-city/${encodeURIComponent(city)}?state=${encodeURIComponent(state)}`,
    image: "https://tattooremoval.com/seo-card.png",
  };

  return {
    title: data.title,
    description: data.description,
    icons: {
      icon: 'https://tattooremoval.com/icon.png',
    },
    openGraph: {
      type: "website",
      siteName: "Tattooremovalplace",
      title: data.title,
      description: data.description,
      url: data.url,
      images: [{ url: data.image }],
    },
    twitter: {
      card: "summary_large_image",
      site: data.url,
      title: data.title,
      description: data.description,
      images: [{ url: data.image }],
    },
  };
}

const Page = () => {
  return <PageFile />;
};

export default Page;
