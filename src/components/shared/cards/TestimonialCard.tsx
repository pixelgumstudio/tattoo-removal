import { Paragraph, Title } from "@/components/ui/typography";
import clsx from "clsx";

interface TestimonialCardProps {
  name: string;
  title: string;
  text: string;
  dark?: boolean;
}

export const TestimonialCard = ({
  name,
  title,
  text,
  dark = false,
}: TestimonialCardProps) => {
  return (
    <div
      className={clsx(
        "p-8 sm:p-12 flex flex-col justify-between items-center",
        dark ? "bg-[#275375] text-white" : "bg-[#FDF0E7] text-[#275375]"
      )}
    >
      <Paragraph className={clsx("max-w-[400px] leading-relaxed mb-8 !text-black", dark && "!text-white")}>
        {text}
      </Paragraph>
      <div className="w-full max-w-[400px]">
        <Title className={clsx("font-semibold mb-1 !text-black", dark && "!text-white")}>
          {name}
        </Title>
        <Paragraph className={clsx("!text-black", dark && "!text-white")}>{title}</Paragraph>
      </div>
    </div>
  );
};

export default TestimonialCard;
