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
  metadataBase: new URL("https://zaapi.com"),
  title: {
    default: "Zaapi — A late reply is a lost order",
    template: "%s · Zaapi",
  },
  description:
    "Every marketplace and messaging channel in one inbox with order history attached, and an AI agent that answers up to 92% of enquiries in seconds.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "Zaapi — A late reply is a lost order",
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
