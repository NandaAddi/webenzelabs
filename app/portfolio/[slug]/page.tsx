import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { ProjectClientBody } from "@/components/ProjectClientBody";
import { CTA } from "@/sections/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: portfolio } = await supabase
    .from("portfolios")
    .select("title, description")
    .eq("slug", slug)
    .single();

  if (!portfolio) return { title: "Project Not Found" };

  return {
    title: `${portfolio.title} - Portfolio Webenze`,
    description: portfolio.description,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const { data: portfolio } = await supabase
    .from("portfolios")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500">
      {/* Editorial Header Section */}
      <div className="relative h-[80vh] w-full border-b border-slate-100 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900">
        <Image
          src={portfolio.header_image_url || portfolio.thumbnail_url}
          alt={`${portfolio.title} Header`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/20" />
        
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-6 pb-24 z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-3 text-white/60 hover:text-white mb-12 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary-site group-hover:text-white transition-all shadow-sm">
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-extrabold">Back to Showcase</span>
          </Link>
          
          <div className="max-w-6xl">
            <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-primary-site" />
                <p className="text-primary-site font-extrabold uppercase tracking-[0.4em] text-xs">{portfolio.category}</p>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.1] mb-8 text-balance">
              {portfolio.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/80 font-medium tracking-tight max-w-3xl leading-relaxed text-balance">
                Transforming digital boundaries through innovative design and purpose-driven technology.
            </p>
          </div>
        </div>

        {/* Decorative Scroll Hint */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[.4em] text-white/40 transform rotate-180 [writing-mode:vertical-lr]">Scroll Exploration</span>
            <div className="h-24 w-px bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-site animate-scroll-hint" />
            </div>
        </div>
      </div>

      {/* Structured Content Layout */}
      <div className="container mx-auto px-6 py-20 lg:py-40 relative z-10">
         <ProjectClientBody portfolio={portfolio} />
      </div>

      <div className="mt-32 border-t border-slate-100 dark:border-slate-800 transition-colors">
         <CTA />
      </div>
    </div>
  );
}
