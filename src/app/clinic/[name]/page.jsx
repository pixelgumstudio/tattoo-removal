import PageFile from './pageFile';
import { fetchStoreByName } from '@/lib/api/store';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params, searchParams }) {
  const name = params?.name || '';
  const postal = searchParams?.postal || '';
  const decodedSlug = decodeURIComponent(name);

  let store = null;
  try {
    store = await fetchStoreByName(decodedSlug, postal);
  } catch (error) {
    console.error('Error fetching store:', error);
  }

  const fallbackDescription = 'Find top-rated tattoo removal services across the United States at TattooRemovalPlace.';
  const storeName = decodedSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const description = (store?.description || fallbackDescription).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';

  const title = `${storeName} | Tattoo Removal Services`;
  const url = `https://tattooremovalplace.com/clinic/${name}${postal ? `?postal=${postal}` : ''}`;
  const image = store?.photo || 'https://tattooremovalplace.com/default-og-image.jpg';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": store?.title || storeName,
    "image": image,
    "description": store?.description || fallbackDescription,
    "address": {
      "@type": "PostalAddress",
      "postalCode": postal || "N/A"
    },
    "url": url
  };

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: 'TattooRemovalPlace',
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    other: {
      'script:ld+json': JSON.stringify(structuredData),
    },
  };
}

export default async function Page() {
  return <PageFile />;
}
