// components/ClinicInfoCard.tsx
import Image from 'next/image';
import { Paragraph, Title } from "@/components/ui/typography";
import { Clinic } from '@/types/store';
import Link from 'next/link';

export default function ClinicInfoCard(storeData: Clinic) {
  const data = storeData; // Assuming storeData is an object with a 'data' property
  if (!data) return null; // Handle case where data is not available
  return (
    <div className="rounded-lg shadow-lg bg-white dark:bg-zinc-900 p-4 max-w-md w-full">
        <Image src={data.logo} alt="Clinic Logo" width={48} height={48} />
        <div>
          <Title className="text-zinc-800 dark:text-white">{data.name}</Title>
          <Paragraph className=" text-zinc-600 dark:text-zinc-300">
            {data.full_address}
          </Paragraph>
          <Paragraph className=" mt-1 text-zinc-600 dark:text-zinc-300">📞 {data.phone}</Paragraph>
          <Paragraph className=" text-zinc-600 dark:text-zinc-300">💵 {data.price_range} · ⭐ {data.reviews}</Paragraph>
        </div>
        <div className="mt-4 flex flex-col gap-4">
  <Link href={data.site} className="text-center bg-[#EF476F] text-white text-sm py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF476F]">Book appointment</Link>
  <Link href={data.booking_appointment_link} className="text-sm text-center py-2 border rounded-lg border-[#EDEDED] text-[#EF476F] dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#EF476F]" type="submit">Get directions</Link>
</div>
    </div>
  );
}