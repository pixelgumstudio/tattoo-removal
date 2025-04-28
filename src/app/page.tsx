"use client";
import CityServices from "@/components/sections/CityServices";
import FaqSection from "@/components/sections/FaqSection";
import Features from "@/components/sections/Features";
import FindCentre from "@/components/sections/FindCentre";
import Testimonials from "@/components/sections/Testimonials";
import TopServices from "@/components/sections/TopServices";
import PageHeader from "@/components/shared/PageHeader";
import SearchBar from "@/components/shared/SearchBar";

export default function Home() {

  return (
    <>
      <PageHeader
        className="  "
        title="Find tattoo removal locations near me"
        description="Discover all the places to remove a tattoo in your city, or choose your city below to see which tattoo removal centres offer the best payments for tattoo removals"
      >
        <SearchBar />
      </PageHeader>

      <FindCentre
        title="Find a tattoo removal centre by state"
        description="Discover all the places to remove your tattoos from all the available states in the US"
      />

      <TopServices
        title="Top tattoo removal service in the US "
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />

      <Features
        align="center"
        title="How Remover Tattoo Now is changing the tattoo removal landscape"
        // description="Discover all the places to remove your tattoos from all the available states in the US "
      />
      <CityServices
        title="Top cities to find tattoo removal"
        description="Discover all the places to remove your tattoos from all the available states in the US"
        alignment="center"
      />
      <Testimonials />
      <FaqSection
        title="Frequently asked questions"
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
    </>
  );
}
