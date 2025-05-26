import clsx from "clsx";
import { ReactNode } from "react";
import Image from "next/image";
import { Heading, Paragraph } from "../ui/typography";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  backgroundImage?: string;
  height?: string; // e.g. 'h-screen', 'h-[600px]', etc.
}

export default function PageHeader({
  title,
  description,
  children,
  align = "left",
  className,
  backgroundImage = "/images/pageBanner.webp", // fallback default
  height = "h-fit",
}: PageHeaderProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <section
      className={clsx(
        "relative w-full overflow-hidden px-4 md:px-8 py-10 md:py-20",
        height,
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>
      <div
        className={clsx(
          "z-10 relative w-full flex flex-col gap-4 max-w-[1152px] mx-auto",
          alignment[align],
          className
        )}
      >
        <Heading className="text-white max-w-xl">
          {title}
        </Heading>
        {description && (
          <Paragraph className=" text-white/80 max-w-xl" size='lg'>
            {description}
          </Paragraph>
        )}
        {children && <div className="w-full max-w-xl">{children}</div>}
      </div>
    </section>
  );
}
