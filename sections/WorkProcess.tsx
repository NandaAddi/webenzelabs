"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  PaintBrush,
  Code,
  Rocket
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Kami mulai dengan memahami visi dan target audiens bisnis Anda melalui konsultasi mendalam.",
    icon: Users,
    color: "bg-blue-500",
    image: "/images/gas1.png"
  },
  {
    number: "02",
    title: "Design & UX",
    description: "Menciptakan antarmuka yang indah dan intuitif untuk pengalaman pengguna yang maksimal.",
    icon: PaintBrush,
    color: "bg-primary-site",
    image: "/images/uiux1.png"
  },
  {
    number: "03",
    title: "Development",
    description: "Membangun sistem yang cepat, aman, dan responsif menggunakan teknologi modern terbaru.",
    icon: Code,
    color: "bg-indigo-600",
    image: "/images/development1.png"
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Uji coba ketat dan peluncuran website, disertai dukungan teknis pasca-launching berkelanjutan.",
    icon: Rocket,
    color: "bg-emerald-500",
    image: "/images/launch.png"
  },
];

export function WorkProcess() {
  return (
    <section id="how-we-work" className="py-24 bg-white relative overflow-hidden text-slate-900 border-t border-slate-100">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <SectionHeading
          title="Alur Kerja Webenze"
          subtitle="Proses terukur kami untuk mentransformasikan ide Anda menjadi solusi digital yang nyata."
        />

        <div className="mt-24 relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step Connector Node */}
                <div className="hidden lg:flex absolute -top-14 left-0 items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-100 group-hover:border-primary-site transition-colors duration-500 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-primary-site transition-colors duration-500" />
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 min-h-[400px] flex flex-col items-start group-hover:-translate-y-2 relative overflow-hidden group/card">
                  {/* Background Dummy Image Placeholder - Layered behind overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-80 opacity-80 group-hover/card:opacity-50 group-hover/card:scale-110 transition-all duration-1000 z-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain object-bottom filter grayscale"
                    />
                  </div>

                  {/* Subtle Gradient Overlay - ensuring contrast but allowing image to show */}
                  <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10 pointer-events-none" />

                  {/* Number Badge */}
                  <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-500 mb-6 block leading-none relative z-20">
                    {step.number}
                  </span>

                  <div className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/10 relative z-20`}>
                    <step.icon className="text-white w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-extrabold mb-4 tracking-tighter text-slate-900 group-hover:text-primary-site transition-colors duration-500 relative z-20">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium relative z-20">
                    {step.description}
                  </p>

                  {/* Arrow Indicator for Mobile/Tablet */}
                  <div className="lg:hidden mt-8 flex justify-center w-full relative z-20">
                    <div className="w-1 h-8 bg-slate-100 rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


