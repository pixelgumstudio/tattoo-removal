
import { Metadata } from "next";
import PageFile from './[state]/pageFile';
import { PageInterface } from "@/types/main";


const data: PageInterface ={
  title: "Tattooremovalplace | Tattoo Removal services  by State in the U.S.",
description: "Find top-rated tattoo removal services across states in the United States at TattooRemovalPlace. Compare clinics, explore reviews, and book affordable laser removal treatments—all in one place.",
url: "https://Tattooremovalplace.com/clinic-by-state",
image: "https://Tattooremovalplace.com/seo-card.png"
}
export const metadata: Metadata = {
  

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
};


const Page = () => {

return <PageFile />
};

export default Page;