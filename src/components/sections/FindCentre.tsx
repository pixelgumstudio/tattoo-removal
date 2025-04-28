import React from "react";
import clsx from "clsx";
import LocationCard from "../shared/cards/LocationCard";
import { Subheading, Paragraph } from "../ui/typography";
import { CentreProps } from "../../../types";
import { useFetchStates } from "@/lib/hooks/useStore";

// const states = [
//   {
//     title: "Alabama",
//     locations: 10,
//     services: 5,
//     backgroundImage: "/images/alabama.webp",
//     link: "/state/alabama",
//   },
//   {
//     title: "Alaska",
//     locations: 10,
//     services: 5,
//     backgroundImage: "/images/alaska.webp",
//     link: "/state/alaska",
//   },
//   {
//     title: "Alabama",
//     locations: 10,
//     services: 5,
//     backgroundImage: "/images/alabama.webp",
//     link: "/state/alabama",
//   },
//   {
//     title: "Alaska",
//     locations: 10,
//     services: 5,
//     backgroundImage: "/images/alaska.webp",
//     link: "/state/alaska",
//   },
//   {
//     title: "Alabama",
//     locations: 10,
//     services: 5,
//     backgroundImage: "/images/alabama.webp",
//     link: "/state/alabama",
//   },
//   {
//     title: "Alaska",
//     locations: 10,
//     services: 5,
//     backgroundImage: "/images/alaska.webp",
//     link: "/state/alaska",
//   },
//   // ... Add more
// ];

export default function FindCentre({
  title,
  description,
  position = "left",
}: CentreProps) {
  const margin = {
    left: "ml-0",
    center: "mx-auto",
    right: "ml-auto mr-0",
  };

    const { data: clinics, isLoading, isError } = useFetchStates();
  
    if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  return (
    
    <section className="w-full px-4 md:px-6 lg:px-10 py-12">
        
      <div className={"w-full max-w-[1152px] mx-auto"}>
      <div className={clsx("flex flex-col mb-8", margin[position], )}>
        {title && (
          <Subheading className={clsx("max-w-[500px] line-clamp-2", margin[position], )} align={position}>
            {title}
          </Subheading>
        )}
        {description && <Paragraph size="lg" align={position}>{description}</Paragraph>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {clinics && clinics.map((state, index) => {
          const locationCardProps = {
            title: state.title,
            locations: state.locations,
            services: state.services,
            backgroundImage: state.backgroundImage || "/images/default-state.webp",
            link: `/state/${state.title.toLowerCase()}`,
          };
          return <LocationCard key={index} {...locationCardProps} />;
        })}
      </div>
      </div>
    </section>
  );
}
