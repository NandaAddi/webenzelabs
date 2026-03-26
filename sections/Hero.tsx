"use client";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { Spotlight } from "../components/ui/spotlight";
import { FlipWords } from "../components/ui/flip-words";
import { LiteYouTube } from "../components/ui/LiteYouTube";

export function Hero() {
  const words = ["Landing Page", "Company Profile", "E-Commerce", "Portfolio"];

  return (
    <div className="w-full bg-white relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-30"
        size={400}
      />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tighter">
              Bangun Website <br />
              <FlipWords words={words} className="text-primary-site" /> <br />
              Bersama Webenze
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Webenze membantu bisnis, UMKM, startup, dan personal brand membangun website modern, cepat, dan scalable untuk meningkatkan kredibilitas dan penjualan secara digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary" className="bg-primary-site hover:bg-primary-hover text-white">Konsultasi Gratis</Button>
              <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">Lihat Portfolio</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 flex flex-col">
              {/* Browser Top Bar */}
              <div className="h-10 shrink-0 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>

              {/* Video Content - Fixed Aspect Ratio */}
              <div className="w-full aspect-video bg-slate-100 relative">
                <LiteYouTube
                  videoId="VHDJdr_yM4g"
                  title="Webenze Introduction Video"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Floating Badge (Updated for Light Theme) */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-site/10 flex items-center justify-center">
                  <span className="text-primary-site font-bold">100+</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">Projects</p>
                  <p className="text-[10px] text-slate-500 font-medium">Delivered Successfully</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


