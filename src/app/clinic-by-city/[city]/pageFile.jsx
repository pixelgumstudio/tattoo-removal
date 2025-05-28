"use client";

import CityServices from "@/components/sections/CityServices";
import FaqSection from "@/components/sections/FaqSection";
import Features from "@/components/sections/Features";
import FindCentre from "@/components/sections/FindCentre";
import TopServices from "@/components/sections/TopServices";
import PageHeader from "@/components/shared/PageHeader";
import SearchBar from "@/components/shared/SearchBar";
import { usePathname, useSearchParams } from "next/navigation";

export default function Clinic({ city, state }) {
  
    const pageName = city;
    const formattedName = pageName.charAt(0).toUpperCase() + pageName.slice(1).toLowerCase();
    const title = formattedName ? `Tattoo removal in ${decodeURIComponent(formattedName)}, ${decodeURIComponent(state)}` : "Best tattoo removal by city in the US";
const description = formattedName ? `Discover all the places to remove your tattoo in ${decodeURIComponent(formattedName)}, ${decodeURIComponent(state)}, US ` : "Discover all the places to remove a tattoo in your city , or choose your city below to see which tattoo removal centres offer the best payments for tattoo removals ";
 
return (
    <>
      <PageHeader
        title={title}
        description={description}
      >
        <SearchBar type="city" placeholder="city"/>
      </PageHeader>

  <TopServices
  city={pageName}
  pageSize={10}
        title={`Top tattoo removal service in the ${formattedName ? `${decodeURIComponent(formattedName)},  ${decodeURIComponent(state)}` : "City"} `}
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
        <CityServices
              title="Top cities to find tattoo removal"
              description="Discover all the places to remove your tattoos from all the available states in the US"
              alignment="center"
            />
      <FindCentre
      position="center"
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
