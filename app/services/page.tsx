import { Metadata } from 'next';
import { Services } from "@/sections/Services";
import { WorkProcess } from "@/sections/WorkProcess";
import { TechStack } from "@/sections/TechStack";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Layanan Webenze - Solusi Digital Profesional",
  description: "Webenze menawarkan jasa pembuatan website, landing page, UI/UX design, dan optimasi SEO untuk membantu bisnis Anda tumbuh secara digital.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <WorkProcess />
      <TechStack />
      <CTA />
    </div>
  );
}


