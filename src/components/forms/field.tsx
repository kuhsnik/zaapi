"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useEffect, useId, useState } from "react";

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

/* ---------------------------------------------------------------------------
   Phone field with a dial code that fills itself in.

   The country is detected from the browser's own timezone on mount — not on
   the server, so there is no hydration mismatch and no IP lookup — and falls
   back to Thailand, the largest market. The visitor can still change it.
--------------------------------------------------------------------------- */

type Dial = { iso: string; code: string; flag: string; name: string };

const DIAL_CODES: Dial[] = [
  { iso: "TH", code: "+66", flag: "🇹🇭", name: "Thailand" },
  { iso: "SG", code: "+65", flag: "🇸🇬", name: "Singapore" },
  { iso: "MY", code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { iso: "PH", code: "+63", flag: "🇵🇭", name: "Philippines" },
  { iso: "ID", code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { iso: "VN", code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { iso: "GB", code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { iso: "HK", code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { iso: "TW", code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { iso: "AE", code: "+971", flag: "🇦🇪", name: "UAE" },
  { iso: "IN", code: "+91", flag: "🇮🇳", name: "India" },
  { iso: "AU", code: "+61", flag: "🇦🇺", name: "Australia" },
  { iso: "US", code: "+1", flag: "🇺🇸", name: "United States" },
];

const TZ_TO_ISO: Record<string, string> = {
  "Asia/Bangkok": "TH",
  "Asia/Singapore": "SG",
  "Asia/Kuala_Lumpur": "MY",
  "Asia/Manila": "PH",
  "Asia/Jakarta": "ID",
  "Asia/Pontianak": "ID",
  "Asia/Ho_Chi_Minh": "VN",
  "Asia/Saigon": "VN",
  "Europe/London": "GB",
  "Asia/Hong_Kong": "HK",
  "Asia/Taipei": "TW",
  "Asia/Dubai": "AE",
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
};

function detectIso(): string | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && TZ_TO_ISO[tz]) return TZ_TO_ISO[tz];
    if (tz?.startsWith("Australia/")) return "AU";
    if (tz?.startsWith("America/")) return "US";
    // fall back to the region in the browser language, e.g. en-MY -> MY
    const region = new Intl.Locale(navigator.language).region;
    if (region && DIAL_CODES.some((d) => d.iso === region)) return region;
  } catch {
    /* Intl.Locale is unavailable on some older browsers — default is fine */
  }
  return null;
}

export function PhoneField({
  label = "Phone or WhatsApp number",
  name = "phone",
  className = "",
  required,
}: {
  label?: string;
  name?: string;
  className?: string;
  required?: boolean;
}) {
  const id = useId();
  const [iso, setIso] = useState("TH");

  useEffect(() => {
    const found = detectIso();
    if (found) setIso(found);
  }, []);

  const dial = DIAL_CODES.find((d) => d.iso === iso) ?? DIAL_CODES[0];

  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="flex h-[52px] w-full rounded-xl border border-line bg-white transition-[border-color,box-shadow] duration-150 focus-within:border-teal-600 focus-within:ring-4 focus-within:ring-teal/15 hover:border-ink/20">
        <div className="relative flex shrink-0 items-center">
          <select
            aria-label="Country dialling code"
            value={iso}
            onChange={(e) => setIso(e.target.value)}
            className="h-full appearance-none rounded-l-xl bg-transparent py-0 pr-7 pl-3.5 text-[16px] text-ink focus:outline-none sm:text-[15px]"
          >
            {DIAL_CODES.map((d) => (
              <option key={d.iso} value={d.iso}>
                {d.flag} {d.code}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="pointer-events-none absolute right-2 size-4 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5.5 8 4.5 4.5L14.5 8" />
          </svg>
          <span className="h-6 w-px bg-line" />
        </div>
        {/* The dial code is submitted alongside the number. */}
        <input type="hidden" name={`${name}CountryCode`} value={dial.code} />
        <input
          id={id}
          name={name}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="81 234 5678"
          required={required}
          className="min-w-0 flex-1 rounded-r-xl bg-transparent px-3.5 text-[16px] text-ink placeholder:text-faint focus:outline-none sm:text-[15px]"
        />
      </div>
    </div>
  );
}
