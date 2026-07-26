"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

const nav = [
  { label: "Product", href: "/#tour" },
  { label: "Channels", href: "/#channels" },
  { label: "AI agent", href: "/#ai-agent" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 sm:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="t-small font-medium text-ink-3 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/demo"
            className="t-small hidden font-medium text-ink-3 transition-colors hover:text-ink sm:inline-flex"
          >
            Book a demo
          </Link>
          <LinkButton href="/signup" data-cta="header-trial">
            Start free trial
          </LinkButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-1 flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-[1.75px] w-5 rounded bg-current transition-transform duration-200 ${
                  open ? "top-[6px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.75px] w-5 rounded bg-current transition-transform duration-200 ${
                  open ? "top-[6px] -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="container-x flex flex-col py-2">
            {[...nav, { label: "Book a demo", href: "/demo" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="t-h4 border-b border-line-soft py-4 text-ink last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
