import type { MetadataRoute } from "next";

/* This is an assessment build carrying Zaapi's real branding. It must never be
   indexed — a live copy of a company's homepage ranking in search would be
   confusing at best and look like a spoof at worst.
   Serves /robots.txt disallowing every crawler on every path. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
