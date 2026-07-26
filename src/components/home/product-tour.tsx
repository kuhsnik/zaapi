import Script from "next/script";
import { IconClock } from "@/components/ui/icons";
import { LinkButton } from "@/components/ui/button";

/* The embed markup below is the snippet supplied in the brief, unmodified.
   React does not execute a <script> tag rendered inside JSX, so the script is
   loaded through next/script with the identical src and the <div> is injected
   verbatim.

   Alignment note: the embed centres itself (max-width:960px; margin:0 auto).
   The heading above it therefore sits in a matching 960px column, so the text
   and the player share one axis instead of drifting apart. */
const EMBED_HTML = `<div
    data-deckoholic-inline="kkpyxCBoHFjINtUz"
    style="aspect-ratio:16/10;max-width:960px;width:100%;margin:0 auto;border:1px solid #e4e4e7;overflow:hidden"
  ></div>`;

export function ProductTour() {
  return (
    <section
      id="tour"
      className="scroll-mt-20 border-t border-line bg-sand/50 py-20 md:py-28 lg:py-32"
    >
      <div className="container-x">
        <div className="mx-auto max-w-[960px]">
          <div className="text-center">
            <p className="t-eyebrow text-teal-700">Interactive tour</p>
            <h2 className="t-h2 mx-auto mt-4 max-w-[20ch] text-ink text-balance">
              See the product before you sign up
            </h2>
            <p className="t-lead mx-auto mt-5 max-w-[54ch] text-ink-3">
              Two minutes, no form, no sales call. Click through a real Zaapi
              inbox and watch the AI agent take an enquiry from first message to
              resolved.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink-2">
                <IconClock className="size-4 text-muted" />
                About two minutes
              </span>
              <span className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink-2">
                <span className="inline-block size-1.5 rounded-full bg-teal" />
                No sign up needed
              </span>
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <div dangerouslySetInnerHTML={{ __html: EMBED_HTML }} />
            <Script
              src="https://app.deckoholic.ai/embed/v1.js"
              strategy="afterInteractive"
            />
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-12">
            <LinkButton href="/signup" size="lg" data-cta="tour-trial">
              Start free trial
            </LinkButton>
            <LinkButton href="/demo" variant="secondary" size="lg" data-cta="tour-demo">
              Book a demo
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
