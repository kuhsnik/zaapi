"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/forms/field";
import { GoogleButton, OrDivider } from "@/components/forms/google-button";
import { IconCheck } from "@/components/ui/icons";

type State = "idle" | "sending" | "done";

/* Four fields, no more. "How many agents do you have" is gone — it is a sales
   question and it belongs in onboarding, after the account exists. */
export function SignupForm() {
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    // No-op handler. A real build posts here before anything else happens.
    await new Promise((r) => setTimeout(r, 550));
    setState("done");
  }

  if (state === "done") {
    return (
      <div className="animate-rise">
        <span className="flex size-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
          <IconCheck className="size-5" />
        </span>
        <h1 className="t-h2 mt-6 text-ink text-balance">
          Your workspace is ready
        </h1>
        <p className="t-body mt-4 text-ink-3">
          We sent a confirmation link to{" "}
          <span className="font-medium break-all text-ink">
            {email || "your inbox"}
          </span>
          .
          Open it and you will land straight on channel setup.
        </p>
        <div className="mt-8 rounded-2xl border border-line bg-sand p-5">
          <p className="t-h4 text-ink">Next: connect a channel</p>
          <p className="t-small mt-2 text-muted">
            Shopee, Lazada, TikTok Shop or LINE takes about two minutes each. We
            will ask about team size then, not now.
          </p>
        </div>
        <p className="t-small mt-8 text-muted">
          Nothing arrived?{" "}
          <button
            type="button"
            onClick={() => setState("idle")}
            className="inline-block py-1.5 font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Try a different email
          </button>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Heading is set locally rather than with t-h2: this fold is measured,
          and the display clamp costs vertical space we need for the button. */}
      <h1 className="font-display text-[1.5rem] leading-[1.12] font-semibold tracking-[-0.028em] text-ink text-balance sm:text-[2rem] lg:text-[2.25rem]">
        Start your free trial
      </h1>

      <div className="mt-4 sm:mt-7">
        <GoogleButton />
      </div>

      <div className="my-2.5 sm:my-5">
        <OrDivider label="or sign up with email" />
      </div>

      <form onSubmit={onSubmit} noValidate={false}>
        <div className="grid gap-2 sm:gap-4">
          <Field
            label="Full name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ploy Suwan"
            required
          />
          <Field
            label="Work email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            label="Company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your store or brand"
            required
          />
          <Field
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            minLength={8}
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={state === "sending"}
          data-cta="signup-submit"
          className="mt-3.5 h-12 w-full sm:mt-6 sm:h-[52px]"
        >
          {state === "sending" ? "Creating your workspace…" : "Create account"}
        </Button>
      </form>

      {/* Reassurance sits under the action, not above it — above it, it pushes
          the button toward the fold on a small phone for no benefit. */}
      <p className="t-small mt-3.5 font-medium text-ink-3">
        Free for 14 days. No credit card.
      </p>

      <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
        By creating an account you agree to our{" "}
        <Link
          href="/signup"
          className="underline decoration-line underline-offset-2 hover:text-ink"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="/signup"
          className="underline decoration-line underline-offset-2 hover:text-ink"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
