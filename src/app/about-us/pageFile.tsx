"use client";
import CityServices from "@/components/sections/CityServices";
import FaqSection from "@/components/sections/FaqSection";
import FindCentre from "@/components/sections/FindCentre";
import Section from "@/components/sections/Section";
import Testimonials from "@/components/sections/Testimonials";
import PageHeader from "@/components/shared/PageHeader";
import { Paragraph, Subheading } from "@/components/ui/typography";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <PageHeader title="About Us" align="center" />
      <Section>
        <Paragraph className={clsx("leading-relaxed mb-4")}>
          Tattoooremovalplace is a complete directory of all the verified places
          you can remove tattoos in the US We list all the cities and states you
          can get your tattoo removed in the US
        </Paragraph>
        <Paragraph className={clsx("leading-relaxed mb-4")}>
          We started tattooremovalplace after doing a whole background research
          about how to remove tattoos and we  could not find places listed on
          the google search on how a tattoo needs to be =removed and how tos
        </Paragraph>
        <Paragraph className={clsx("leading-relaxed mb-4")}>
          In the United States, there are over a thousand tattoo removal places,
          with many options to choose from if you’re based in more populated
          cities and want to remove your tattoo in the US.
        </Paragraph>

        <Subheading className={clsx("mt-8 mb-4")}>The issue</Subheading>
        <Paragraph className={clsx("leading-relaxed mb-4")}>
          It’s hard to know which center to choose, which centres are the best ,
          how do you filter those centres , pricing and finding those centers
          without diving deep. Accessibility of tattoo removal centres was a
          serious problem 
        </Paragraph>
        <Paragraph className={clsx("leading-relaxed mb-4")}>
          Our mission with tattooremovalnearyou is to make it easier for people
          to find tattoo removal based on their location near them and have
          access to choose froma a variety of options based on their location.
        </Paragraph>

        <Subheading className={clsx("mt-8 mb-4")}>
          Remove your Tattoo today
        </Subheading>
        <Paragraph className={clsx("leading-relaxed mb-4")}>
          If you’re ready to start your  tattoo removal journey, start by
          searching for a Tattoo removal near you 
        </Paragraph>
      </Section>
      <CityServices
        title="Top cities to find tattoo removal"
        description="Discover all the places to remove your tattoos from all the available states in the US"
        alignment="center"
      />
      <FindCentre
        title="Find a tattoo removal centre by state"
        description="Discover all the places to remove your tattoos from all the available states in the US "
        position="center"
      />
      <Testimonials />
      <FaqSection
        title="Frequently asked questions"
        description="Discover the top tattoo places to remove your Tattoos in the US"
      />
    </>
  );
}
