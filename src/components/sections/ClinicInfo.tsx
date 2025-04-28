// app/clinic/page.tsx or wherever this lives

import ClinicInfoCard from "@/components/shared/cards/ClinicInfoCard";
import { OpeningHours } from "@/components/shared/OpeningHours";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { TextBlock } from "@/components/shared/TextBlock";
import DescriptionCard from "../shared/cards/DescriptionCard";
import { Clinic } from "@/types/store";
import Image from "next/image";


const services = [
    {
      title: "La-croft Tattoo Services",
      description:
        "At La-croft Man Tattoos, we specialize in safe and effective laser tattoo removal solutions tailored to your skin and story.",
      address: "24 Kalakaua Avenue, Honolulu, HI 96815, United States",
      price: "$500 - $2000",
      reviews: "500",
      tags: ["Laser", "Before & After pics", "Eyebrows"],
      image: "/images/serviceCard.webp",
      href: "/service/la-croft-tattoo",
    },
    {
      title: "La-croft Tattoo Services",
      description:
        "At La-croft Man Tattoos, we specialize in safe and effective laser tattoo removal solutions tailored to your skin and story.",
      address: "24 Kalakaua Avenue, Honolulu, HI 96815, United States",
      price: "$500 - $2000",
      reviews: "500",
      tags: ["Laser", "Before & After pics", "Eyebrows"],
      image: "/images/serviceCard.webp",
      href: "/service/la-croft-tattoo",
    },
    {
      title: "La-croft Tattoo Services",
      description:
        "At La-croft Man Tattoos, we specialize in safe and effective laser tattoo removal solutions tailored to your skin and story.",
      address: "24 Kalakaua Avenue, Honolulu, HI 96815, United States",
      price: "$500 - $2000",
      reviews: "500",
      tags: ["Laser", "Before & After pics", "Eyebrows"],
      image: "/images/serviceCard.webp",
      href: "/service/la-croft-tattoo",
    },
  ];

  interface ClinicPageProps {
    store: Clinic;
  }

export default function ClinicPage({store}: ClinicPageProps) {

  console.log("Store data: ", store)

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 py-12">
      <div className="w-full max-w-[1152px] mx-auto grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <TextBlock
            title="About company"
            content={store.description}
          />

          <TextBlock
            title="Before and after photos of tattoos"
            content={<Image src={store.photo.trim() || "/before.jpg"} alt={`${store.name} Before and After Picture`} width={300} height={200} className="rounded-lg" />
            }
          />

          <TextBlock title="Price range" content="$200 – $1000" />

          <TextBlock
            title="Services offered"
            content={
              <ul className="list-disc list-inside">
                <li>Laser treatment</li>
                <li>Eye treatment</li>
                <li>Eye-brows treatment</li>
              </ul>
            }
          />

          <TextBlock
            title="Tattoo removal requirements"
            content="Age: 18+, No active infections or recent tanning, etc..."
          />

          <TextBlock
            title="How to get started"
            content="Walk-ins welcome, book online for convenience. Bring ID, prep tips..."
          />

          <TextBlock
            title="Other things to know"
            content="Expect a 30-60 minute visit, pricing info, numbing, aftercare..."
          />
        </div>

        <aside className="space-y-6">
          <ClinicInfoCard {...store} />
          <OpeningHours />
          <MapEmbed lat={store.latitude} long={store.longitude} label={store.name} />
          
           <div className="grid grid-cols-1 gap-6">
                    {services.map((service, i) => (
                      <DescriptionCard key={i} {...service} />
                    ))}
                  </div>
        </aside>
      </div>
    </section>
  );
}
