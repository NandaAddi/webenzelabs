"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl px-6">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-site/5 dark:bg-primary-site/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-site/10 dark:bg-primary-site/15 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 md:p-24 shadow-[0_60px_100px_-24px_rgba(0,0,0,0.12),0_10px_30px_-5px_rgba(39,105,185,0.08)] dark:shadow-none group"
        >
          {/* Glassmorphic Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-slate-50/40 dark:from-slate-900/40 dark:to-slate-950/40 backdrop-blur-xl z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center text-center lg:text-left">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.15] md:leading-[1.1] tracking-tighter">
                  Wujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-site to-[#4a90e2]">Website Impian</span> <br className="hidden md:block" /> Anda Sekarang.
                </h2>
                <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium transition-colors">
                  Webenze membantu transformasi digital bisnis Anda menjadi lebih profesional, premium, dan high-performance.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Button size="lg" variant="primary" className="bg-primary-site hover:bg-primary-hover text-white px-8 md:px-10 h-14 md:h-16 rounded-2xl text-base md:text-lg font-bold shadow-[0_20px_40px_rgba(39,105,185,0.3)] hover:shadow-none transition-all duration-300 w-full md:w-auto">
                    Konsultasi Gratis
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[250px] md:h-[450px] flex items-center justify-center mt-4 md:mt-0">
              {/* Image Asset */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full drop-shadow-[0_40px_80px_rgba(39,105,185,0.25)] dark:drop-shadow-[0_10px_30px_rgba(39,105,185,0.2)]"
              >
                <Image
                  src="/images/mobile-view.png"
                  alt="Webenze - Rocket Launch"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-primary-site/5 dark:bg-primary-site/10 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


