import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { supabase } from "@/lib/supabase";
import { PortfolioCard } from "@/components/PortfolioCard";

export async function PortfolioSpoiler() {
  const { data: projects, error } = await supabase
    .from("portfolios")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error || !projects || projects.length === 0) return null;

  return (
    <section id="portfolio-spoiler" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Selected Projects <br /> That Define <span className="text-primary-site">Quality.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="group flex items-center gap-3 text-slate-500 hover:text-primary-site transition-colors pb-2 border-b border-slate-100 hover:border-primary-site/50"
          >
            <span className="text-xs uppercase font-bold tracking-widest transition-all group-hover:tracking-[0.2em]">Explore More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <PortfolioCard
                title={project.title}
                category={project.category}
                description={project.description}
                thumbnailUrl={project.thumbnail_url}
                slug={project.slug}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Light Mesh Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-primary-site/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}


