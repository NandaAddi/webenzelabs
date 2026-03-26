"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-site/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-site/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[4rem] overflow-hidden bg-white border border-slate-100 p-12 md:p-24 shadow-[0_60px_100px_-24px_rgba(0,0,0,0.12),0_10px_30px_-5px_rgba(39,105,185,0.08)] group"
        >
          {/* Glassmorphic Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-slate-50/40 backdrop-blur-xl z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                  Wujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-site to-[#4a90e2]">Website Impian</span> <br /> Anda Sekarang.
                </h2>
                <p className="text-xl text-slate-600 mb-12 max-w-md leading-relaxed">
                  Webenze membantu transformasi digital bisnis Anda menjadi lebih profesional, premium, dan high-performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="primary" className="bg-primary-site hover:bg-primary-hover text-white px-10 h-16 rounded-2xl text-lg font-bold shadow-[0_20px_40px_rgba(39,105,185,0.3)] hover:shadow-none transition-all duration-300">
                    Konsultasi Gratis
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[300px] md:h-[450px] flex items-center justify-center">
              {/* Rocket Asset */}
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
                className="relative w-full h-full drop-shadow-[0_40px_80px_rgba(39,105,185,0.25)]"
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
              <div className="absolute inset-0 bg-primary-site/5 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


