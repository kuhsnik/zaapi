import { BrandLogo, type BrandKey } from "@/components/ui/brand-logo";

/* The launcher surface behind the tour button. Everything here is CSS —
   drifting light, one slow sheen pass, pulsing rings under the play control —
   so it costs nothing at runtime and stops the moment a visitor has
   prefers-reduced-motion set (handled globally in globals.css). */

const floatingChips: { brand: BrandKey; label: string; pos: string; delay: string }[] =
  [
    { brand: "shopee", label: "Where is my order?", pos: "left-[6%] top-[16%]", delay: "0s" },
    { brand: "line", label: "มีไซส์ 42 ไหมครับ", pos: "right-[7%] top-[26%]", delay: "1.6s" },
    { brand: "whatsapp", label: "Change my address", pos: "left-[11%] bottom-[18%]", delay: "3.1s" },
    { brand: "lazada", label: "Refund status?", pos: "right-[9%] bottom-[14%]", delay: "2.3s" },
  ];

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
      <path fill="currentColor" d="M8.4 5.6v12.8L19 12 8.4 5.6Z" />
    </svg>
  );
}

export function TourStage() {
  return (
    <div className="relative isolate aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink">
      {/* drifting light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ animation: "drift-a 26s ease-in-out infinite" }}
      >
        <div
          className="absolute top-[-25%] left-[-10%] h-[85%] w-[70%] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,198,168,0.5) 0%, rgba(0,198,168,0) 68%)",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ animation: "drift-b 32s ease-in-out infinite" }}
      >
        <div
          className="absolute right-[-12%] bottom-[-28%] h-[85%] w-[65%] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(78,220,202,0.34) 0%, rgba(78,220,202,0) 70%)",
          }}
        />
      </div>

      {/* dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(75% 65% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(75% 65% at 50% 50%, #000 30%, transparent 100%)",
        }}
      />

      {/* one slow pass of light across the frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -z-10 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
          animation: "sheen 9s ease-in-out infinite",
        }}
      />

      {/* channel chips, drifting — the enquiries the tour walks through */}
      {floatingChips.map((c) => (
        <div
          key={c.label}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-md sm:flex ${c.pos}`}
          style={{
            animation: `float-chip 7.5s ease-in-out infinite`,
            animationDelay: c.delay,
          }}
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-white">
            <BrandLogo name={c.brand} className="h-3 w-auto" decorative />
          </span>
          <span className="text-[12px] font-medium whitespace-nowrap text-white/80">
            {c.label}
          </span>
        </div>
      ))}

      {/* launcher */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full border border-teal/40"
            style={{ animation: "ring 3.4s ease-out infinite" }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full border border-teal/30"
            style={{ animation: "ring 3.4s ease-out infinite", animationDelay: "1.7s" }}
          />

          {/* The deckoholic trigger. This exact attribute is what the embed
              script binds the popup to. */}
          <button
            type="button"
            data-deckoholic-walkthrough="kkpyxCBoHFjINtUz"
            data-cta="tour-launch"
            className="group inline-flex h-14 items-center gap-3 rounded-full bg-white pr-7 pl-3 text-[15px] font-semibold text-ink shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] sm:h-[60px] sm:text-base"
          >
            <span className="mark-gradient flex size-10 items-center justify-center rounded-full text-ink sm:size-11">
              <PlayGlyph />
            </span>
            Start interactive tour
          </button>
        </div>

        <p className="mt-5 text-[13px] font-medium text-white/55">
          Two minutes · No sign up needed
        </p>
      </div>

      {/* frame furniture */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3.5 sm:px-5">
        <span className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span
              className="absolute inline-flex size-full rounded-full bg-teal"
              style={{ animation: "blink 2.4s ease-in-out infinite" }}
            />
          </span>
          <span className="text-[11px] font-semibold tracking-[0.13em] text-white/50 uppercase">
            Zaapi product tour
          </span>
        </span>
        <span className="hidden text-[11px] font-medium text-white/40 sm:block">
          Live product · not a video
        </span>
      </div>
    </div>
  );
}
