"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { EnvelopeSimple, WhatsappLogo, MapPin, LinkedinLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ContactMap from "@/components/ContactMap";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 } as const
  },
};

export function ContactClient() {
  return (
    <div className="relative pt-48 pb-32 bg-white dark:bg-slate-950 min-h-screen overflow-hidden transition-colors duration-500">
      {/* Background Layer */}
      <BackgroundBeams />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-30 dark:opacity-20"
        size={400}
      />

      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-primary-site/5 dark:bg-primary-site/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            title="Hubungi Kami"
            subtitle="Tim kami siap membantu Anda membangun solusi digital yang tepat untuk bisnis Anda. Konsultasikan ide Anda secara gratis."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto mt-20 items-stretch"
        >
          {/* Left Column: Contact Details */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-10 md:p-14 rounded-[3rem] shadow-sm flex flex-col justify-between relative group hover:shadow-xl dark:hover:shadow-none transition-all duration-500 overflow-hidden">
            {/* Subtle Gradient Hover Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-site/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />

            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary-site mb-6 block">Ready to start?</span>
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-aggregation-tight tracking-tighter leading-none mb-10 transition-colors">Mari Bangun <br /> Sesuatu Hebat Besok</h3>

              <div className="space-y-8">
                <div className="group/item flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm group-hover/item:shadow-md group-hover/item:border-primary-site/20 transition-all duration-300">
                    <EnvelopeSimple className="text-primary-site" size={32} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1 text-lg transition-colors">Email Resmi</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-base transition-colors">halo@webenze.com</p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm group-hover/item:shadow-md group-hover/item:border-primary-site/20 transition-all duration-300">
                    <WhatsappLogo className="text-primary-site" size={32} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1 text-lg transition-colors">WhatsApp Business</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-base transition-colors">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm group-hover/item:shadow-md group-hover/item:border-primary-site/20 transition-all duration-300">
                    <MapPin className="text-primary-site" size={32} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1 text-lg transition-colors">Lokasi Kantor</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-base transition-colors">Malang, Jawa Timur, ID</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-200/60 dark:border-slate-800 relative z-10">
              <p className="text-slate-900 dark:text-white font-bold text-sm mb-6 transition-colors">Sosial Media</p>
              <div className="flex gap-4">
                {[LinkedinLogo, InstagramLogo, TwitterLogo].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary-site hover:border-primary-site/30 hover:shadow-md transition-all duration-300 active:scale-90">
                    <Icon size={20} weight="bold" />
                  </a>
                ))}
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mt-10 transition-colors">Operasional: Senin - Jumat, 09:00 - 18:00 WIB</p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-white dark:bg-slate-900/50 p-10 md:p-14 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] dark:shadow-none relative group transition-colors duration-500">
            {/* Top Right Decorative Dot */}
            <div className="absolute top-10 right-10 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-100 dark:bg-blue-900" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-200 dark:bg-blue-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-600" />
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tighter transition-colors">Kirim Pesan</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium transition-colors">Beri tahu kami tantangan yang Anda hadapi, dan kami akan memberikan solusi terbaik.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-widest font-extrabold text-slate-500 dark:text-slate-400 ml-1">Nama Lengkap</label>
                  <input type="text" className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4.5 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-4 focus:ring-primary-site/10 focus:border-primary-site/50 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600" placeholder="Masukkan nama Anda" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-widest font-extrabold text-slate-500 dark:text-slate-400 ml-1">Alamat Email</label>
                  <input type="email" className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4.5 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-4 focus:ring-primary-site/10 focus:border-primary-site/50 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600" placeholder="nama@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-widest font-extrabold text-slate-500 dark:text-slate-400 ml-1">Kategori Proyek</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Landing Page", "Company Profile", "E-Commerce", "Custom"].map((cat) => (
                    <button key={cat} type="button" className="px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 hover:border-primary-site/30 hover:text-primary-site transition-all bg-slate-50/50 dark:bg-slate-800/50">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-widest font-extrabold text-slate-500 dark:text-slate-400 ml-1">Pesan Lengkap</label>
                <textarea rows={4} className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4.5 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-4 focus:ring-primary-site/10 focus:border-primary-site/50 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600" placeholder="Ceritakan kebutuhan website Anda secara detail"></textarea>
              </div>

              <Button variant="primary" className="w-full bg-primary-site hover:bg-primary-hover text-white py-10 rounded-2xl shadow-xl shadow-blue-500/20 text-lg font-extrabold mt-6 group/btn overflow-hidden relative" size="lg">
                <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-px">Kirim Pesan Sekarang</span>
                {/* Button Shine Effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-[45deg] transition-all duration-700 group-hover/btn:left-[120%]" />
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto mt-24 relative px-4"
        >
          <div className="w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl dark:shadow-none relative bg-white dark:bg-slate-900 transition-colors duration-500">
            <ContactMap />
          </div>
          {/* Floating Address Badge on Map */}
          <div className="absolute top-10 left-10 hidden md:block z-20">
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 dark:border-white/10 shadow-2xl max-w-sm transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary-site/10 flex items-center justify-center mb-6">
                <MapPin className="text-primary-site" size={24} weight="duotone" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight transition-colors">Webenze Labs</h4>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">Jl. Letjend Sutoyo 3 No. 11, Kota Malang, Jawa Timur, Indonesia.</p>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400 dark:text-slate-500">Terbuka Secara Global</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


