import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-150 " +
  "active:scale-[0.985] disabled:pointer-events-none disabled:opacity-55 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-2 shadow-[0_1px_2px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,0.08)]",
  secondary:
    "bg-white text-ink border border-line hover:border-ink/25 hover:bg-sand",
  ghost: "text-ink-3 hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[52px] px-7 text-base",
};

export function buttonClass(
  variant: Variant = "primary",
  size: Size = "md",
  className = "",
) {
  return [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

type LinkButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentPropsWithoutRef<typeof Link>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: LinkButtonProps) {
  return <Link {...props} className={buttonClass(variant, size, className)} />;
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={buttonClass(variant, size, className)}
    />
  );
}
