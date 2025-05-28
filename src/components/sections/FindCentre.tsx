import React, {Suspense} from "react";
import clsx from "clsx";
import LocationCard from "../shared/cards/LocationCard";
import { Subheading, Paragraph } from "../ui/typography";
import { CentreProps } from "../../../types";
import { useFetchStates } from "@/lib/hooks/useStore";
import CardSkeleton from "../shared/loader/CardSkeleton";
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

  if (isError) return <p>Something went wrong!</p>;

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 py-12">
      <div className="w-full max-w-[1152px] mx-auto">
        <div className={clsx("flex flex-col mb-8", margin[position])}>
          {title && (
            <Subheading
              className={clsx("max-w-[500px] line-clamp-2", margin[position])}
              align={position}
            >
              {title}
            </Subheading>
          )}
          {description && (
            <Paragraph size="lg" align={position}>
              {description}
            </Paragraph>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            : clinics?.map((state, index) => {
                const locationCardProps = {
                  title: state.title,
                  locations: state.locations,
                  services: state.services,
                  backgroundImage: "/images/states/alabama.webp",
                  link: `/clinic-by-state/${state.title}`,
                };
                return (
                  <Suspense fallback={<CardSkeleton />} key={index}>
                    <LocationCard {...locationCardProps} />
                  </Suspense>
                );
              })}
        </div>
      </div>
    </section>
  );
}
