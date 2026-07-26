import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { ProductTour } from "@/components/home/product-tour";

/* Two folds. The problem, then the product. Nothing between them and nothing
   after them competing for the same click. */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <ProductTour />
      </main>
      <SiteFooter />
    </>
  );
}
