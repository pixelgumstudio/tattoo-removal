import { JSX } from "react";

// components/TextBlock.tsx
type Props = { title: string; content: string | JSX.Element };

export const TextBlock = ({ title, content }: Props) => (
  <section className="max-w-3xl space-y-2">
    <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">{title}</h3>
    <div className="text-sm text-zinc-700 dark:text-zinc-300">{content}</div>
  </section>
);
