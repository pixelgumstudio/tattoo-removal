// components/ClinicInfoCard.tsx
import Image from 'next/image';
import { Paragraph, Title } from "@/components/ui/typography";
import Button from '@/components/ui/Button';
import { Clinic } from '@/types/store';
import Link from 'next/link';

export default function ClinicInfoCard(storeData: Clinic) {
  const data = storeData; // Assuming storeData is an object with a 'data' property
  if (!data) return null; // Handle case where data is not available
  return (
    <div className="rounded-lg shadow-lg bg-white dark:bg-zinc-900 p-4 max-w-md w-full">
      <div className="flex items-start gap-4">
        <Image src={data.logo} alt="Clinic Logo" width={48} height={48} />
        <div>
          <Title className="text-zinc-800 dark:text-white">{data.name}</Title>
          <Paragraph className=" text-zinc-600 dark:text-zinc-300">
            {data.full_address}
          </Paragraph>
          <Paragraph className=" mt-1 text-zinc-600 dark:text-zinc-300">📞 {data.phone}</Paragraph>
          <Paragraph className=" text-zinc-600 dark:text-zinc-300">💵 $500 – $2000 · ⭐ {data.reviews}</Paragraph>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Link href={data.booking_appointment_link} className="flex-1 bg-rose-500 text-white text-sm py-2 rounded-md">Book appointment</Link>
        {/* <button className="text-sm text-zinc-600 dark:text-zinc-300"></button> */}
        <Button className="text-sm text-zinc-600 dark:text-zinc-300" type="submit">Get directions</Button>
      </div>
    </div>
  );
}
