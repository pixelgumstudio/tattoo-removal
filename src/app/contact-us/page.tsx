
import { Metadata } from "next";
import PageFile from "./pageFile";

interface Page {
title: string,
description: string,
url: string,
image: string,
}

const data: Page ={
  title: "Tattooremovalplace | contact us",
description: `For any questions, inquiries, or collaborations, please use the form below to contact us. You may also email us directly at < a href="mailto:pixelgumstudio@gmail.com">pixelgumstudio@gmail.com</a> . We look forward to hearing from you!`,
url: "https://tattooremovalplace.com/contact-us",
image: "https://tattooremovalplace.com/seo-card.png"
}
export const metadata: Metadata = {
  

  title: data.title,
  description: data.description,
  icons: {
    icon: '"https://tattooremovalplace.com/icon.png',  // This sets the favicon for this specific page
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
};


const Page = () => {

return <PageFile />
};

export default Page;