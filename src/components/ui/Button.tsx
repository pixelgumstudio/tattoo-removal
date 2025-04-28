import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}

const baseStyles =
  "inline-flex items-center justify-center px-5 py-2 whitespace-nowrap text-sm font-medium rounded-[5px] transition";

const variants = {
  primary: "bg-rose-500 text-white hover:bg-rose-600",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  ghost: "bg-transparent text-rose-500 hover:bg-rose-50",
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(baseStyles, variants[variant], className)}
    />
  );
}

// Usage

{/* <Button type="submit">Find location</Button> */}
