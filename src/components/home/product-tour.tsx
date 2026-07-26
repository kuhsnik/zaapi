import Script from "next/script";
import { IconClock } from "@/components/ui/icons";

/* The embed markup below is the snippet supplied in the brief, unmodified.
   React does not execute a <script> tag rendered inside JSX, so the script is
   loaded through next/script with the identical src (async is implicit under
   the afterInteractive strategy) and the <div> is injected verbatim. */
const EMBED_HTML = `<div
    data-deckoholic-inline="kkpyxCBoHFjINtUz"
    style="aspect-ratio:16/10;max-width:960px;width:100%;margin:0 auto;border:1px solid #e4e4e7;overflow:hidden"
  ></div>`;

export function ProductTour() {
  return (
    <section id="tour" className="section-y scroll-mt-20 border-b border-line">
      <div className="container-x">
        <div className="max-w-[46rem]">
          <p className="t-eyebrow text-teal-700">Interactive tour</p>
          <h2 className="t-h2 mt-4 text-ink text-balance">
            See the product before you sign up
          </h2>
          <p className="t-lead mt-5 max-w-[54ch] text-ink-3">
            Two minutes, no form, no sales call. Click through a real Zaapi
            inbox and watch the AI agent take a Shopee enquiry from first
            message to resolved.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
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

        <div className="mt-12 md:mt-14">
          <div dangerouslySetInnerHTML={{ __html: EMBED_HTML }} />
          <Script
            src="https://app.deckoholic.ai/embed/v1.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
}
