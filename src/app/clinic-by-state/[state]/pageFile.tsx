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
  return (
    <>
      <PageHeader
        title="Best tattoo removal by state"
        description="Discover all the places to remove a tattoo in your state , or choose your state below to see which tattoo removal centres offer the best payments for tattoo removals "
      >
        <SearchBar type="state" placeholder="city"/>
      </PageHeader>

      <FindCentre
        title="Find a tattoo removal center by state"
        description="Discover all the places to remove your tattoos from all the available states in the US"
      />
      <Features
        align="center"
        title="How Remover Tattoo Now is changing the tattoo removal landscape"
      />
      <TopServices
      state={pageName}
      pageSize={10}
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
