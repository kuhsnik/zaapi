import { LinkButton } from "@/components/ui/button";
import { IconArrowDown } from "@/components/ui/icons";

export function ClosingCta() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-[46rem]">
          <h2 className="t-h2 max-w-[18ch] text-ink text-balance">
            Start with the questions you are tired of answering
          </h2>
          <p className="t-lead mt-5 max-w-[52ch] text-ink-3">
            Connect one channel, point the agent at your order data and watch
            what it clears in the first week. Keep going only if the numbers are
            worth it.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/signup" size="lg" data-cta="closing-trial">
              Start free trial
            </LinkButton>
            <LinkButton
              href="#tour"
              variant="secondary"
              size="lg"
              data-cta="closing-tour"
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
      </div>
    </section>
  );
}
