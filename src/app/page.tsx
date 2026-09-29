import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Pain from "@/components/landing/Pain";
import How from "@/components/landing/How";
import Native from "@/components/landing/Native";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import BuildLog from "@/components/landing/BuildLog";
import Faq from "@/components/landing/Faq";
import Cta from "@/components/landing/Cta";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pain />
        <How />
        <Native />
        <Features />
        <Pricing />
        <BuildLog />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
