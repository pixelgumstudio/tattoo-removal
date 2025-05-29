"use client";

import FaqSection from "@/components/sections/FaqSection";
import Features from "@/components/sections/Features";
import FindCentre from "@/components/sections/FindCentre";
import TopServices from "@/components/sections/TopServices";
import PageHeader from "@/components/shared/PageHeader";
import SearchBar from "@/components/shared/SearchBar";

export default function PageFile({state}: {state: string}) {
    
  const formattedName = state.charAt(0).toUpperCase() + state.slice(1).toLowerCase();
  console.log(formattedName)

  const title = formattedName ? `Best tattoo removal in ${decodeURIComponent(formattedName)}` : "Best tattoo removal by state";
const description = formattedName ? `Discover all the places to remove your tattoo in ${decodeURIComponent(formattedName)}, US ` : "Best tattoo removal by state in the US";

  return (
    <>
      <PageHeader
        title={title}
        description={description}
      >
        <SearchBar type="state" placeholder="state"/>
      </PageHeader>

      <TopServices
      state={state}
      pageSize={10}
        title={`Top tattoo removal service in the ${formattedName ? decodeURIComponent(formattedName) : "State"}`}
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
      
      <FindCentre
        title="Find a tattoo removal center by state"
        description="Discover all the places to remove your tattoos from all the available states in the US"
      />
      <Features
        align="center"
        title="How Remover Tattoo Now is changing the tattoo removal landscape"
      />
    

      <FaqSection
      state={state}
        title="Frequently asked questions"
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
    </>
  );
}
