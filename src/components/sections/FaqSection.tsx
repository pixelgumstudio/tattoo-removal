import { Subheading, Paragraph } from "@/components/ui/typography";
import FaqItem from "../shared/FaqItem";
import { CentreProps } from "../../../types";
import clsx from "clsx";
import { useFaqs } from "@/lib/hooks/useFaq";

type Faq = {
  question: string;
  answer: string;
};

const faqData = [
  {
    question: "Can tattoos be 100% removed?",
    answer:
      "Complete removal depends on factors like ink depth, color, and your skin. Some tattoos may leave slight traces.",
  },
  {
    question: "What is the cost to remove a permanent tattoo?",
    answer:
      "Most orders ship within 3–5 business days, with delivery in 7–14 business days depending on your location. Custom items may take 2–4 weeks. You’ll get a tracking link once your order’s on its way!",
  },
  {
    question: "How many sessions does it take to remove a 1-inch tattoo?",
    answer:
      "Typically 4–8 sessions spaced out over several weeks, depending on your skin and tattoo characteristics.",
  },
  {
    question: "Does tattoo removal hurt more than getting the tattoo?",
    answer:
      "It varies person to person. Some say it’s similar, others say it feels like a rubber band snapping against the skin.",
  },
  {
    question: "Will tattoo removal leave a scar?",
    answer:
      "When performed by professionals using modern equipment, scarring is very rare — but it’s still a small risk.",
  },
  {
    question: "How long do I have to wait between sessions?",
    answer:
      "Typically 6–8 weeks to allow your skin to heal and give your body time to process the pigment.",
  },
  {
    question: "Can I remove just part of a tattoo?",
    answer:
      "Yes, laser removal can be precisely targeted to fade or fully remove just a section of the tattoo.",
  },
  {
    question: "Does skin color affect tattoo removal?",
    answer:
      "Yes. Melanin levels can affect how lasers interact with the skin. A consultation helps tailor the safest approach.",
  },
  {
    question: "Are there any at-home tattoo removal methods that work?",
    answer:
      "No proven methods exist that are both safe and effective. At-home attempts often cause scarring or irritation.",
  },
  {
    question: "Can tattoos be 100% removed?",
    answer:
      "This depends on your tattoo and skin type. While some may vanish completely, others may leave a light imprint.",
  },
];

export default function FaqSection({
  state,
  title,
  description,
  alignment = "left",
}: CentreProps) {
  const textAlign = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const { data: faqs } = useFaqs(state ? state : "");

  const showFaq = faqs ? faqs : faqData;

  return (
    <section className="px-4 py-16">
        <div className={"w-full max-w-[1152px] mx-auto"}>
      <div className={clsx("flex flex-col mb-8", textAlign[alignment])}>
        {title && (
          <Subheading className="max-w-[450px] line-clamp-2">
            {title}
          </Subheading>
        )}
        {description && (
          <Paragraph className=" max-w-xxl">
            {description}
          </Paragraph>
        )}
      </div>
      <div>
        {showFaq.map((faq: Faq, idx: number) => (
          <FaqItem
            key={idx}
            number={idx + 1}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
