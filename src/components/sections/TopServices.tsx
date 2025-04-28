import clsx from "clsx";
import DescriptionCard from "../shared/cards/DescriptionCard";
import { Subheading, Paragraph } from "../ui/typography";
import { useStores } from "@/lib/hooks/useStore";

interface ServiceProps {
    title?: string;
    description?: string;
    alignment?: "left" | "center" | "right";
  }

  


export default function TopServices({
    title,
    description,
    alignment = "left",
  }: ServiceProps) {
    const textAlign = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
      }
  const { data: clinics, isLoading, isError } = useStores(1, 6);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  return (
     <section className="w-full px-4 md:px-6 lg:px-10 py-12">
            
          <div className={"w-full max-w-[1152px] mx-auto"}>
          <div className={clsx("flex flex-col mb-8 max-w-md", textAlign[alignment])}>
            {title && (
              <Subheading>
                {title}
              </Subheading>
            )}
            {description && <Paragraph>{description}</Paragraph>}
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinics?.data.map((clinic, i) => (
            <DescriptionCard
              key={i}
              title={clinic.name}
              description={clinic.description}
              address={clinic.full_address}
              price={clinic?.price || "N/A"}
              tags={clinic?.tags || []}
              image={clinic.logo || "/default-image.webp"}
              reviews={clinic.reviews ||  "N/A"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
