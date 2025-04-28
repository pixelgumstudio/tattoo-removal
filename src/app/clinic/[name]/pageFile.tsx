'use client';

import { usePathname } from 'next/navigation';
import ClinicPage from '@/components/sections/ClinicInfo';
import FaqSection from '@/components/sections/FaqSection';
import TopServices from '@/components/sections/TopServices';
import PageHeader from '@/components/shared/PageHeader';
import { useStoreByName } from '@/lib/hooks/useStoreByName';

export default function Clinic() {
  const pathname = usePathname();
  const slug = pathname.split('/')[2]; // e.g., "laser-away-dallas"

  const { data: store, isLoading, error } = useStoreByName(slug);
  console.log(slug)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {(error as Error).message}</p>;
  if (!store) return <p>Store not found</p>;

  return (
    <>
      <PageHeader title={store.name} />

      <ClinicPage store={store} />

      <TopServices
        title="Top tattoo removal service in the US "
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />

      <FaqSection
        title="Frequently asked questions"
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
    </>
  );
}
