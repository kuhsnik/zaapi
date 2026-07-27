/* Real brand marks, not lookalikes.
   Shopee, TikTok, LINE, WhatsApp, Facebook, Instagram, Meta and G2 come from
   the simple-icons set (official glyph paths + official brand hex). Lazada is
   not in that set, so its current 2019 mark is taken from Wikimedia Commons.
   Files live in /public/brand. */

export type BrandKey =
  | "shopee"
  | "lazada"
  | "tiktok"
  | "line"
  | "whatsapp"
  | "facebook"
  | "instagram"
  | "meta"
  | "g2"
  | "gmail";

const TITLES: Record<BrandKey, string> = {
  shopee: "Shopee",
  lazada: "Lazada",
  tiktok: "TikTok",
  line: "LINE",
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  instagram: "Instagram",
  meta: "Meta",
  g2: "G2",
  gmail: "Email",
};

export function BrandLogo({
  name,
  className = "h-5 w-auto",
  decorative = false,
}: {
  name: BrandKey;
  className?: string;
  decorative?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/${name}.svg`}
      alt={decorative ? "" : TITLES[name]}
      aria-hidden={decorative || undefined}
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      className={`object-contain ${className}`}
    />
  );
}

export { TITLES as BRAND_TITLES };
