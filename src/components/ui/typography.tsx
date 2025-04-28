import React, { JSX } from "react";
import clsx from "clsx";

// Types

type Alignment = "left" | "center" | "right" | "justify";
type Variant = "default" | "muted" | "secondary";
type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  align?: Alignment;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const baseAlignments: Record<Alignment, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const baseVariants: Record<Variant, string> = {
  default: "text-foreground",
  muted: "text-gray-500",
  secondary: "text-muted-foreground",
};

// ==== COMPONENTS ====

export const Heading = ({
  as: Component = "h1",
  align = "left",
  variant = "default",
  className,
  children,
  ...props
}: TypographyProps) => (
  <Component
    className={clsx(
      "font-bold tracking-tight leading-tight",
      "text-[24px] md:text-[48px] lg:text-[64px]", // font-size responsive
      baseAlignments[align],
      baseVariants[variant],
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Subheading = ({
  as: Component = "h2",
  align = "left",
  variant = "default",
  className,
  children,
  ...props
}: TypographyProps) => (
  <Component
    className={clsx(
      "font-semibold tracking-tight",
      "text-[20px] md:text-[24px] lg:text-[48px]", // Matches H2 styling
      baseAlignments[align],
      baseVariants[variant],
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Title = ({
  as: Component = "h3",
  align = "left",
  variant = "default",
  className,
  children,
  ...props
}: TypographyProps) => (
  <Component
    className={clsx(
      "font-semibold",
      "text-[20px] md:text-[24px] lg:text-[24px]", // Title level, smaller
      baseAlignments[align],
      baseVariants[variant],
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

interface ParagraphProps extends TypographyProps {
  size?: Size;
}

export const Paragraph = ({
  as: Component = "p",
  align = "left",
  variant = "default",
  size = "lg",
  className,
  children,
  ...props
}: ParagraphProps) => {
  const sizeClasses: Record<Size, string> = {
    xs: "text-[14px]", // very small
    sm: "text-[16px]",
    base: "text-[16px] md:text-[20px]",
    lg: "text-[16px] md:text-[20px] ", // paragraph regular sizing
    xl: "text-[20px] md:text-[24px]",
    "2xl": "text-[24px]",
  };

  return (
    <Component
      className={clsx(
        "leading-relaxed",
        sizeClasses[size],
        baseAlignments[align],
        baseVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const SmallText = ({
  as: Component = "span",
  align = "left",
  variant = "muted",
  size = "sm",
  className,
  children,
  ...props
}: ParagraphProps) => {
  const sizeClasses: Record<Size, string> = {
    xs: "text-[14px]",
    sm: "text-[16px]",
    base: "text-[16px] md:text-[20px] lg:text-[24px]",
    lg: "text-[20px] md:text-[24px]",
    xl: "text-[24px]",
    "2xl": "text-[24px]",
  };

  return (
    <Component
      className={clsx(
        "leading-relaxed",
        sizeClasses[size],
        baseAlignments[align],
        baseVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};