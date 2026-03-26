"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  slug: string;
  priority?: boolean;
}

export const PortfolioCard = ({ 
  title, 
  category, 
  thumbnailUrl, 
  slug,
  priority = false
}: PortfolioCardProps) => {
  return (
    <Link href={`/portfolio/${slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 block shadow-sm hover:shadow-2xl dark:shadow-primary-site/10 transition-all duration-500">
      {/* Background Image */}
      <Image 
        src={thumbnailUrl || "/placeholder.jpg"} 
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      
      {/* Minimalist Overlay Gradient (Light theme adapted - still dark at bottom for legibility) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#3B82F6] bg-black/20 dark:bg-primary-site/20 backdrop-blur-md px-2 py-1 rounded inline-block">
            {category}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h3>
          
          <div className="pt-4 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Project Details</span>
              <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Decorative Border Glow on Hover */}
      <div className="absolute inset-0 border border-primary-site/0 group-hover:border-primary-site/20 transition-all pointer-events-none rounded-3xl" />
    </Link>
  );
};


