import Link from "next/link";
import { Logo } from "@/components/site/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Interactive tour", href: "/#tour" },
      { label: "Channels", href: "/#channels" },
      { label: "AI agent", href: "/#ai-agent" },
      { label: "Book a demo", href: "/demo" },
    ],
  },
  {
    title: "Channels",
    links: [
      { label: "Shopee", href: "/#channels" },
      { label: "Lazada", href: "/#channels" },
      { label: "TikTok Shop", href: "/#channels" },
      { label: "LINE", href: "/#channels" },
      { label: "WhatsApp", href: "/#channels" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Start free trial", href: "/signup" },
      { label: "Contact sales", href: "/demo" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-sand">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8">
          <div className="max-w-xs">
            <Logo />
            <p className="t-small mt-4 text-muted">
              One inbox for every marketplace and messaging channel, with an AI
              agent handling the first layer.
            </p>
            <p className="t-small mt-4 text-faint">
              Bangkok · Thailand, Singapore, Malaysia, the Philippines and the
              UK.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="t-eyebrow text-faint">{col.title}</h3>
              {/* Block links with vertical padding so every footer row is a
                  44px tap target on a phone. */}
              <ul className="mt-3 space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="t-small -my-0.5 inline-block py-2 text-ink-3 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-small text-faint">
            © {new Date().getFullYear()} Zaapi. All rights reserved.
          </p>
          <p className="t-small text-faint">
            Meta, TikTok, Shopee and Lazada partner.
          </p>
        </div>
      </div>
    </footer>
  );
}
