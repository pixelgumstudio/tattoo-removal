"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Paragraph } from "@/components/ui/typography";

interface FaqItemProps {
  question: string;
  answer: string;
  number: number;
}

const FaqItem = ({ question, answer, number }: FaqItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between text-left group"
      >
        <div>
          <Paragraph
            size="lg"
            variant="muted"
            className="mb-1 font-medium text-black/80 flex"
          >
            <span className="mr-4 text-black font-semibold">{String(number).padStart(2, "0")}</span>
            <span>{question}</span>
          </Paragraph>
        </div>
        <span className="ml-4 shrink-0 w-8 h-8 bg-black rounded-full flex justify-center items-center">
          {open ? (
            <Minus className="w-5 h-5 text-white group-hover:text-white transition-colors" />
          ) : (
            <Plus className="w-5 h-5 text-white group-hover:text-white transition-colors" />
          )}
        </span>
      </button>

      {open && (
        <Paragraph
        size="base"
          variant="muted"
          className="mt-3 pl-10 text-sm max-w-[90%] lg:max-w-[70%] text-black/70 transition-all duration-300 ease-in-out"
        >
          {answer}
        </Paragraph>
      )}
    </div>
  );
};

export default FaqItem;
