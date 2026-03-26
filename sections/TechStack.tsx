"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { 
  Atom, 
  Globe, 
  Browsers, 
  Hexagon, 
  FileHtml, 
  FigmaLogo, 
  GitBranch 
} from "@phosphor-icons/react";

const technologies = [
  { name: "React", icon: Atom, color: "#61DAFB", desc: "Interactive UI" },
  { name: "Next.js", icon: Globe, color: "#000000", desc: "Server-side Rendering" },
  { name: "Laravel", icon: Browsers, color: "#FF2D20", desc: "Elegant PHP Backend" },
  { name: "Node.js", icon: Hexagon, color: "#339933", desc: "Fast JS Runtime" },
  { name: "HTML5", icon: FileHtml, color: "#E34F26", desc: "Semantic Structure" },
  { name: "Figma", icon: FigmaLogo, color: "#F24E1E", desc: "Modern Collaboration" },
  { name: "Git", icon: GitBranch, color: "#F05032", desc: "Version Control" },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative bg-gradient-to-b from-white to-blue-50/20 overflow-hidden border-b border-slate-100">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-site/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <SectionHeading 
          title="Teknologi yang Kami Gunakan" 
          subtitle="Kami membangun solusi digital Anda menggunakan ekosistem teknologi modern yang teruji secara industri."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-20">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <div className="h-full bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div 
                        className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-500 z-10"
                        style={{ color: tech.color }}
                    >
                        <Icon size={32} weight="duotone" />
                    </div>
                    
                    <div className="relative z-10">
                        <h4 className="text-slate-900 font-extrabold text-lg mb-1 tracking-tight">{tech.name}</h4>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{tech.desc}</p>
                    </div>

                    {/* Active Accent Border at Bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-site/0 group-hover:bg-primary-site/30 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


