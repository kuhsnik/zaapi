import { IconCheck } from "@/components/ui/icons";

/* Exactly the line specified in the brief. The partner names carry the weight.
   No third-party logo files are reproduced — we don't have rights to them and
   a wall of borrowed logos is the generic move anyway. */
export function TrustStrip() {
  return (
    <section aria-label="Partnerships" className="border-y border-line bg-sand">
      <div className="container-x flex items-center justify-center gap-3 py-6 md:justify-start md:py-7">
        <IconCheck className="hidden size-4 shrink-0 text-teal-600 sm:block" />
        <p className="t-h4 text-center font-normal text-muted md:text-left">
          <span className="font-semibold text-ink-2">Meta</span>,{" "}
          <span className="font-semibold text-ink-2">TikTok</span>,{" "}
          <span className="font-semibold text-ink-2">Shopee</span> and{" "}
          <span className="font-semibold text-ink-2">Lazada</span> partner.
        </p>
      </div>
    </section>
  );
}
