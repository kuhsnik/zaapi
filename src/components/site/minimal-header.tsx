import Link from "next/link";
import { Logo } from "@/components/site/logo";

/* Conversion pages get a stripped bar. No nav, no competing call to action —
   the deck's own recommendation for dedicated pages. */
export function MinimalHeader({
  aside,
}: {
  aside?: { label: string; linkLabel: string; href: string };
}) {
  return (
    <header className="border-b border-line">
      <div className="container-x flex h-14 items-center justify-between gap-4 sm:h-16">
        <Logo />
        {aside && (
          <p className="t-small text-muted">
            <span className="hidden sm:inline">{aside.label} </span>
            <Link
              href={aside.href}
              className="inline-block py-2 font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
            >
              {aside.linkLabel}
            </Link>
          </p>
        )}
      </div>
    </header>
  );
}
