// app/clinic/page.tsx or wherever this lives

import ClinicInfoCard from "@/components/shared/cards/ClinicInfoCard";
import { OpeningHours } from "@/components/shared/OpeningHours";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { TextBlock } from "@/components/shared/TextBlock";
import DescriptionCard from "../shared/cards/DescriptionCard";
import { Clinic } from "@/types/store";
import Image from "next/image";
import { Paragraph } from "../ui/typography";
import { useSuggestByCities } from "@/lib/hooks/useStore";



interface ClinicPageProps {
  store: Clinic;
}

export default function ClinicPage({ store }: ClinicPageProps) {
  const { data } = useSuggestByCities(`city=${store.city}&shuffle=true&min=3&limit=3`);

  const clinics = (data as Clinic[]) ?? []; // explicitly cast to an array of ClinicService
  return (
    <section className="w-full px-4 md:px-6 lg:px-10 py-12">
      <div className="w-full max-w-[1152px] mx-auto grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <TextBlock title="About company" content={store.description} />

          <TextBlock
            title="Before and after photos of tattoos"
            content={
              <Image
                src={store.photo.trim() || "/before.jpg"}
                alt={`${store.name} Before and After Picture`}
                width={300}
                height={200}
                className="rounded-lg"
              />
            }
          />

          <TextBlock title="Price range" content={store.price_range} />

          <TextBlock
            title="Tattoo removal requirements"
            content={
              <>
                <Paragraph size="base">
                  Looking to remove a tattoo? Here’s everything you need to know
                  about getting started with tattoo removal at a typical clinic,
                  such as {store.name} located at {store.full_address}.
                </Paragraph>
                <Paragraph
                  size="base"
                  className="font-bold mt-4 mb-6 text-zinc-700 dark:text-zinc-300"
                >
                  All clients must meet these requirements:  
                </Paragraph>
                <Paragraph size="base">
                  <span className="mb-6 block">
                    Age: 18 or older (minors may need parental consent,
                    depending on state laws).
                  </span>
                  <span className="mb-6 block">
                    Skin Condition: No active infections, open wounds, or
                    sunburn in the treatment area.{" "}
                  </span>
                  <span className="mb-6 block">
                    Health Status: Must be in good overall health; certain
                    conditions may require a doctor’s clearance.
                  </span>
                  <span className="mb-6 block">
                    No Recent Tanning: Avoid tanning beds or excessive sun
                    exposure for 4 weeks prior.
                  </span>
                  <span className="mb-6 block">
                    First-Time Clients: A consultation is required to assess the
                    tattoo and skin type. Please note that some factors may
                    affect eligibility or delay treatment:
                  </span>
                  <span className="mb-6 block">
                    Temporary Delay: Recent sun exposure, pregnancy, or use of
                    certain medications (e.g., Accutane within 6-12 months).
                  </span>
                  <span className="mb-6 block">
                    Permanent Restrictions: Conditions like uncontrolled
                    diabetes, keloid scarring history, or active skin cancer
                    may disqualify you.
                  </span>
                </Paragraph>
              </>
            }
          />

          <TextBlock
            title="How to get started"
            content={
              <Paragraph size="base">
                <>
                  <span className="mb-6 block">
                    Walk-ins for consultations are often welcome, but booking an
                    appointment online or by phone is recommended for
                    convenience.
                  </span>
                  <span className="block">
                    To schedule, visit the clinic’s website or call ahead to
                    secure your consultation and treatment slot.
                  </span>
                  <span className="block">What to Bring</span>
                  <span className="mb-6 block">
                    Valid ID: Driver’s license, passport, or other
                    government-issued ID.
                  </span>
                  <span className="mb-6 block">
                    Medical History: List of medications and any relevant health
                    conditions.
                  </span>
                  <span className="mb-6 block">
                    Payment: Most clinics accept cash, cards, or financing
                    options (check with your provider).
                  </span>
                  <span className="mb-6 block">
                    Photos (Optional): A picture of the tattoo for reference
                    during your consultation.
                  </span>
                  <span className="block">Preparation Tips</span>
                  <span className="mb-6 block">Before your tattoo removal session, make sure to:</span>
                  <span className="mb-6 block">
                    Avoid sun exposure or tanning for at least 4 weeks before
                    treatment.
                  </span>
                  <span className="mb-6 block">
                    Stay hydrated—drink 6 to 8 glasses of water daily leading up
                    to your appointment.
                  </span>
                  <span className="mb-6 block">
                    Skip alcohol and smoking 24 hours prior to reduce skin
                    sensitivity.
                  </span>
                  <span className="mb-6 block">
                    Shave the treatment area (if hairy) 1-2 days before, but
                    don’t wax or pluck.
                  </span>
                  <span className="mb-6 block">
                    Avoid applying lotions, creams, or makeup to the tattoo area
                    on the day of treatment.
                  </span>
                  <span className="mb-6 block">
                    Wear loose, comfortable clothing that won’t rub against the
                    treated area.
                  </span>
                  <span className="mb-6 block">
                    Get a good night’s sleep to help your body heal
                    post-treatment.
                  </span>
                  <span className="mb-6 block">
                    Consult your doctor if you’re on medications like blood
                    thinners or photosensitive drugs.
                  </span>
                </>
              </Paragraph>
            }
          />

          <TextBlock
            title="Other things to know"
            content={
              <Paragraph size="base">
                <span className="mb-6 block">
                  First Session: Expect a 30-60 minute visit, including
                  consultation and possibly a test spot.
                </span>
                <span className="mb-6 block">
                  Treatment Time: Sessions typically last 10-30 minutes,
                  depending on tattoo size and complexity.
                </span>
                <span className="mb-6 block">
                  Multiple Sessions Needed: Most tattoos require 6-12 sessions,
                  spaced 6-8 weeks apart, for full removal.
                </span>
                <span className="mb-6 block">
                  Aftercare: You’ll get instructions (e.g., keep it clean, avoid
                  sun, apply ointment) to prevent infection or scarring.
                </span>
                <span className="mb-6 block">
                  Cost: It varies by tattoo size/color, but expect{" "}
                  {store.price_range} per session; ask about package deals.
                </span>
                <span className="mb-6 block">
                  Pain Management: Numbing cream or cooling devices may be
                  offered; it feels like a rubber band snap.
                </span>
                <span className="mb-6 block">
                  Follow-Up: Schedule your next session at the end of each visit
                  for best results.
                </span>
              </Paragraph>
            }
          />
        </div>

        <aside className="space-y-6">
          <ClinicInfoCard {...store} />
          <OpeningHours hours={store.working_hours} />
          <MapEmbed
            lat={store.latitude}
            long={store.longitude}
            label={store.name}
          />

          <div className="grid grid-cols-1 justify-center gap-6">
            {clinics?.map((service: Clinic, i: number) => (
              <DescriptionCard
              key={i}
              title={service.name}
              address={service.full_address}
              price={service.price_range}
              image={service.photo.trimEnd() || "/default-image.jpg"}
              {...service}
              postal={service.postal_code}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
