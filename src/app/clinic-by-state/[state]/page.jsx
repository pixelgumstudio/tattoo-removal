export const dynamic = 'force-dynamic';

import { Metadata } from "next";
import PageFile from './pageFile';
import { PageInterface } from "@/types/main";



export async function generateMetadata({ params }) {
  const { state: states } = await params || {};

  if (!states) {
    return {
      title: "Error | Tattoo Removal Services",
      description: "Invalid clinic name provided.",
    };
  }
const state = decodeURIComponent(states)
  const data ={
    title: `Best Tattoo Removal in ${state}, US`,
    description: `Discover the best  tattoo removal services in ${state}, US. Compare clinics, explore reviews, and book safe, affordable tattoo removal treatments with TattooRemovalPlace.`,
    url: `https://tattooremovalplace.com/clinic-by-state/${states}`,
  image: "/state.webp"
  }

    const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.title,
    image: data.image,
    description: data.description,
    address: {
      "@type": "Address",
      addressRegion: state,
      addressCountry: "US",
    },
    url: data.url,
  };

  return {
  title: data.title,
  description: data.description,
  icons: {
    icon: data.image,  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Tattoo removal place",
    title: data.title,
    description: data.description,
    url: data.url,
    images: [{
      url: data.image,
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: data.url,
    title: data.title,
    description: data.description,
    images: [{
      url: data.image,
    }],
  },
    alternates: {
      canonical: data.url,
    },
    other: {
      'script:ld+json': JSON.stringify(structuredData),
    }
}
};


const Page = async ({ params }) => {
  const {state} = params
return <PageFile state={state} />
};

export default Page;