/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Subheading, Paragraph } from "../ui/typography";
import FeatureCard from "../shared/cards/FeaturedCard";
import clsx from "clsx";
import Image from "next/image";



interface PageHeaderProps {
    title: string;
    description?: string;
    align?: "left" | "center" | "right";
   className?: string;
   backgroundImage?: string;
  }

const features = [
  {
    icon: "📍",
    title: "Find Nearby Tattoo Removal",
    description:
      "We’ve compiled a directory of over 5,000 tattoo removal centres across the US, all in one convenient place.",
  },
  {
    icon: "💵",
    title: "Affordable Tattoo Removal",
    description:
      "We’ve carefully selected tattoo removal services that offer exceptional value, allowing you to make cost-effective decisions.",
  },
  {
    icon: "🎯",
    title: "Tattoo Removal Focus",
    description:
      "Our sole focus is on providing top-tier tattoo removal services from across the country, ensuring outstanding results.",
  },
  {
    icon: "👷",
    title: "Expert Removal Guidance",
    description:
      "We provide personalised advice and insights from industry professionals to guide you through the tattoo removal process from start to finish.",
  },
];

const Features = ({
    title,
    description,
    className,
    align = "left",
    backgroundImage = "/images/pageBanner.webp", // fallback default
}: PageHeaderProps) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };
  return (
      <section
         className={clsx(
           "relative w-full overflow-hidden px-4 md:px-8 py-4 md:py-20",
           className
         )}
       >
             <div className="absolute inset-0 z-0">
             <Image
    src={backgroundImage}
    alt="Background"
    fill
    className="object-cover brightness-[0.4]"
    priority
  />
           </div>
      <div className={clsx("bg-white z-10 relative max-w-[1152px] mx-auto px-4 md:px-8 py-15", alignment[align], className)}>
        <Subheading align="center" className="mb-10 max-w-[600px] mx-auto">
          {title}
        </Subheading>
         {description && <Paragraph  align="center" >{description}</Paragraph>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
