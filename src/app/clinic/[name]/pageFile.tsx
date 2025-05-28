'use client';

import ClinicPage from '@/components/sections/ClinicInfo';
import FaqSection from '@/components/sections/FaqSection';
import TopServices from '@/components/sections/TopServices';
import PageHeader from '@/components/shared/PageHeader';
import FullPageLoader from '@/components/shared/loader/FullPageLoader';
import { useStoreByName } from '@/lib/hooks/useStoreByName';

type Props = {
  name:  string ;
  postal: string ;
};

export default function PageFile({ name, postal }: Props) {
  // Decode the slug to handle URL encoding 
  console.log(name, postal);
  const decodedSlug = decodeURIComponent(name);

  const { data: store, isLoading, error } = useStoreByName(decodedSlug, postal);

  if (!decodedSlug) {
    return <p>Clinic not found. Invalid URL.</p>;
  }

  if (isLoading) return <FullPageLoader />;
  if (error) return <p>Something went wrong: {(error as Error).message}</p>;
  if (!store) return <p>No clinic found for this slug.</p>;

  return (
    <>
      <PageHeader title={store.name} />
      <ClinicPage store={store} />
      <TopServices
        state={store.state}
        showPagination={false}
        pageSize={10}
        title={`Top tattoo removal services in ${store.state}`}
        description="Discover the top tattoo places to remove your tattoos in the US"
      />
      <FaqSection
        state={store.state}
        title="Frequently Asked Questions"
        description="Answers to common tattoo removal questions to help you feel confident"
      />
    </>
  );
}
