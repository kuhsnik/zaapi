"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useId, useState } from "react";

/* The label lives inside the box as the placeholder and is kept for screen
   readers, rather than stacked above it. Same information, roughly 40% less
   vertical space per field — which is what puts the submit button inside the
   first scroll on a phone.

   16px text on mobile is deliberate: anything smaller makes iOS Safari zoom the
   viewport on focus and throws the user out of the layout mid-form. */
const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 text-[16px] sm:text-[15px] text-ink " +
  "placeholder:text-faint transition-[border-color,box-shadow] duration-150 " +
  "hover:border-ink/20 focus:border-teal-600 focus:ring-4 focus:ring-teal/15 focus:outline-none";

type FieldProps = { label: string } & ComponentPropsWithoutRef<"input">;

export function Field({ label, className = "", ...props }: FieldProps) {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        placeholder={label}
        {...props}
        className={`${inputBase} h-[52px]`}
      />
    </div>
  );
}

export function PasswordField({
  label = "Password",
  className = "",
  ...props
}: FieldProps) {
  const id = useId();
  const [shown, setShown] = useState(false);
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={shown ? "text" : "password"}
          placeholder={label}
          {...props}
          className={`${inputBase} h-[52px] pr-12`}
        />
        <button
          type="button"
          onClick={() => setShown((v) => !v)}
          aria-label={shown ? "Hide password" : "Show password"}
          className="absolute top-1/2 right-1 flex size-11 -translate-y-1/2 items-center justify-center rounded-lg text-muted transition-colors hover:text-ink"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-[18px]"
            aria-hidden="true"
          >
            <path d="M2.4 12S6.2 5.4 12 5.4 21.6 12 21.6 12 17.8 18.6 12 18.6 2.4 12 2.4 12Z" />
            <circle cx="12" cy="12" r="3.1" />
            {!shown && <path d="m4 20 16-16" />}
          </svg>
        </button>
      </div>
    </div>
  );
}
