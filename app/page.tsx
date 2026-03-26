import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services"; 
import { WhyChoose } from "@/sections/WhyChoose";
import { PortfolioSpoiler } from "@/sections/PortfolioSpoiler";
import { Testimonials } from "@/sections/Testimonials";
import { Brands } from "@/sections/Brands";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <Services />
      <PortfolioSpoiler />
      <WhyChoose />
      <Testimonials />
      <Brands />
      <FAQ />
      <CTA />
    </div>
  );
}


