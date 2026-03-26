import React from "react";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/sections/CTA";
import { PortfolioGallery } from "@/components/PortfolioGallery";

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

  const formatUrl = (url: string) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header Section */}
      <div className="relative h-[65vh] w-full border-b border-slate-100 overflow-hidden">
        <Image
          src={portfolio.header_image_url || portfolio.thumbnail_url}
          alt={`${portfolio.title} Header`}
          fill
          sizes="100vw"
          className="object-cover opacity-10 filter grayscale-0 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-6 pb-20 z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-3 text-slate-400 hover:text-primary-site mb-8 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary-site/5">
               <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold">Back to Portfolio</span>
          </Link>
          
          <div className="max-w-5xl">
            <p className="text-primary-site font-extrabold uppercase tracking-[0.3em] text-xs mb-6 px-1">{portfolio.category}</p>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900 leading-[0.95] mb-4">
              {portfolio.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Structured Content Layout */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-32">
            {/* Enhanced Gallery Component */}
            <PortfolioGallery 
              images={portfolio.gallery_images} 
              title={`${portfolio.title} Project Showcase`} 
            />

            {/* Project Summary */}
            <div className="space-y-16 pt-20 border-t border-slate-100">
                <div className="space-y-8">
                   <h2 className="text-4xl font-extrabold text-slate-900 tracking-tighter">The Challenge & Solution</h2>
                   <p className="text-2xl text-slate-500 leading-relaxed font-medium max-w-4xl">
                       {portfolio.description}
                   </p>
                </div>
                
                <div className="h-1 w-24 bg-primary-site rounded-full" />

                <div 
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: portfolio.content }} 
                />
            </div>
          </div>

          {/* Editorial Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-16">
                <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm space-y-12">
                    <div className="space-y-3">
                        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-extrabold">Industry Segment</p>
                        <p className="text-xl text-slate-900 font-extrabold tracking-tight">{portfolio.category}</p>
                    </div>

                    <div className="space-y-3">
                        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-extrabold">Launch Date</p>
                        <p className="text-xl text-slate-900 font-extrabold tracking-tight">{new Date(portfolio.created_at).toLocaleDateString("id-ID", { year: 'numeric', month: 'long' })}</p>
                    </div>
                    
                    {portfolio.project_url && (
                        <div className="space-y-6 pt-4">
                            <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-extrabold">Live Experience</p>
                            <a 
                                href={formatUrl(portfolio.project_url)} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 text-slate-900 hover:text-primary-site transition-all duration-300 font-extrabold text-xl tracking-tighter border-b-2 border-slate-100 hover:border-primary-site pb-2"
                            >
                                Visit Website <ArrowSquareOut className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    )}

                    <div className="pt-12 space-y-8 border-t border-slate-200/50">
                        <p className="text-slate-500 text-base leading-relaxed font-medium">Tertarik untuk mengembangkan platform serupa untuk bisnis Anda?</p>
                        <Link href="/contact" className="block">
                            <Button className="w-full bg-primary-site hover:bg-primary-hover text-white border-none py-8 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-xl shadow-blue-500/20 active:scale-95 transition-all">
                                Start Your Project
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="px-6 flex items-center justify-between text-slate-300">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.4em]">Webenze Portfolio Collection © 2026</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
         <CTA />
      </div>
    </div>
  );
}
