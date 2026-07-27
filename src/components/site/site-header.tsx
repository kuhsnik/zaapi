"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

/* Structural nav, shown to make the page read as a real site. These are not
   wired to anything in this build — rendered as non-interactive items rather
   than dead links so nothing 404s. */
const nav: { label: string; hasMenu: boolean }[] = [
  { label: "Product", hasMenu: true },
  { label: "Use cases", hasMenu: true },
  { label: "Resources", hasMenu: true },
  { label: "Pricing", hasMenu: false },
];

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5 opacity-60"
      aria-hidden="true"
    >
      <path d="m5.8 8 4.2 4.2L14.2 8" />
    </svg>
  );
}

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
      <div className="container-x flex h-14 items-center justify-between gap-6 sm:h-16">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <span
              key={item.label}
              className="t-small flex cursor-default items-center gap-1 font-medium text-ink-3 transition-colors hover:text-ink"
            >
              {item.label}
              {item.hasMenu && <Chevron />}
            </span>
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
            className="-mr-1 flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
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
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <span
                key={item.label}
                className="t-h4 flex cursor-default items-center justify-between border-b border-line-soft py-4 text-ink"
              >
                {item.label}
                {item.hasMenu && <Chevron />}
              </span>
            ))}
            <Link
              href="/demo"
              onClick={() => setOpen(false)}
              className="t-h4 py-4 text-ink"
            >
              Book a demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
