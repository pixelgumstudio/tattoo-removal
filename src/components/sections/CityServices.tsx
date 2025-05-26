import React, { Suspense } from "react";
import clsx from "clsx";
import { Subheading, Paragraph } from "../ui/typography";
import CityServiceCard from "../shared/cards/CityServiceCard";
import { useFetchCities } from "@/lib/hooks/useStore";
import { CityServiceCardProps } from "@/types/store";
import CardSkeleton from "../shared/loader/CardSkeleton";

interface CentreProps {
  title?: string;
  description?: string;
  alignment?: "left" | "center" | "right";
}

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


  if (isError) return <p>Something went wrong!</p>;
  return (

        <section className="w-full px-4 md:px-8 py-10 md:py-20">
          <div className={`w-full max-w-[1152px] mx-auto`}>
            <div className={clsx("flex flex-col mb-8", margin[alignment])}>
              {title && (
                <Subheading
                  className={clsx(
                    " max-w-[450px] line-clamp-2",
                    margin[alignment]
                  )}
                  align={alignment}
                >
                  {title}
                </Subheading>
              )}
              {description && (
                <Paragraph
                  size="base"
                  className={clsx("max-w-xxl", margin[alignment])}
                  align={alignment}
                >
                  {description}
                </Paragraph>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))
              : Array.isArray(clinics) &&
                clinics.map((clinic: CityServiceCardProps, index: number) => (
                   <Suspense fallback={<CardSkeleton />} key={index}>
                  <CityServiceCard
                    image={`/images/states/alaska.webp`} // optional: replace with clinic.image
                    city={clinic.city}
                    state={clinic.state}
                    servicesCount={clinic.servicesCount}
                  />
                  </Suspense>
                ))}
            </div>
          </div>
        </section>
  );
}
