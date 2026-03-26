"use client";

import React from "react";
import { Info, CheckCircle, ArrowSquareOut, RocketLaunch, Tag, CalendarBlank } from "@phosphor-icons/react";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { ProjectResults } from "@/components/ProjectResults";
import { ProjectTechStack } from "@/components/ProjectTechStack";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectClientBodyProps {
    portfolio: any;
}

export const ProjectClientBody = ({ portfolio }: ProjectClientBodyProps) => {
    const formatUrl = (url: string) => {
        if (!url) return "";
        return url.startsWith("http") ? url : `https://${url}`;
    };

    return (
        <div className="max-w-5xl mx-auto space-y-16 transition-colors duration-500">
          
          {/* 1. Enhanced Header Section - Action & Quick Info */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-slate-100 dark:border-slate-800 pb-12">
             <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 flex-1">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                        <Tag className="w-4 h-4" />
                        <span className="text-[9px] font-extrabold uppercase tracking-widest">Industry</span>
                    </div>
                    <p className="text-base text-slate-900 dark:text-white font-bold tracking-tight">{portfolio.category}</p>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                        <CalendarBlank className="w-4 h-4" />
                        <span className="text-[9px] font-extrabold uppercase tracking-widest">Released</span>
                    </div>
                    <p className="text-base text-slate-900 dark:text-white font-bold tracking-tight">
                        {new Date(portfolio.created_at).toLocaleDateString("id-ID", { year: 'numeric', month: 'long' })}
                    </p>
                </div>
                <div className="space-y-2 col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                        <RocketLaunch className="w-4 h-4" />
                        <span className="text-[9px] font-extrabold uppercase tracking-widest">Core Mission</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {(portfolio.services_rendered && portfolio.services_rendered.length > 0 ? portfolio.services_rendered : ['Development']).map((svc: string) => (
                            <span key={svc} className="text-[10px] font-bold text-primary-site dark:text-blue-400 bg-primary-site/5 dark:bg-primary-site/10 px-2.5 py-1 rounded-md border border-primary-site/10 dark:border-primary-site/20 tracking-tight transition-colors">{svc}</span>
                        ))}
                    </div>
                </div>
             </div>

             {/* Prominent Live Preview Button */}
             {portfolio.project_url && (
                <div className="md:w-64 pt-4 md:pt-0">
                    <a 
                        href={formatUrl(portfolio.project_url)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between w-full h-16 px-6 bg-slate-900 dark:bg-primary-site rounded-xl text-white hover:bg-primary-site dark:hover:bg-primary-hover transition-all duration-500 shadow-2xl relative overflow-hidden"
                    >
                        <span className="text-sm font-bold tracking-tight relative z-10">Live Preview</span>
                        <ArrowSquareOut className="w-5 h-5 relative z-10 transition-transform group-hover:rotate-45" weight="bold" />
                        <div className="absolute inset-0 bg-primary-site translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </a>
                </div>
             )}
          </section>

          {/* 2. Visual Gallery - Now at the Top */}
          <section className="animate-in fade-in duration-500">
             <PortfolioGallery 
              images={portfolio.gallery_images} 
              title={`${portfolio.title} Project Showcase`} 
            />
          </section>
          
          {/* 3. Narrative Section */}
          <section className="pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-12 space-y-10">
                    <div className="space-y-6 text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-3 text-primary-site dark:text-blue-400">
                            <Info className="w-5 h-5" weight="bold" />
                            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.4em]">Strategic Overview</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[1.1] text-balance">
                            Evolusi digital yang berfokus pada hasil nyata dan pengalaman pengguna.
                        </h3>
                        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic border-l-4 border-slate-100 dark:border-slate-800 pl-6 text-left transition-colors">
                            "{portfolio.description}"
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                        {(portfolio.key_insights && portfolio.key_insights.length > 0 ? portfolio.key_insights : ['Strategic Planning']).map((tag: string) => (
                            <div key={tag} className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-[9px] font-extrabold uppercase tracking-widest shadow-lg dark:shadow-none transition-colors">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Impact Grid */}
          <section className="space-y-10 bg-slate-50/50 dark:bg-slate-900/50 py-16 rounded-[2.5rem] px-8 border border-slate-50 dark:border-slate-800 transition-colors duration-500">
             <div className="text-center space-y-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tighter transition-colors">Quantifiable Impact</h2>
                <div className="w-10 h-1 bg-primary-site dark:bg-blue-400 mx-auto rounded-full" />
             </div>
             <ProjectResults stats={portfolio.stats} />
          </section>

          {/* 5. Rich Content & Tech Stack */}
          <section className="space-y-20 py-4">
             <div className="max-w-4xl mx-auto space-y-10">
                <div className="flex items-center gap-4 text-slate-400 dark:text-slate-600 transition-colors">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.4em]">The Deep Dive</span>
                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                </div>
                <div 
                    className="rich-text-content prose prose-slate dark:prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-extrabold prose-headings:tracking-tighter prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-400 font-medium transition-colors"
                    dangerouslySetInnerHTML={{ __html: portfolio.content }} 
                />
             </div>

             <ProjectTechStack techStack={portfolio.tech_stack} />
          </section>

          {/* 6. Call to Action - Final */}
          <section className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center text-center gap-8 transition-colors">
             <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white">Tertarik dengan hasil serupa?</h2>
                <p className="text-slate-500 dark:text-slate-400 text-base font-medium max-w-2xl text-balance">Mari diskusikan bagaimana kami dapat membantu bisnis Anda berkembang melalui teknologi dan desain yang tepat.</p>
             </div>
             
             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/contact">
                    <Button className="w-full sm:w-auto px-12 h-16 bg-primary-site hover:bg-primary-hover text-white rounded-xl font-bold shadow-xl dark:shadow-none shadow-primary-site/20 text-base group transition-all">
                        Mulai Project Anda
                        <RocketLaunch className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </Link>
             </div>
          </section>
        </div>
    );
};
