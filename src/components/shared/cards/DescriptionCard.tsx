import { MapPin, DollarSign, Star } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { Paragraph, Title } from "@/components/ui/typography";
import { createSlug } from "@/lib/slug";

interface DescriptionCardProps {
  title: string;
  description: string;
  address: string;
  price: string;
  reviews: string;
  tags?: string[];
  image: string;
  postal: string;
}

export default function DescriptionCard({
  title,
  description,
  address,
  price,
  reviews,
  tags,
  image,
  postal,
}: DescriptionCardProps) {
  return (
    <div className="w-full flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
    <div className="flex gap-4">
      <Image
  src={image}
  alt={title}
  width={56}
  height={56}
  className="w-14 h-14 rounded-full object-cover"
/>
        <div className="flex-1">
            <div>
              <Title className="text-[16px] lg:text-[20px] font-semibold text-gray-900">
                {title}
              </Title>
              <Paragraph className=" text-gray-500">{description}</Paragraph>
            </div>
          

          <div className="mt-3 space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span>{price}</span>
              <Star className="w-4 h-4 text-yellow-400 ml-4" />
              <span>{reviews} reviews</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {tags?.map((tag, i) => (
              <Paragraph
                key={i}
                className="bg-gray-100 text-gray-600 rounded-full px-3 py-1"
              >
                {tag}
              </Paragraph>
            ))}
          </div>

          <Link
            href={`/clinic/${createSlug(title)}?postal=${postal}`}
            className="inline-block mt-4 text-sm text-rose-500 border border-rose-200 hover:bg-rose-50 rounded-full px-4 py-1"
          >
            View service details
          </Link>
        </div>
       
        <Link href={`/clinic/${createSlug(title)}?postal=${postal}`}>
              <span className="text-gray-400 hover:text-gray-600 font-semibold text-xl">›</span>
            </Link> </div>
      </div>
  );
}
