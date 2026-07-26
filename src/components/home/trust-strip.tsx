import { BrandLogo } from "@/components/ui/brand-logo";
import { partnerBrands } from "@/lib/channels";

const RATING = 4.7;

/* Five stars with the last one part-filled to the real score, rather than five
   solid stars implying a perfect 5.0. */
function Stars({ value }: { value: number }) {
  return (
    <span
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <svg key={i} viewBox="0 0 20 20" className="size-[15px]" aria-hidden="true">
            <defs>
              <linearGradient id={`star-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={fill} stopColor="#FF492C" />
                <stop offset={fill} stopColor="#D8DBE1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${i})`}
              d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z"
            />
          </svg>
        );
      })}
    </span>
  );
}

export function TrustStrip() {
  return (
    <section
      aria-label="Ratings and partnerships"
      className="border-y border-line bg-sand/70"
    >
      <div className="container-x flex flex-col items-center gap-5 py-6 md:flex-row md:justify-between md:gap-8 md:py-5">
        <div className="flex items-center gap-3">
          <BrandLogo name="g2" className="h-7 w-auto shrink-0" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2.5">
            <Stars value={RATING} />
            <p className="t-small text-muted">
              <span className="font-semibold text-ink">{RATING}</span> out of 5
              on <span className="font-semibold text-ink-2">G2</span>
            </p>
          </div>
        </div>

        <div className="hidden h-6 w-px bg-line md:block" />

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {partnerBrands.map((p) => (
            <span key={p.name} className="flex items-center gap-2">
              <BrandLogo
                name={p.brand}
                className="h-[18px] w-auto shrink-0"
                decorative
              />
              <span className="t-small font-semibold text-ink-2">{p.name}</span>
            </span>
          ))}
          <span className="t-small text-muted">partner</span>
        </div>
      </div>
    </section>
  );
}
