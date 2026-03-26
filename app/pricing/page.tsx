import { Metadata } from 'next';
import { Pricing } from "@/sections/Pricing";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Harga Paket Webenze - Investasi Digital Terjangkau",
  description: "Pilih paket pembuatan website yang sesuai dengan kebutuhan dan budget bisnis Anda. Transparan, terjangkau, dan berkualitas.",
};

export default function PricingPage() {
  return (
    <div className="pt-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}


