import Image from "next/image";
import { BrandsMarquee } from "@/components/ui/BrandsMarquee";

const brands = [
  { name: "Bina Project", logo: "/images/brands/6.png" },
  { name: "JPZIS", logo: "/images/brands/7.png" },
  { name: "Aksara Picture", logo: "/images/brands/8.png" },
];

export function Brands() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
        <h2 className="text-sm font-bold text-primary-site uppercase tracking-[0.3em] mb-4">
          Our Partners
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Trusted by Innovative Companies
        </h3>
      </div>

      <BrandsMarquee brands={brands} />
    </section>
  );
}


