import clsx from "clsx";
import DescriptionCard from "../shared/cards/DescriptionCard";
import { Subheading, Paragraph } from "../ui/typography";
import { useStores } from "@/lib/hooks/useStore";
import { Suspense } from "react";
import DescriptionCardSkeleton from "../shared/loader/DescriptionCardSkeleton";

interface ServiceProps {
  pageSize?: number;
    state?: string;
    city?: string;
    title?: string;
    description?: string;
    alignment?: "left" | "center" | "right";
  }

  


export default function TopServices({
  pageSize = 6,
  state,
  city,
    title,
    description,
    alignment = "left",
  }: ServiceProps) {
    const textAlign = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
      }
      const page = 1;
      const filter = state ? `state=${state}` : city ? `city=${city}` : "";

  const { data: clinics, isLoading, isError } = useStores(page, pageSize, filter);

  if (isError) return <p>Something went wrong!</p>;
  return (
     <section className="w-full px-4 md:px-6 lg:px-10 py-12">
            
          <div className={"w-full max-w-[1152px] mx-auto"}>
          <div className={clsx("flex flex-col mb-8 max-w-md", textAlign[alignment])}>
            {title && (
              <Subheading className="text-[24px]">
                {title}
              </Subheading>
            )}
            {description && <Paragraph size="base">{description}</Paragraph>}
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading
    ? Array.from({ length: pageSize }).map((_, i) => (
        <DescriptionCardSkeleton key={i} />
      ))
    : clinics?.stores.map((clinic, i) => (
        <Suspense fallback={<DescriptionCardSkeleton />} key={i}>
          <DescriptionCard
            title={clinic.name}
            description={clinic.description}
            address={clinic.full_address}
            price={clinic?.price_range || "N/A"}
            tags={clinic?.tags || []}
            image={clinic.logo || "/default-image.webp"}
            reviews={clinic.reviews || "N/A"}
            postal={clinic.postal_code || "N/A"}
          />
        </Suspense>
      ))}
        </div>
      </div>
    </section>
  );
}
