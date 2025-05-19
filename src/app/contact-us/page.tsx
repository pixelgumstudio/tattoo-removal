
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
url: "",
image: ""
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