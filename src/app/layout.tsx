import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import { PageInterface } from "../../types";
import { Providers } from "./providers";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



const data: PageInterface = {
  title:
    "Tattooremovalplace -   Best Tattoo Removal Services in the U.S",
  description:
    "Find the best tattoo removal services across the United States at TattooRemovalPlace in one directory. Compare clinics, explore reviews, and book affordable laser tattoo removal treatments all in one place.",
  url: "https://Tattooremovalplace.com",
  image: "https://Tattooremovalplace.com/seo-card.png",
};
export const metadata: Metadata = {
  
  title: data.title,
  description: data.description,
  icons: {
    icon: "https://Tattooremovalplace.com/icon.png", // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Tattooremovalplace",
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: data.url,
    title: data.title,
    description: data.description,
    images: [
      {
        url: data.image,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
           <GoogleTagManager gtmId="GTM-WLDJF64X" />
        <GoogleAnalytics gaId="G-ZW2093EM66" />
        </Providers>
      </body>
    </html>
  );
}
