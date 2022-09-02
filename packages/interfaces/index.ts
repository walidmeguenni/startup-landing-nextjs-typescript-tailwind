import type { StaticImageData } from "next/image";

export interface PricingProps  {
  index: number;
  id: number;
  title: string;
  amount: number;
  is_recommended: boolean;
  library_access: boolean;
  multiple_user: boolean;
  refund_policy: boolean;
  google_analytics: boolean;
  support: boolean;
  trial_period: number;
};

export interface CardSupportProps {
  id:number;
  image: StaticImageData;
  title: string;
  description: string;
}

export interface SectionHeaderProps {
  sizeHead: number;
  sizeText: number;
  leadingHead: number;
  leadingText: number;
  witdthHead?: number;
  witdthText: number;
  trackingHead: number;
  title: string;
  description: string;
  pl?: number;
}
export interface FaqItemProps {
  index: number;
  id: number;
  title: string;
  contents: string;
}