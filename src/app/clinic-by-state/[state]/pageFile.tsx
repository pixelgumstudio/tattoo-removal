"use client";

import FaqSection from "@/components/sections/FaqSection";
import Features from "@/components/sections/Features";
import FindCentre from "@/components/sections/FindCentre";
import TopServices from "@/components/sections/TopServices";
import PageHeader from "@/components/shared/PageHeader";
import SearchBar from "@/components/shared/SearchBar";
import { usePathname } from "next/navigation";

export default function Clinic() {
  const pathname = usePathname();

  const pageName = pathname.split("/")[2]?.replace(/-/g, " ") || "";

  const formattedName = pageName.charAt(0).toUpperCase() + pageName.slice(1).toLowerCase();
  const title = formattedName ? `Tattoo removal in ${decodeURIComponent(formattedName)}` : "Best tattoo removal by state";
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
      state={pageName}
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
      state={pageName}
        title="Frequently asked questions"
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
    </>
  );
}
