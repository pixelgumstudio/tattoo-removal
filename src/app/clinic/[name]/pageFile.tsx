'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import ClinicPage from '@/components/sections/ClinicInfo';
import FaqSection from '@/components/sections/FaqSection';
import TopServices from '@/components/sections/TopServices';
import PageHeader from '@/components/shared/PageHeader';
import FullPageLoader from '@/components/shared/loader/FullPageLoader';
import { useStoreByName } from '@/lib/hooks/useStoreByName';

export default function Clinic() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const postal = searchParams.get('postal') || 'N/A';
  const slug = pathname.split('/')[2];

  const { data: store, isLoading, error } = useStoreByName(slug, postal);

  if (error) return <p>Something went wrong: {(error as Error).message}</p>;
  if (isLoading || !store) return <FullPageLoader />;

  return (
    <>
      <PageHeader title={store.name} />
      <ClinicPage store={store} />
      <TopServices
      city={store.city}
      pageSize={10}
        title={`Top tattoo removal service in the ${store.city} `}
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
      <FaqSection
        title="Frequently asked questions"
        description="Answers to common tattoo removal questions to help you feel confident"
      />
    </>
  );
}
