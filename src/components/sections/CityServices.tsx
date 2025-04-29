import React from "react";
import clsx from "clsx";
import { Subheading, Paragraph } from "../ui/typography";
import CityServiceCard from "../shared/cards/CityServiceCard";
import { useFetchCities } from "@/lib/hooks/useStore";
import { AsyncStatus } from "./AsynStatus";

interface CentreProps {
  title?: string;
  description?: string;
  alignment?: "left" | "center" | "right";
}

// const states = [
//   {
//     image: "/images/alabama.webp",
//     city: 'Montgomery',
//     state: "Alabama",
//     servicesCount: 10,
//     href: "/state/alabama",
//   },
//   {
//     image: "/images/alabama.webp",
//     city: 'Montgomery',
//     state: "Alabama",
//     servicesCount: 10,
//     href: "/state/alabama",
//   },
//   {
//     image: "/images/alabama.webp",
//     city: 'Montgomery',
//     state: "Alabama",
//     servicesCount: 10,
//     href: "/state/alabama",
//   },
//   // ... Add more
// ];

export default function CityServices({
  title,
  description,
  alignment = "left",
}: CentreProps) {
  const margin = {
    left: "ml-0",
    center: "mx-auto",
    right: "ml-auto mr-0",
  };

     const { data: clinics, isLoading, isError } = useFetchCities();
    
      if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;
        console.log(clinics)
  return (
    <>
      <AsyncStatus isLoading={isLoading} isError={isError} />
      {!isLoading && !isError && (
        <section className="w-full px-4 md:px-6 lg:px-10 py-12">
          <div className={`w-full max-w-[1152px] mx-auto`}>
            <div className={clsx("flex flex-col mb-8", margin[alignment])}>
              {title && (
                <Subheading className={clsx(" max-w-[450px] line-clamp-2", margin[alignment])} align={alignment}>
                  {title}
                </Subheading>
              )}
              {description && <Paragraph size="base" className={clsx("max-w-xxl", margin[alignment])}  align={alignment}>{description}</Paragraph>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {clinics && clinics.map((state, index) => (
                <CityServiceCard
                  key={index}
                  image={state.image}
                  city={state.city}
                  state={state.state}
                  servicesCount={state.servicesCount}
                  href={state.link}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
