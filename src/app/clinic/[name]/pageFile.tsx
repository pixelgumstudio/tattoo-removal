'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import ClinicPage from '@/components/sections/ClinicInfo';
import FaqSection from '@/components/sections/FaqSection';
import TopServices from '@/components/sections/TopServices';
import PageHeader from '@/components/shared/PageHeader';
import FullPageLoader from '@/components/shared/loader/FullPageLoader';
import { useStoreByName } from '@/lib/hooks/useStoreByName';

export default function PageFile() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const postal = searchParams.get('postal') || 'N/A';
  const slug = pathname.split('/')[2];


  
  // Decode the slug to get the original clinic name
  const decodedSlug = decodeURIComponent(slug);

  
  // Early return if slug is invalid
  if (!decodedSlug) {
    return <p>Clinic not found. Invalid URL.</p>;
  }

  // Always call the hook, even if the slug is not valid initially.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: store, isLoading, error } = useStoreByName(decodedSlug, postal);

  // Conditional rendering based on the state of the request
  if (isLoading) return <FullPageLoader />;
  if (error) return <p>Something went wrong: {(error as Error).message}</p>;
  if (!store) return <p>No clinic found for this slug.</p>; // In case store is not returned

  // Once data is available, render the page
  return (
    <>
      <PageHeader title={store.name} />
      <ClinicPage store={store} />
      <TopServices
        state={store.state}
        showPagination ={false}
        pageSize={10}
        title={`Top tattoo removal service in the ${store.state}`}
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
      <FaqSection
      state={store.state}
        title="Frequently asked questions"
        description="Answers to common tattoo removal questions to help you feel confident"
      />
    </>
  );
}
