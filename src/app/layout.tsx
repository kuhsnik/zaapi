import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zaapi — Every lead, every customer, answered on time",
    template: "%s · Zaapi",
  },
  description:
    "Fast replies win more deals and keep customers happy. Run every channel from one inbox, with AI agents beside your team.",
  icons: { icon: "/icon.png", apple: "/icon.png" },

  /* Assessment build on Zaapi's branding — never index it. Belt and braces
     with /robots.txt (src/app/robots.ts): the meta tag covers pages a crawler
     reaches directly, robots.txt covers discovery. */
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: "Zaapi — Every lead, every customer, answered on time",
    description:
      "One inbox for every marketplace and messaging channel, with an AI agent handling the first layer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
