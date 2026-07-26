import { LinkButton } from "@/components/ui/button";
import { IconArrowDown } from "@/components/ui/icons";
import { InboxMock } from "@/components/home/inbox-mock";

/* Copy in this fold is Zaapi's own best-performing ad line, used verbatim.
   The ads name a problem; this page now names the same one. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24">
      <div className="container-x">
        <div className="max-w-[54rem]">
          <h1 className="t-display max-w-[15ch] text-ink text-balance">
            Stop hiring to answer the same questions
          </h1>

          <p className="t-lead mt-6 max-w-[58ch] text-ink-3 md:mt-7">
            Zaapi&rsquo;s AI agent handles up to 92% of customer enquiries
            across LINE, WhatsApp, Shopee, Lazada, TikTok Shop, Instagram and
            your website, in one inbox with order history attached. Your team
            handles what actually needs a human.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-10">
            <LinkButton
              href="/signup"
              size="lg"
              data-cta="hero-trial"
              className="sm:w-auto"
            >
              Start free trial
            </LinkButton>
            <LinkButton
              href="#tour"
              variant="secondary"
              size="lg"
              data-cta="hero-tour"
              className="group sm:w-auto"
            >
              See it first, no sign up needed
              <IconArrowDown className="size-4 text-muted transition-transform duration-200 group-hover:translate-y-0.5" />
            </LinkButton>
          </div>

          <p className="t-small mt-5 text-muted">
            No credit card. Two minutes to connect your first channel.
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          <InboxMock />
        </div>
      </div>
    </section>
  );
}
