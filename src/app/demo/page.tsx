import type { Metadata } from "next";
import { MinimalHeader } from "@/components/site/minimal-header";
import { DemoFlow } from "@/components/demo/demo-flow";
import { IconCheck } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Thirty minutes on your own channels. Your details are captured when you submit the form, not when you book a slot.",
};

const expect = [
  {
    title: "Your channels, not a generic account",
    body: "Bring a Shopee, Lazada, TikTok Shop or LINE store and we will show the inbox against the way you actually sell.",
  },
  {
    title: "The agent on your real questions",
    body: "Send us the five questions your team answers most and we will run them through the agent live.",
  },
  {
    title: "A straight answer on fit",
    body: "If your volume does not justify it yet, we will say so on the call rather than three weeks into a trial.",
  },
];

export default function DemoPage() {
  return (
    <>
      {/* No nav and no second call to action on this page, per the deck. */}
      <MinimalHeader />

      <main className="flex-1">
        <div className="container-x">
          <div className="grid lg:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] lg:gap-20 xl:gap-28">
            {/* min-w-0: without it the grid track sizes to the widest child
                (the scrolling day picker) and drags the whole column past the
                viewport on a phone. */}
            <div className="min-w-0 py-6 sm:py-10 lg:py-16">
              <DemoFlow />
            </div>

            <aside className="min-w-0 border-t border-line py-10 lg:border-t-0 lg:border-l lg:py-16 lg:pl-20 xl:pl-28">
              <p className="t-eyebrow text-teal-700">What the call covers</p>
              <ul className="mt-6 space-y-7">
                {expect.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <IconCheck className="size-3.5" />
                    </span>
                    <div>
                      <p className="t-h4 text-ink">{item.title}</p>
                      <p className="t-small mt-1.5 max-w-[46ch] text-muted">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-line pt-8">
                <p className="t-h4 text-ink">
                  Rather not talk to anyone yet?
                </p>
                <p className="t-small mt-2 max-w-[46ch] text-muted">
                  The interactive tour on the homepage runs about two minutes
                  and needs no sign up. Plenty of people watch that first and
                  book afterwards.
                </p>
                <a
                  href="/#tour"
                  className="t-small mt-2 inline-flex py-1.5 font-medium text-teal-700 underline decoration-teal-100 underline-offset-4 hover:decoration-teal-600"
                >
                  Take the tour instead
                </a>
              </div>

              <p className="t-small mt-8 text-faint">
                Meta, TikTok, Shopee and Lazada partner.
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
