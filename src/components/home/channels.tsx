import { marketplaceChannels, messagingChannels } from "@/lib/channels";

export function Channels() {
  return (
    <section
      id="channels"
      className="section-y scroll-mt-20 border-b border-line"
    >
      <div className="container-x">
        <div className="max-w-[46rem]">
          <p className="t-eyebrow text-teal-700">Channels</p>
          <h2 className="t-h2 mt-4 text-ink text-balance">
            Start where your customers actually buy
          </h2>
          <p className="t-lead mt-5 max-w-[56ch] text-ink-3">
            Shopee, Lazada, TikTok Shop and LINE are native. Chat, order history
            and delivery status come through together, so the agent answers
            &ldquo;where is my order&rdquo; without anyone opening a seller
            centre tab. Most Western platforms do not offer these at all.
          </p>
        </div>

        {/* Marketplaces carry the visual weight. This is the ground the
            competitors leave open. */}
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {marketplaceChannels.map((c) => (
            <li
              key={c.name}
              className="card group relative p-5 transition-colors duration-200 hover:border-ink/15 sm:p-6"
            >
              <span
                className="flex size-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: c.tint, color: c.hue }}
              >
                <c.icon className="size-[21px]" />
              </span>
              <p className="t-h4 mt-5 text-ink">{c.name}</p>
              <p className="t-small mt-1 text-muted">{c.note}</p>
              <p className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-teal-700 uppercase">
                <span className="inline-block size-1.5 rounded-full bg-teal" />
                Native
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-line pt-8 md:mt-14">
          <p className="t-small font-medium text-muted">
            And the channels you would expect
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {messagingChannels.map((c) => (
              <li
                key={c.name}
                className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-2 pr-4 pl-2.5"
              >
                <span
                  className="flex size-7 items-center justify-center rounded-full"
                  style={{ backgroundColor: c.tint, color: c.hue }}
                >
                  <c.icon className="size-4" />
                </span>
                <span className="text-[0.9375rem] font-medium text-ink-2">
                  {c.name}
                </span>
                <span className="t-small hidden text-faint sm:inline">
                  {c.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
