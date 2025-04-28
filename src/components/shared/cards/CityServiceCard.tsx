import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Paragraph, SmallText } from "@/components/ui/typography";

interface CityServiceCardProps {
  image: string;
  city: string;
  state: string;
  servicesCount: number;
  href: string;
}

const CityServiceCard = ({
  image,
  city,
  state,
  servicesCount,
  href,
}: CityServiceCardProps) => {
  return (
    <Link
      href={href}
      className="relative overflow-hidden rounded-xl group aspect-[1.8/1] bg-gray-100"
    >
      <div className="absolute inset-0">
        <Image
          // src='/public/images/states/alaska.webp'
          src={image}
          alt={`${city}, ${state}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
        <div className="flex justify-between items-start">
          <div>
            <Paragraph className="leading-snug" size="lg">
              {city}, <br /> {state}
            </Paragraph>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </div>
        <SmallText className="mt-auto">{servicesCount} tattoo removal services</SmallText>
      </div>
    </Link>
  );
};

export default CityServiceCard;





// Usage 
{/* <CityServiceCard
  image="/images/montgomery.jpg"
  city="Montgomery"
  state="Alabama"
  servicesCount={5}
  href="/states/alabama/montgomery"
/> */}