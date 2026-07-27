import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The floating dev badge sits over the sign-up CTA on a 390px viewport,
  // which is exactly the thing this build is meant to keep clear.
  devIndicators: false,

  // Dev only. Without this, Next blocks /_next/* when the dev server is opened
  // from another device on the LAN, so the page never hydrates and nothing on
  // it is interactive — which is why the tour button did nothing on a phone.
  // Has no effect on a production build.
  allowedDevOrigins: ["192.168.18.8"],
};

export default nextConfig;
