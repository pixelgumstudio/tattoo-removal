// types.ts
// Meta Data type
export interface PageInterface {
  title: string,
  description: string,
  url: string,
  image: string,
  }

  
// === Typography ===
export type Alignment = "left" | "center" | "right" | "justify";
export type Variant = "default" | "muted" | "secondary";
export type Size = "sm" | "base" | "lg" | "xl" | "2xl";

// === FAQ ===
export interface FaqItemType {
  question: string;
  answer: string;
  number?: number;
}

// === Section / Heading and description ===
export interface CentreProps {
  state?: string;
    title?: string;
    description?: string;
    alignment?: "left" | "center" | "right";
    position?: "left" | "center" | "right";
  }

// === Card / LocationCard ===
export interface LocationCardType {
  imageUrl: string;
  city: string;
  state: string;
  servicesCount: number;
  href: string;
}

// === Feature Card (from how it works section) ===
export interface FeatureCardType {
  icon: string; // emoji or icon name
  title: string;
  description: string;
}
