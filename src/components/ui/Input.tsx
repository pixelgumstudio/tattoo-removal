import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500",
        className
      )}
    />
  );
}

// Usage

{/* <Input type="text" name="query" placeholder={placeholder} /> */}
