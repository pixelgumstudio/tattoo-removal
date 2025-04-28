
import { Metadata } from "next";
import PageFile from './pageFile';
import { PageInterface } from "../../../types";


const data: PageInterface ={
  title: "Tattoo Removal Place | Tattoo Removal Clinics by city in the U.S.",
description: "Find top-rated tattoo removal services across states in the United States at TattooRemovalPlace. Compare clinics, explore reviews, and book affordable laser removal treatments—all in one place.",
url: "https://wordiebox.com/clinic-by-city",
image: "https://wordiebox.com/seo-card.png"
}
export const metadata: Metadata = {
  

  title: data.title,
  description: data.description,
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Wordiebox",
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