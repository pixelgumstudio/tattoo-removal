import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { Paragraph } from "@/components/ui/typography";

interface LocationCardProps {
  title: string;
  locations: number;
  services: number;
  link: string;
  backgroundImage: string;
  className?: string;
}

export default function LocationCard({
  title,
  locations,
  services,
  link,
  backgroundImage,
  className,
}: LocationCardProps) {
  return (
    <Link
      href={link}
      className={clsx(
        "relative w-full h-[200px] rounded-xl overflow-hidden group transition-shadow hover:shadow-lg",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover brightness-[0.5] group-hover:brightness-[0.4] transition-all"
      />

      {/* Overlay Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-4 text-white">
        <div className="flex justify-between items-start">
          <Paragraph size="lg" className="text-lg font-semibold text-white">{title}</Paragraph>
          <ArrowRight className="w-4 h-4" />
        </div>
        <Paragraph className="text-white/80">
          {locations} locations &bull; {services} services
        </Paragraph>
      </div>
    </Link>
  );
}


