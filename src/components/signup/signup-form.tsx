"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, PasswordField } from "@/components/forms/field";
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
          . Open it and you will land straight on channel setup.
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
      <h1 className="font-display text-[1.5rem] leading-[1.1] font-semibold tracking-[-0.03em] text-ink text-balance sm:text-[2rem] lg:text-[2.25rem]">
        Get started now
      </h1>
      {/* Hidden on the smallest screens: it repeats what the button below it
          already says, and it costs the submit button its place in the fold. */}
      <p className="t-small mt-2 hidden text-muted sm:block">
        Continue with Google or get started with your email.
      </p>

      <div className="mt-5 sm:mt-6">
        <GoogleButton />
      </div>

      <div className="my-3 sm:my-5">
        <OrDivider label="Or" />
      </div>

      <form onSubmit={onSubmit}>
        <div className="grid gap-2.5 sm:gap-3">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <Field
              label="First name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
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
          <PasswordField
            label="Password"
            name="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>

        <p className="mt-3 text-[11.5px] leading-[1.5] text-muted sm:mt-4 sm:text-[12.5px]">
          By clicking on Get Started, you agree to the{" "}
          <Link
            href="/signup"
            className="text-teal-700 underline decoration-teal-100 underline-offset-2 hover:decoration-teal-600"
          >
            terms of service
          </Link>{" "}
          and{" "}
          <Link
            href="/signup"
            className="text-teal-700 underline decoration-teal-100 underline-offset-2 hover:decoration-teal-600"
          >
            privacy policy
          </Link>
          .
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={state === "sending"}
          data-cta="signup-submit"
          className="mt-3.5 h-[52px] w-full sm:mt-4"
        >
          {state === "sending" ? "Creating your workspace…" : "Get Started"}
        </Button>
      </form>

      <p className="t-small mt-4 font-medium text-ink-3">
        Free for 14 days. No credit card.
      </p>
    </div>
  );
}
