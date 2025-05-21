import PageFile from './pageFile';

export const dynamic = 'force-dynamic';

const fetchPageData = async ({ slug, postal }) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseURL) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined in the environment');
  }

  try {
    const response = await fetch(`${baseURL}/api/stores/name/${slug}?postal=${postal}`);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};

export async function generateMetadata({ params, searchParams }) {
  const name = params?.name || '';
  const postal = searchParams?.postal || 'N/A';

  const decodedSlug = decodeURIComponent(name);
  const store = await fetchPageData({ slug: decodedSlug, postal });

  const fallbackDescription = 'Find top-rated tattoo removal services across the United States at TattooRemovalPlace.';
  const description = (store?.description || fallbackDescription).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';

  const title = `${decodedSlug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} | Tattoo removal services`;
  const url = `https://tattooremovalplace.com/clinic/${name}?postal=${postal}`;
  const image = store?.photo || 'https://tattooremovalplace.com/seo-card.png';

  console.log(image)
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
      url,
      images: [{ url: image }],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page() {
  return <PageFile />;
}
