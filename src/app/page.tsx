import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { ProductTour } from "@/components/home/product-tour";
import { Channels } from "@/components/home/channels";
import { Proof } from "@/components/home/proof";
import { AiAgent } from "@/components/home/ai-agent";
import { ClosingCta } from "@/components/home/closing-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <ProductTour />
        <Channels />
        <Proof />
        <AiAgent />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
