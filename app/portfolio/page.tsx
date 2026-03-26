import { Metadata } from 'next';
import { Portfolio } from "@/sections/Portfolio";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio Webenze - Karya Digital Terbaik Kami",
  description: "Lihat berbagai proyek website dan aplikasi web yang telah kami selesaikan untuk klien dari berbagai industri.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      <Portfolio />
      <CTA />
    </div>
  );
}


