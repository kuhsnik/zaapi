import { IconArrowRight, IconCheck, IconPerson } from "@/components/ui/icons";

const handled = [
  "Order status, tracking and delivery windows, read live from Shopee, Lazada and TikTok Shop",
  "Stock, sizes and what is back in next",
  "Price, bundle and promotion questions",
  "Address changes inside the courier cut-off",
  "Returns and refund policy, in Thai, English or Bahasa",
];

const routed = [
  "Anything that moves money back to the customer",
  "Complaints, and anything the sentiment check flags",
  "High-value carts and the repeat buyers you have tagged",
  "Any question the agent is not confident enough to answer",
];

export function AiAgent() {
  return (
    <section
      id="ai-agent"
      className="section-y scroll-mt-20 border-b border-line"
    >
      <div className="container-x">
        <div className="max-w-[46rem]">
          <p className="t-eyebrow text-teal-700">AI agent</p>
          <h2 className="t-h2 mt-4 text-ink text-balance">
            The first layer handled. Humans on the rest.
          </h2>
          <p className="t-lead mt-5 max-w-[58ch] text-ink-3">
            Most of what arrives is the same handful of questions asked a
            thousand different ways. The agent takes that layer using real order
            data. Everything underneath it reaches a person, with the thread and
            the order already attached.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-14 lg:grid-cols-2">
          <div className="bg-white p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <IconCheck className="size-4" />
              </span>
              <h3 className="t-h3 text-ink">Handled by the agent</h3>
            </div>
            <ul className="mt-7 space-y-4">
              {handled.map((item) => (
                <li key={item} className="flex gap-3">
                  <IconCheck className="mt-[5px] size-4 shrink-0 text-teal-600" />
                  <span className="t-body text-ink-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-sand text-ink-3">
                <IconPerson className="size-4" />
              </span>
              <h3 className="t-h3 text-ink">Routed to a human</h3>
            </div>
            <ul className="mt-7 space-y-4">
              {routed.map((item) => (
                <li key={item} className="flex gap-3">
                  <IconArrowRight className="mt-[5px] size-4 shrink-0 text-faint" />
                  <span className="t-body text-ink-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="t-lead mt-10 max-w-[52ch] text-ink-2">
          The handover carries the whole thread, the order and what the agent
          already tried.{" "}
          <span className="text-muted">
            Nobody has to ask the customer to start again.
          </span>
        </p>
      </div>
    </section>
  );
}
