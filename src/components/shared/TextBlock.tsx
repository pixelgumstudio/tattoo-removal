import { JSX } from "react";
import { Subheading, Paragraph } from "../ui/typography";

// components/TextBlock.tsx
type Props = { title: string; content: string | JSX.Element };

export const TextBlock = ({ title, content }: Props) => (
  <section className="max-w-3xl space-y-2">
    <Subheading  className="text-lg font-semibold text-zinc-800 dark:text-white">{title}</Subheading>
    <Paragraph size="base" className="text-sm text-zinc-700 dark:text-zinc-300">{content}</Paragraph>
  </section>
);
