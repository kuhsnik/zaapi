import { LinkButton } from "@/components/ui/button";
import { IconArrowDown } from "@/components/ui/icons";
import { BrandLogo } from "@/components/ui/brand-logo";
import {
  marketplaceChannels,
  messagingChannels,
  partnerBrands,
} from "@/lib/channels";

const allChannels = [...marketplaceChannels, ...messagingChannels];
const RATING = 4.7;

/* Five stars, the last part-filled to the real score rather than five solid
   stars implying a perfect 5.0. */
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
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="size-[13px]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`hs-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={fill} stopColor="#FF492C" />
                <stop offset={fill} stopColor="#D8DBE1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#hs-${i})`}
              d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z"
            />
          </svg>
        );
      })}
    </span>
  );
}

/* Everything that earns the click lives in the first screen: the problem, the
   answer, both actions, the channels, and the proof.

   On the repetition question — the channels are shown once, as logos, because
   the marketplace list is the moat. The partner claim is a different claim
   (certified by those platforms, not merely connected to them) so it is set as
   one short line of text beside the G2 score rather than a second logo row.
   No mark appears twice as a logo.

   The section fills exactly one screen — svh rather than vh, so mobile browser
   chrome is accounted for — which keeps the tour section from peeking into the
   first fold on any device. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-56px)] flex-col justify-center overflow-hidden sm:min-h-[calc(100svh-64px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[520px] opacity-[0.55]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, rgba(0,198,168,0.16) 0%, rgba(0,198,168,0) 70%)",
        }}
      />

      <div className="container-x pt-6 pb-12 sm:pt-11 md:pt-14 md:pb-14">
        <div className="mx-auto max-w-4xl text-center">
          {/* Not framed as sales. The people messaging are cold leads, repeat
              buyers and complaints alike, and the promise is that all of them
              are answered on time and reach the right team.

              Subhead is active and positive: what fast replies win, not what
              slow ones cost. It deliberately does not reopen with "answer on
              time" — the headline already said that, and repeating it spends
              the strongest position in the sentence on an echo. This line adds
              the two outcomes (deals won, customers kept) and the shape of the
              product instead. No figures either; a percentage in the first
              breath invites an argument. */}
          <h1 className="t-display mx-auto max-w-[19ch] text-ink text-balance">
            Every lead, every customer, answered on time
          </h1>

          <p className="t-lead mx-auto mt-5 max-w-[68ch] text-ink-3 md:mt-6">
            Fast replies win more deals and keep customers happy. Run every
            channel from one inbox, with AI agents beside your team.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center sm:gap-3 md:mt-8">
            <LinkButton href="/signup" size="lg" data-cta="hero-trial" className="h-12 sm:h-[52px]">
              Start free trial
            </LinkButton>
            <LinkButton
              href="#tour"
              variant="secondary"
              size="lg"
              data-cta="hero-tour"
              className="group h-12 sm:h-[52px]"
            >
              See it first, no sign up needed
              <IconArrowDown className="size-4 text-muted transition-transform duration-200 group-hover:translate-y-0.5" />
            </LinkButton>
          </div>

        </div>

        {/* Marks only, in grey. Spelling out every platform name made the fold
            read as a paragraph, and eight brand palettes at full strength pulled
            attention off the headline. Shapes stay recognisable; names still
            reach screen readers through each logo's alt. */}
        <div className="mt-5 md:mt-11">
          <p className="t-eyebrow text-center text-faint">Supported platforms</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-5 sm:gap-x-8">
            {allChannels.map((c) => (
              <li key={c.name} className="flex">
                <BrandLogo
                  name={c.brand}
                  className="h-5 w-auto shrink-0 opacity-70 grayscale sm:h-7"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* One credibility line. G2 score, then the partner claim as text. */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-line pt-4 sm:gap-x-5 md:mt-8 md:pt-6">
          <span className="flex items-center gap-2">
            <BrandLogo name="g2" className="h-[19px] w-auto shrink-0" />
            <Stars value={RATING} />
            <span className="t-small text-muted">
              <span className="font-semibold text-ink">{RATING}</span> out of 5
            </span>
          </span>

          <span className="hidden h-4 w-px bg-line sm:block" />

          <p className="t-small text-center text-muted">
            Official{" "}
            <span className="font-semibold text-ink-2">
              {partnerBrands.map((p) => p.name).join(", ").replace(/, ([^,]*)$/, " and $1")}
            </span>{" "}
            partner
          </p>
        </div>
      </div>
    </section>
  );
}
