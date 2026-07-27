"use client";

import { useEffect } from "react";

const SRC = "https://app.deckoholic.ai/embed/v1.js";

/* Loads the supplied embed script exactly as given — same src, async — but on
   mount rather than through next/script.

   next/script was not reliable here at either setting: afterInteractive raced
   React while the embed injected its prewarm iframe into <body>, and
   lazyOnload waits on window "load", which never fired when the dev server was
   reached over the LAN — so on a real phone the script was never injected and
   the button did nothing. Appending it in an effect runs after hydration (no
   race) without depending on the load event (no dead button). */
export function TourEmbedScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return null;
}
