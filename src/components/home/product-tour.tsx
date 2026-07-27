import { LinkButton } from "@/components/ui/button";
import { TourStage } from "@/components/home/tour-stage";
import { TourEmbedScript } from "@/components/home/tour-embed-script";

/* Popup embed. The trigger is the button inside <TourStage>, which carries the
   supplied data-deckoholic-walkthrough attribute unmodified; the script itself
   is loaded by <TourEmbedScript>.

   One line of copy above the stage. The heading already says "before you sign
   up", so a subhead and a "no sign up needed" chip row underneath it were
   saying the same thing three times and pushing the stage out of view. */
export function ProductTour() {
  return (
    <section className="border-t border-line bg-sand/50 py-12 md:py-16 lg:py-20">
      <div className="container-x">
        {/* The anchor sits on the heading block, not the section, so a click
            from the hero lands with the heading under the header and the whole
            stage in view rather than stopping in the section's padding. */}
        <div id="tour" className="mx-auto max-w-[960px] scroll-mt-[72px]">
          <h2 className="t-h2 text-center text-ink text-balance">
            See it before you sign up
          </h2>

          <div className="mt-6 md:mt-7">
            <TourStage />
            <TourEmbedScript />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-10">
            <LinkButton href="/signup" size="lg" data-cta="tour-trial">
              Start free trial
            </LinkButton>
            <LinkButton
              href="/demo"
              variant="secondary"
              size="lg"
              data-cta="tour-demo"
            >
              Book a demo
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
