'use client';

import ClinicPage from '@/components/sections/ClinicInfo';
import FaqSection from '@/components/sections/FaqSection';
import TopServices from '@/components/sections/TopServices';
import PageHeader from '@/components/shared/PageHeader';
import { Clinic } from '../../../types/store';

export default function PageFile({clinic}: { clinic: Clinic }) {

  return (
    <>
      <PageHeader title={clinic.name} />
      <ClinicPage store={clinic} />
      <TopServices
        state={clinic.state}
        showPagination ={false}
        pageSize={10}
        title={`Top tattoo removal service in the ${clinic.state}`}
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
      <FaqSection
      state={clinic.state}
        title="Frequently asked questions"
        description="Answers to common tattoo removal questions to help you feel confident"
      />
    </>
  );
}
