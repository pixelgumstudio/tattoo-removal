import PageFile from "./pageFile";

export async function generateMetadata({ params, searchParams }) {
  const { name } = params || {};
  const postal = typeof searchParams?.postal === "string" && searchParams.postal.trim() !== ""
  ? searchParams.postal
  : "N/A";

  if (!name) {
    return {
      title: "Error | Tattoo Removal Services",
      description: "Invalid clinic name provided.",
    };
  }

  const brandName = name
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

  const rough_description = `Find top-rated tattoo removal services across the United States at TattooRemovalPlace. Compare clinics, explore reviews, and book affordable laser removal treatments—all in one place.`;

  const title = `${brandName} | Tattoo removal services`;
const description = rough_description.slice(0, 150).trim().replace(/\s+\S*$/, "") + "...";
  const url = `https://tattooremoval.com/clinic/${name}?postal=${postal}`;
  const image = "https://tattooremoval.com/seo-card.png";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        es: url,
        fr: url,
      },
    },
    icons: {
      icon: "https://tattooremoval.com/icon.png",
    },
    openGraph: {
      type: "website",
      siteName: "TattooRemovalPlace",
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      site: url,
      title,
      description,
      images: [{ url: image }],
    },
  };
}

const Page = () => <PageFile />;
export default Page;
