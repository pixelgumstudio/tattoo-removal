import PageFile from './pageFile';
import { fetchStoreByName } from '@/lib/api/store';
// import ClinicSchema from './clinicSchema'
 
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params, searchParams }) {
  const name = params?.name || '';
  const postal = searchParams?.postal || 'N/A';

  const decodedSlug = decodeURIComponent(name);

  let store = null;
  try {
    store = await fetchStoreByName(decodedSlug, postal);
  } catch (error) {
    console.error('Error fetching store:', error);
  }

  const fallbackDescription = 'Find top-rated tattoo removal services across the United States at TattooRemovalPlace.';
  const description = (store?.description || fallbackDescription).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';

  const title = `${decodedSlug.replace(/-/g, ' ')} | Tattoo removal services`;
  const url = `https://tattooremovalplace.com/clinic/${name}?postal=${postal}`;
  const image = store?.photo;

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
      images: [{ url: image }],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page() {
 
  return <>
  {/* <ClinicSchema store={store} /> */}
  <PageFile />
  </>;
}
