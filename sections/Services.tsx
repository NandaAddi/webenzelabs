"use client";

import dynamic from "next/dynamic";
import { SectionHeading } from "../components/ui/SectionHeading";

const ServicesCarousel = dynamic(() => import("@/components/ServicesCarousel"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full flex items-center justify-center bg-slate-50/50 rounded-[2.5rem] animate-pulse">Loading Services...</div>
});

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-gradient-to-b from-white to-blue-50/30 overflow-hidden border-b border-slate-100">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-site/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <SectionHeading
          title="Layanan Webenze"
          subtitle="Berbagai solusi digital komprehensif untuk membantu bisnis Anda tumbuh dan bersaing di era modern."
        />

        <div className="mt-20 w-full">
          <ServicesCarousel />
        </div>
      </div>
    </section>
  );
}


