import Image from "next/image";
import { BrandsMarquee } from "@/components/ui/BrandsMarquee";

const brands = [
  { name: "Bina Project", logo: "/images/brands/6.png" },
  { name: "JPZIS", logo: "/images/brands/7.png" },
  { name: "Aksara Picture", logo: "/images/brands/8.png" },
];

export function Brands() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/20 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-sm font-bold text-primary-site uppercase tracking-[0.3em] mb-4">
          Our Partners
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Trusted by Innovative Companies
        </h3>
      </div>

      <BrandsMarquee brands={brands} />
    </section>
  );
}


