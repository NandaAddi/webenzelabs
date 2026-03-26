"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonialsData = [
  {
    quote: "Pengerjaan website sangat cepat dan hasilnya melebihi ekspektasi. Tim Webenze sangat profesional dan komunikatif.",
    name: "Budi Santoso",
    title: "PT Maju Bersama",
  },
  {
    quote: "Desain landing page yang dibuat Webenze berhasil meningkatkan konversi penjualan produk kami hingga 3x lipat.",
    name: "Sinta Maharani",
    title: "Founder Kopi Senja",
  },
  {
    quote: "Sistem manajemen custom yang dibuild sangat membantu operasional perusahaan. Bug free dan mudah digunakan.",
    name: "Ahmad Rizky",
    title: "Tech Solutions",
  },
  {
    quote: "Support setelah website launch sangat memuaskan. Kendala selalu direspon dan diselesaikan dengan cepat.",
    name: "Dewi Lestari",
    title: "Fashion Week",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Testimoni Client Webenze" 
          subtitle="Apa kata mereka yang telah mempercayakan proyek digitalnya kepada kami?"
        />
        
        <div className="mt-16">
            <InfiniteMovingCards
              items={testimonialsData}
              direction="right"
              speed="fast"
            />
        </div>
      </div>
    </section>
  );
}


