import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The floating dev badge sits over the sign-up CTA on a 390px viewport,
  // which is exactly the thing this build is meant to keep clear.
  devIndicators: false,
};

export default nextConfig;
