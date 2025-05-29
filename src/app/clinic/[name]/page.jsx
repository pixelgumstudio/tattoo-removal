import { fetchPagesBySlug } from '@/lib/api/store';
import PageFile from './pageFile';

export async function generateMetadata({ params, searchParams }) {
 const { name } = await  params;
  const postal = await searchParams?.postal;
  const decodedSlug = decodeURIComponent(name);

  const store = await fetchPagesBySlug(decodedSlug, postal);
console.log("first page: ",store)
  const fallbackDescription =
    'Find top-rated tattoo removal services across the United States at TattooRemovalPlace.';
  const storeName = decodedSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const description =
    (store?.description || fallbackDescription).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';

  const title = `${storeName}${store?.city ? ` in ${store.city}` : ''}${store?.state ? ` ${store.state}` : ''}`;

  const url = `https://tattooremovalplace.com/clinic/${name}${postal ? `?postal=${encodeURIComponent(postal)}` : ''}`;
  const image = store?.photo || 'https://tattooremovalplace.com/default-og-image.jpg';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: store?.name || storeName,
    image,
    description: store?.description || fallbackDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: store?.city || "N/A",
      addressRegion: store?.state || "N/A",
      postalCode: postal || "N/A",
      addressCountry: "US"
    },
    url
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

export default async function Page({ params, searchParams }) {
 const { name } = await params;
  const postal = await searchParams?.postal;
  const decodedSlug = decodeURIComponent(name);

  const store = await fetchPagesBySlug(decodedSlug, postal);
console.log("second page: ",store)

  return <PageFile clinic={store} />;
}
