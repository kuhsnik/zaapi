import { BrandLogo, type BrandKey } from "@/components/ui/brand-logo";

/* One idea, drawn once: every channel curves into a single point, and that
   point is the button.

   Deliberately quiet. No dot grid, no sheen sweep, no rotating rings, no
   floating text — those were four effects competing for the same attention.
   What is left is a dark field, seven logo tiles on two arcs, smooth bezier
   curves converging on the centre, and one slow pulse of light travelling down
   each curve. Everything stops under prefers-reduced-motion (globals.css). */

type Tile = {
  brand: BrandKey;
  /* centre point, as a percentage of the 16:10 stage */
  x: number;
  y: number;
  delay: string;
  /* a real-sounding enquiry for that channel */
  msg: string;
  /* hidden on phones, where the stage is ~220px tall and the middle band
     belongs to the button */
  wideOnly?: boolean;
};

/* Four a side, mirrored. An odd count left one arc short and the whole frame
   read lopsided. */
const TILES: Tile[] = [
  { brand: "shopee", x: 18, y: 22, delay: "0s", msg: "Where is my order?" },
  { brand: "lazada", x: 11.5, y: 40.5, delay: "1.75s", msg: "Refund status?", wideOnly: true },
  { brand: "tiktok", x: 11.5, y: 59.5, delay: "3.5s", msg: "Bundle still on?", wideOnly: true },
  { brand: "line", x: 18, y: 78, delay: "5.25s", msg: "มีไซส์ 42 ไหมครับ" },
  { brand: "whatsapp", x: 82, y: 22, delay: "0.87s", msg: "Change my address?" },
  { brand: "facebook", x: 88.5, y: 40.5, delay: "2.62s", msg: "Ship to Penang?", wideOnly: true },
  { brand: "instagram", x: 88.5, y: 59.5, delay: "4.37s", msg: "Still available?", wideOnly: true },
  { brand: "gmail", x: 82, y: 78, delay: "6.12s", msg: "Invoice for #SP-4821" },
];

const CYCLE = 7;
const VW = 1600;
const VH = 1000;
const CX = VW / 2;
const CY = VH / 2;

/* Horizontal control points give the curve a flat entry into the centre, so the
   seven paths arrive parallel rather than radiating like a starburst. */
function curve(t: Tile) {
  const x = (t.x / 100) * VW;
  const y = (t.y / 100) * VH;
  const left = x < CX;
  const c1x = left ? x + 300 : x - 300;
  const c2x = left ? CX - 260 : CX + 260;
  return `M ${x} ${y} C ${c1x} ${y}, ${c2x} ${CY}, ${CX} ${CY}`;
}

/* The Zaapi bolt rather than a generic play triangle — the mark is the brand,
   and it sits at the exact point every channel converges on. White silhouette
   of the real mark, since the mark's own teal would vanish on the teal disc. */
function BoltMark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/zaapi-mark-white.png"
      alt=""
      aria-hidden="true"
      width={258}
      height={343}
      className="h-[17px] w-auto sm:h-[20px]"
    />
  );
}

export function TourStage() {
  return (
    <div className="relative isolate aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220]">
      {/* one soft light, centred under the button */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(46% 52% at 50% 50%, rgba(0,198,168,0.20) 0%, rgba(0,198,168,0.05) 45%, rgba(11,18,32,0) 72%)",
        }}
      />
      {/* edge falloff, so the frame reads as depth rather than a flat block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(11,18,32,0) 55%, rgba(6,11,20,0.85) 100%)",
        }}
      />

      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        <defs>
          <linearGradient id="wireL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4EDCCA" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#4EDCCA" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="wireR" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#4EDCCA" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#4EDCCA" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {TILES.map((t) => {
          const d = curve(t);
          const left = t.x < 50;
          return (
            <g
              key={t.brand}
              className={t.wideOnly ? "hidden sm:inline" : undefined}
            >
              <path
                d={d}
                pathLength={1000}
                fill="none"
                stroke={left ? "url(#wireL)" : "url(#wireR)"}
                strokeWidth={1.6}
              />
              <path
                d={d}
                pathLength={1000}
                fill="none"
                stroke="#7FF0DF"
                strokeWidth={2.6}
                strokeLinecap="round"
                strokeDasharray="46 954"
                style={{
                  animation: `flow ${CYCLE}s cubic-bezier(0.4, 0, 0.5, 1) infinite`,
                  animationDelay: t.delay,
                  filter: "drop-shadow(0 0 5px rgba(127,240,223,0.75))",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* channel tiles — one shape, one size, evenly weighted */}
      {TILES.map((t) => (
        <div
          key={t.brand}
          aria-hidden="true"
          className={`pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 ${
            t.wideOnly ? "hidden sm:block" : ""
          }`}
          style={{ left: `${t.x}%`, top: `${t.y}%` }}
        >
          <div
            className="flex size-10 items-center justify-center rounded-[13px] border border-white/70 bg-white shadow-[0_10px_28px_-8px_rgba(0,0,0,0.75)] sm:size-[52px] sm:rounded-[16px]"
            style={{
              animation: `tile-pulse ${CYCLE}s ease-in-out infinite`,
              animationDelay: t.delay,
            }}
          >
            <BrandLogo name={t.brand} className="h-[18px] w-auto sm:h-6" />
          </div>

          {/* Anchored to the tile's outer edge so it can never leave the frame,
              and sized off the stage width so it scales with it. */}
          <span
            className={`absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11.5px] font-medium text-white/70 backdrop-blur-md md:block ${
              t.x < 50 ? "left-full ml-3" : "right-full mr-3"
            }`}
            style={{
              animation: `msg-in ${CYCLE}s ease-in-out infinite`,
              animationDelay: t.delay,
              opacity: 0,
            }}
          >
            {t.msg}
          </span>
        </div>
      ))}

      {/* the convergence point */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
        <div className="relative flex items-center justify-center">
          <span
            aria-hidden="true"
            className="absolute size-[190px] rounded-full blur-3xl sm:size-[280px]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,198,168,0.5) 0%, rgba(0,198,168,0) 70%)",
              animation: "breathe 6s ease-in-out infinite",
            }}
          />

          {/* The deckoholic trigger. This exact attribute is what the embed
              script binds the popup to. */}
          {/* Heartbeat lives on the wrapper so the button keeps its own
              hover/active transform without the two fighting. */}
          <span
            className="relative inline-flex"
            style={{ animation: "heartbeat 5.5s ease-in-out infinite" }}
          >
            <button
              type="button"
              data-deckoholic-walkthrough="kkpyxCBoHFjINtUz"
              data-cta="tour-launch"
              className="group relative inline-flex h-12 items-center gap-2.5 overflow-hidden rounded-full bg-white pr-5 pl-1.5 text-[13.5px] font-semibold text-ink shadow-[0_18px_50px_-12px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99] sm:h-[58px] sm:gap-3 sm:pr-7 sm:pl-2 sm:text-[15.5px]"
            >
              {/* glossy sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(15,23,42,0.07) 50%, rgba(255,255,255,0) 100%)",
                  animation: "gloss 5.5s ease-in-out infinite",
                }}
              />
              <span className="mark-gradient relative flex size-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 sm:size-[42px]">
                <BoltMark />
              </span>
              <span className="relative">Start interactive tour</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
