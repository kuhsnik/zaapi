import Link from "next/link";
import { Logo } from "@/components/site/logo";

const links = [
  { label: "Product tour", href: "/#tour" },
  { label: "Book a demo", href: "/demo" },
  { label: "Start free trial", href: "/signup" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-x flex flex-col gap-6 py-9 md:flex-row md:items-center md:justify-between md:py-8">
        <Logo />

        <nav className="flex flex-wrap gap-x-7 gap-y-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="t-small -my-0.5 inline-block py-2 text-ink-3 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="t-small text-faint">
          © {new Date().getFullYear()} Zaapi. Bangkok.
        </p>
      </div>
    </footer>
  );
}
