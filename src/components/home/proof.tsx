/* Placeholders are deliberate and marked as such. The brief was explicit: no
   invented customer counts, no invented logos. These three metrics are the
   ones this block should carry once they come out of the CRM. */

const metrics = [
  {
    token: "__%",
    label: "of enquiries resolved without a human",
    note: "Median across active accounts, trailing 30 days.",
  },
  {
    token: "__ hrs",
    label: "of agent time returned each week",
    note: "Per seller, against their own pre-Zaapi baseline.",
  },
  {
    token: "__ min",
    label: "first response, every channel",
    note: "Marketplace chat included, where response time moves seller rating.",
  },
];

function PlaceholderTag() {
  return (
    <span className="t-mono inline-flex items-center gap-1.5 rounded-full border border-dashed border-line px-2 py-0.5 text-faint">
      <span className="inline-block size-1.5 rounded-full bg-faint/60" />
      placeholder
    </span>
  );
}

export function Proof() {
  return (
    <section className="section-y border-b border-line bg-sand">
      <div className="container-x">
        <div className="max-w-[46rem]">
          <p className="t-eyebrow text-teal-700">Proof</p>
          <h2 className="t-h2 mt-4 text-ink text-balance">
            The numbers go here, once they are measured
          </h2>
          <p className="t-lead mt-5 max-w-[56ch] text-ink-3">
            Left unfilled on purpose. These three come out of the CRM and live
            accounts, not out of a copywriter, and this page should not go up
            until they do.
          </p>
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-14 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white p-6 md:p-8">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <div
                  className="t-display flex h-[1.15em] items-center text-faint/70 select-none"
                  aria-hidden="true"
                >
                  {m.token}
                </div>
                <p className="t-h4 mt-5 text-ink text-balance">{m.label}</p>
                <p className="t-small mt-2 text-muted">{m.note}</p>
                <div className="mt-5">
                  <PlaceholderTag />
                </div>
              </dd>
            </div>
          ))}
        </dl>

        {/* Structure of the quote slot, without a fabricated quote in it. */}
        <figure className="mt-6 rounded-2xl border border-dashed border-line bg-white p-6 md:p-8">
          <blockquote className="t-h3 max-w-[46ch] text-faint/80">
            &ldquo;Customer quote — one sentence on the volume they handled
            before, and what the team does with the hours now.&rdquo;
          </blockquote>
          <figcaption className="t-small mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-muted">
            <span className="inline-block size-8 rounded-full border border-dashed border-line" />
            <span>Name, role — seller name, market</span>
            <PlaceholderTag />
          </figcaption>
        </figure>

        <p className="t-small mt-6 max-w-[62ch] text-muted">
          Customer logos and counts are intentionally absent. Nothing on this
          page is invented, and a logo wall we cannot substantiate is worth less
          than an honest gap.
        </p>
      </div>
    </section>
  );
}
