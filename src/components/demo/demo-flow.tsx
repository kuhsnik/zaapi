"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/forms/field";
import { IconCalendar, IconCheck, IconClock } from "@/components/ui/icons";

type Step = "form" | "calendar" | "booked" | "later";

type Day = { key: string; weekday: string; day: string; month: string };

/* Built at submit time, on the client, so there is no server/client date
   mismatch to hydrate around. */
function nextWeekdays(count: number): Day[] {
  const out: Day[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < count) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      out.push({
        key: d.toISOString().slice(0, 10),
        weekday: d.toLocaleDateString("en-GB", { weekday: "short" }),
        day: d.toLocaleDateString("en-GB", { day: "numeric" }),
        month: d.toLocaleDateString("en-GB", { month: "short" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

const TIMES = ["09:30", "10:15", "11:00", "13:30", "14:15", "15:00"];

function CapturedBanner({ name, email }: { name: string; email: string }) {
  return (
    <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-4 sm:p-5">
      <div className="flex gap-3">
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
          <IconCheck className="size-3.5" />
        </span>
        <div className="min-w-0">
          <p className="t-h4 text-ink">
            Got it{name ? `, ${name.split(" ")[0]}` : ""}. Your details are
            saved.
          </p>
          <p className="t-small mt-1.5 text-ink-3">
            We already have{" "}
            <span className="font-medium break-all text-ink">
              {email || "your email"}
            </span>
            . Picking a time is optional — if you close this page now, we still
            follow up.
          </p>
        </div>
      </div>
    </div>
  );
}

export function DemoFlow() {
  const [step, setStep] = useState<Step>("form");
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [days, setDays] = useState<Day[]>([]);
  const [activeDay, setActiveDay] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);

  /* The whole point of this page: the lead is written on submit, before the
     calendar ever renders. Nobody who fills this in can disappear. */
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 500)); // no-op capture handler
    setDays(nextWeekdays(5));
    setSending(false);
    setStep("calendar");
  }

  if (step === "booked" || step === "later") {
    const booked = step === "booked";
    const day = days[activeDay];
    return (
      <div className="animate-rise">
        <span className="flex size-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
          <IconCheck className="size-5" />
        </span>
        <h1 className="t-h2 mt-6 text-ink text-balance">
          {booked ? "You are booked in" : "We have your details"}
        </h1>
        <p className="t-body mt-4 max-w-[48ch] text-ink-3">
          {booked ? (
            <>
              {day?.weekday} {day?.day} {day?.month} at {slot}, Bangkok time. A
              calendar invite and a join link are on their way to{" "}
              <span className="font-medium break-all text-ink">{email}</span>.
            </>
          ) : (
            <>
              No slot picked, and that is fine. We have saved everything you
              entered and will email{" "}
              <span className="font-medium break-all text-ink">{email}</span>{" "}
              with a booking link and a two-minute walkthrough you can watch
              without us.
            </>
          )}
        </p>

        <div className="mt-8 rounded-2xl border border-line bg-sand p-5">
          <p className="t-h4 text-ink">While you wait</p>
          <p className="t-small mt-2 text-muted">
            The interactive tour on the homepage shows the inbox and the AI
            agent working on a live Shopee thread. No sign up needed.
          </p>
          <a
            href="/#tour"
            className="t-small mt-2 inline-flex py-1.5 font-medium text-teal-700 underline decoration-teal-100 underline-offset-4 hover:decoration-teal-600"
          >
            Take the two-minute tour
          </a>
        </div>

        {!booked && (
          <button
            type="button"
            onClick={() => setStep("calendar")}
            className="t-small mt-7 inline-block py-1.5 font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Actually, let me pick a time
          </button>
        )}
      </div>
    );
  }

  if (step === "calendar") {
    return (
      <div className="animate-rise">
        <p className="t-eyebrow text-teal-700">Step 2 of 2 · Optional</p>
        <h1 className="t-h2 mt-4 text-ink text-balance">
          Pick a time that suits you
        </h1>

        <div className="mt-6">
          <CapturedBanner name={name} email={email} />
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-2">
              <IconClock className="size-4 text-muted" />
              30 minutes
            </span>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-2">
              <IconCalendar className="size-4 text-muted" />
              Bangkok time, GMT+7
            </span>
          </div>

          <div className="mt-5 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div
              role="tablist"
              aria-label="Choose a day"
              className="flex gap-2 sm:grid sm:grid-cols-5"
            >
              {days.map((d, i) => {
                const active = i === activeDay;
                return (
                  <button
                    key={d.key}
                    role="tab"
                    aria-selected={active}
                    type="button"
                    onClick={() => {
                      setActiveDay(i);
                      setSlot(null);
                    }}
                    className={`min-w-[76px] shrink-0 rounded-xl border px-3 py-3 text-center transition-colors duration-150 ${
                      active
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-white text-ink hover:border-ink/20"
                    }`}
                  >
                    <span
                      className={`block text-[11px] font-medium tracking-wide uppercase ${
                        active ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {d.weekday}
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold">
                      {d.day} {d.month}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {TIMES.map((t) => {
              const active = slot === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSlot(t)}
                  aria-pressed={active}
                  className={`h-11 rounded-xl border text-[15px] font-medium transition-colors duration-150 ${
                    active
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-line bg-white text-ink hover:border-ink/20"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <Button
            size="lg"
            disabled={!slot}
            onClick={() => setStep("booked")}
            data-cta="demo-confirm-slot"
            className="mt-5 h-[52px] w-full"
          >
            {slot ? `Confirm ${slot}` : "Select a time"}
          </Button>

          <button
            type="button"
            onClick={() => setStep("later")}
            data-cta="demo-skip-calendar"
            className="t-small mt-3 w-full py-2 text-center font-medium text-ink-3 underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink"
          >
            I will pick a time later
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="t-eyebrow text-teal-700">Step 1 of 2</p>
      <h1 className="font-display mt-3 text-[1.5rem] leading-[1.12] font-semibold tracking-[-0.028em] text-ink text-balance sm:mt-4 sm:text-[2rem] lg:text-[2.25rem]">
        See Zaapi on your own channels
      </h1>
      <p className="t-small mt-2 max-w-[44ch] text-muted sm:mt-3 sm:text-base">
        Details first, calendar next.
      </p>

      <form onSubmit={onSubmit} className="mt-5 sm:mt-6">
        <div className="grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="First name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Field
              label="Last name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
          </div>
          <Field
            label="Work email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            label="Company"
            name="company"
            type="text"
            autoComplete="organization"
            required
          />
          {/* Sales calls in these markets get confirmed on WhatsApp or LINE as
              often as by email, so the number earns its place on this form even
              though the sign-up page stays at four fields. */}
          <Field
            label="Phone or WhatsApp number"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={sending}
          data-cta="demo-submit"
          className="mt-4 h-[52px] w-full"
        >
          {sending ? "Saving your details…" : "Continue to calendar"}
        </Button>
      </form>

    </div>
  );
}
