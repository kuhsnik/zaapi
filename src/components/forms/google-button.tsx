"use client";

import { IconGoogle } from "@/components/ui/icons";

/* Top of the form, above the divider. Every competitor offers this and the
   deck ties its absence to lost sign ups. */
export function GoogleButton({
  label = "Continue with Google",
  onClick,
}: {
  label?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cta="google-signup"
      className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-line bg-white text-[15px] font-medium text-ink transition-colors duration-150 hover:border-ink/20 hover:bg-sand active:scale-[0.99]"
    >
      <IconGoogle className="size-[18px]" />
      {label}
    </button>
  );
}

export function OrDivider({ label = "or" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <span className="text-[12px] text-faint">{label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
