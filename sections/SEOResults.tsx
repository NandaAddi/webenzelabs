"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChartLineUp, CursorClick, Eye, Target } from "@phosphor-icons/react";

const metrics = [
  {
    label: "Total Clicks",
    value: "14.2K",
    change: "+24%",
    icon: CursorClick,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Total Impressions",
    value: "840K",
    change: "+18%",
    icon: Eye,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    label: "Avg. CTR",
    value: "1.7%",
    change: "+0.4%",
    icon: Target,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Avg. Position",
    value: "12.4",
    change: "-2.1",
    icon: ChartLineUp,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

export function SEOResults() {
  return (
    <section id="seo-results" className="py-24 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-site/5 dark:bg-primary-site/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Hasil SEO Terbukti"
          subtitle="Kami memberikan hasil nyata yang dapat diukur melalui performa trafik organik Anda."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto mt-16 md:mt-24 items-center">
          {/* Left Column: Metrics Grid */}
          <div className="lg:col-span-5 mb-8 lg:mb-0">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[2rem] shadow-sm hover:shadow-xl dark:shadow-none transition-all group"
                >
                  <div className={`w-10 h-10 ${metric.bgColor} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <metric.icon size={20} weight="bold" className={metric.color} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">{metric.label}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tighter">{metric.value}</span>
                      <span className={`text-[9px] font-bold pb-1 px-1.5 rounded-full ${metric.change.startsWith('+') ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-10 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
            >
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                 Data di samping adalah cuplikan asli dari <span className="text-primary-site font-bold">Google Search Console</span> klien kami setelah 3 bulan optimasi intensif.
               </p>
            </motion.div>
          </div>

          {/* Right Column: GSC Placeholder Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl dark:shadow-primary-site/10 bg-slate-50 dark:bg-slate-900 p-3 md:p-5">
              {/* Browser-like Header */}
              <div className="h-8 shrink-0 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex items-center px-4 gap-1.5 mb-4 rounded-t-2xl backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                <div className="w-2 h-2 rounded-full bg-green-400/50" />
                <div className="ml-3 h-4 w-40 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center px-3">
                  <span className="text-[8px] text-slate-400 dark:text-slate-500 font-medium">search.google.com/webenze</span>
                </div>
              </div>

              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
                <Image
                  src="/images/seo-pixenze.png"
                  alt="Google Search Console Placeholder"
                  width={1600}
                  height={900}
                  className="w-full h-auto block"
                  priority
                />
                {/* Optional Overlay for higher quality feel */}
                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none" />
              </div>
            </div>

            {/* Floating Callout */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 px-6 py-4 rounded-xl bg-primary-site text-white shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <ChartLineUp size={18} weight="bold" />
                </div>
                <div>
                  <p className="text-[8px] uppercase font-extrabold tracking-widest opacity-80">Organic Impact</p>
                  <p className="text-sm font-bold tracking-tight">+350% Growth</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
