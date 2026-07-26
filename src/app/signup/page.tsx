import type { Metadata } from "next";
import { MinimalHeader } from "@/components/site/minimal-header";
import { SignupForm } from "@/components/signup/signup-form";
import { IconCheck } from "@/components/ui/icons";
import { BrandLogo } from "@/components/ui/brand-logo";
import { marketplaceChannels, messagingChannels } from "@/lib/channels";

export const metadata: Metadata = {
  title: "Start your free trial",
  description:
    "Create a Zaapi account in under a minute. Free for 14 days, no credit card.",
};

const reassurance = [
  {
    title: "Two minutes to your first channel",
    body: "Connect Shopee, Lazada, TikTok Shop or LINE and the last 30 days of conversations come with it.",
  },
  {
    title: "The agent starts in draft mode",
    body: "It writes replies and your team approves them, until you have seen enough to let it send on its own.",
  },
  {
    title: "Nothing to install, nothing to pay",
    body: "Fourteen days, all channels, no card. We ask about team size during setup, not before it.",
  },
];

export default function SignupPage() {
  return (
    <>
      <MinimalHeader
        aside={{
          label: "Already have an account?",
          linkLabel: "Log in",
          href: "/signup",
        }}
      />

      <main className="flex-1">
        <div className="container-x">
          <div className="grid lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20 xl:gap-28">
            {/* Form first in the DOM so nothing pushes the button down on a
                phone. Measured target: submit fully visible in the first
                viewport at 390px wide. */}
            <div className="min-w-0 py-5 sm:py-10 lg:py-16">
              <SignupForm />
            </div>

            <aside className="min-w-0 border-t border-line py-10 lg:border-t-0 lg:border-l lg:py-16 lg:pl-20 xl:pl-28">
              <p className="t-eyebrow text-teal-700">What happens next</p>
              <ul className="mt-6 space-y-7">
                {reassurance.map((item) => (
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
                <p className="t-small font-medium text-muted">
                  Channels included from day one
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[...marketplaceChannels, ...messagingChannels].map((c) => (
                    <li
                      key={c.name}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pr-3.5 pl-2.5"
                    >
                      <BrandLogo name={c.brand} className="h-[15px] w-auto shrink-0" decorative />
                      <span className="text-[13px] font-medium text-ink-2">
                        {c.name}
                      </span>
                    </li>
                  ))}
                </ul>
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
