"use client";
import CityServices from "@/components/sections/CityServices";
import FaqSection from "@/components/sections/FaqSection";
import FindCentre from "@/components/sections/FindCentre";
import Section from "@/components/sections/Section";
import Testimonials from "@/components/sections/Testimonials";
import PageHeader from "@/components/shared/PageHeader";
import { Paragraph, Subheading } from "@/components/ui/typography";
import clsx from "clsx";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <>
      <PageHeader title="Contact Us" align="center"/>
      <Section>
        <Subheading  className={clsx("mt-8 mb-4")}>The issue</Subheading>
        <Paragraph className={clsx("leading-relaxed mb-4")}>
        For any questions, inquiries, or collaborations, please use the form below to contact us. You may also email us directly at pixelgumstudio@gmail.com . We look forward to hearing from you!
        </Paragraph>
        
        <ContactForm />
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
