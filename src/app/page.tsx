import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { Roadmap } from "@/components/sections/Roadmap";
import { Security } from "@/components/sections/Security";
import { DepthBackground } from "@/components/layout/DepthBackground";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="site-depth">
      <DepthBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ProductPreview />
        <Features />
        <Security />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
