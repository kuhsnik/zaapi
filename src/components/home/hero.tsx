import { LinkButton } from "@/components/ui/button";
import { IconArrowDown } from "@/components/ui/icons";
import { BrandLogo } from "@/components/ui/brand-logo";
import { marketplaceChannels, messagingChannels } from "@/lib/channels";

const allChannels = [...marketplaceChannels, ...messagingChannels];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Soft, single-source light behind the fold. No banded gradient. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[520px] opacity-[0.55]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, rgba(0,198,168,0.16) 0%, rgba(0,198,168,0) 70%)",
        }}
      />

      <div className="container-x pt-16 pb-14 md:pt-24 md:pb-20 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="t-display mx-auto max-w-[16ch] text-ink text-balance">
            A late reply is a lost order
          </h1>

          <p className="t-lead mx-auto mt-6 max-w-[58ch] text-ink-3 md:mt-7">
            Your customers message on Shopee, Lazada, TikTok Shop, LINE and
            WhatsApp, and they expect an answer now. Zaapi puts every channel in
            one inbox with order history attached, and an AI agent answers up to
            92% of enquiries in seconds. Your team handles what actually needs a
            human.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-10">
            <LinkButton href="/signup" size="lg" data-cta="hero-trial">
              Start free trial
            </LinkButton>
            <LinkButton
              href="#tour"
              variant="secondary"
              size="lg"
              data-cta="hero-tour"
              className="group"
            >
              See it first, no sign up needed
              <IconArrowDown className="size-4 text-muted transition-transform duration-200 group-hover:translate-y-0.5" />
            </LinkButton>
          </div>

          <p className="t-small mt-5 text-muted">
            No credit card. Two minutes to connect your first channel.
          </p>
        </div>

        {/* The channels, in real logos, inside the first fold. */}
        <div className="mt-14 md:mt-16">
          <p className="t-eyebrow text-center text-faint">One inbox for</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 sm:gap-x-10">
            {allChannels.map((c) => (
              <li key={c.name} className="flex items-center gap-2.5">
                <BrandLogo name={c.brand} className="h-6 w-auto shrink-0 sm:h-7" />
                <span className="t-small font-medium text-ink-3">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
