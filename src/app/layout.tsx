import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import { PageInterface } from "../../types";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const data: PageInterface = {
  title:
    "Tattoo Removal Place -  Trusted Tattoo Removal Services Across the U.S",
  description:
    "Find top-rated tattoo removal services across the United States at TattooRemovalPlace. Compare clinics, explore reviews, and book affordable laser removal treatments—all in one place.",
  url: "https://wordiebox.com/clinic",
  image: "https://wordiebox.com/seo-card.png",
};
export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  icons: {
    icon: "https://wordiebox.com/icon.png", // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Wordiebox",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
