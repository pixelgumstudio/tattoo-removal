export const dynamic = 'force-dynamic';

import { Metadata } from "next";
import PageFile from './pageFile';
import { PageInterface } from "@/types/main";



export async function generateMetadata({ params }) {
  const { state } = params || {};

  if (!state) {
    return {
      title: "Error | Tattoo Removal Services",
      description: "Invalid clinic name provided.",
    };
  }

  const data ={
    title: `Tattooremovalplace -  Tattoo Removal in ${state}, US`,
    description: `Discover top-rated tattoo removal services near ${state}, US. Compare clinics, explore reviews, and book safe, affordable laser removal treatments with TattooRemovalPlace.`,
    url: `https://tattooremoval.com/clinic-by-state/${state}`,
  image: "https://Tattooremovalplace.com/seo-card.png"
  }
  return {
  title: data.title,
  description: data.description,
  icons: {
    icon: 'https://Tattooremovalplace.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Tattooremovalplace",
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
}
};


const Page = () => {

return <PageFile />
};

export default Page;