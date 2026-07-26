"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useId } from "react";

/* 16px on mobile is deliberate: anything smaller makes iOS Safari zoom the
   viewport on focus, which throws the user out of the layout mid-form. */
const inputBase =
  "w-full rounded-xl border border-line bg-white px-3.5 text-[16px] sm:text-[15px] text-ink " +
  "placeholder:text-faint transition-[border-color,box-shadow] duration-150 " +
  "hover:border-ink/20 focus:border-teal-600 focus:ring-4 focus:ring-teal/15 focus:outline-none";

type FieldProps = {
  label: string;
  hint?: string;
} & ComponentPropsWithoutRef<"input">;

export function Field({ label, hint, className = "", ...props }: FieldProps) {
  const id = useId();
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1 block text-[12.5px] leading-none font-medium text-ink-2 sm:mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className={`${inputBase} h-11 sm:h-[46px]`}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-[12px] text-muted">
          {hint}
        </p>
      )}
    </div>
  );
}

type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
} & ComponentPropsWithoutRef<"select">;

export function SelectField({
  label,
  options,
  className = "",
  ...props
}: SelectProps) {
  const id = useId();
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1 block text-[12.5px] leading-none font-medium text-ink-2 sm:mb-1.5"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          {...props}
          className={`${inputBase} h-11 appearance-none pr-10 sm:h-[46px]`}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5.5 8 4.5 4.5L14.5 8" />
        </svg>
      </div>
    </div>
  );
}
