import { Metadata } from 'next';
import PageFile from './pageFile';
import { PageInterface } from '../../../../types';

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  const { name } = params;

  const capitalizedLang = (name || "").replace(/-/g, " "); 
  const brandName = capitalizedLang.charAt(0).toUpperCase() + capitalizedLang.slice(1);
  
  const data: PageInterface ={
    title: `${brandName}  | Tattoo removal services`,
  description: `Find top-rated tattoo removal services across the United States at TatA tattoo is a lasting type of body art created by injecting inks and pigments into your skin. Tattoo removal involves a process to eliminate this enduring ink from your body. tooRemovalPlace. Compare clinics, explore reviews, and book affordable laser removal treatments—all in one place.`,
  url: `localhost/clinic/${name}`,
  image: "https://wordiebox.com/seo-card.png"
  }

  return {
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
}

const Page = () => {
  return <PageFile />;
};

export default Page;
