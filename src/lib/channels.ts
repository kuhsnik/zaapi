import type { BrandKey } from "@/components/ui/brand-logo";

export type Channel = { name: string; brand: BrandKey };

/* Marketplaces first — the ground respond.io and sleekflow.io leave open, and
   where roughly 70% of Zaapi's customers actually sell. */
export const marketplaceChannels: Channel[] = [
  { name: "Shopee", brand: "shopee" },
  { name: "Lazada", brand: "lazada" },
  { name: "TikTok Shop", brand: "tiktok" },
  { name: "LINE", brand: "line" },
];

export const messagingChannels: Channel[] = [
  { name: "WhatsApp", brand: "whatsapp" },
  { name: "Facebook", brand: "facebook" },
  { name: "Instagram", brand: "instagram" },
  { name: "Email", brand: "gmail" },
];

export const partnerBrands: { name: string; brand: BrandKey }[] = [
  { name: "Meta", brand: "meta" },
  { name: "TikTok", brand: "tiktok" },
  { name: "Shopee", brand: "shopee" },
  { name: "Lazada", brand: "lazada" },
];
