
import { Metadata } from "next";
import PageFile from './[state]/pageFile';
import { PageInterface } from "@/types/main";


const data: PageInterface ={
  title: "Tattooremovalplace | Tattoo Removal services  by State in the U.S.",
description: "Find top-rated tattoo removal services across states in the United States at TattooRemovalPlace. Compare clinics, explore reviews, and book affordable laser removal treatments—all in one place.",
url: "https://tattooremovalplace.com/clinic-by-state",
image: "/state.webp"
}
export const metadata: Metadata = {
  

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
};


const Page = () => {

return <PageFile state="" />
};

export default Page;