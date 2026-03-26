"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Laptop, Lightning, Palette, Tag, MagnifyingGlass, Headset } from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    title: "Professional Development",
    icon: <Laptop size={32} weight="duotone" className="text-primary-site" />,
    description: "Dikembangkan oleh tim expert dengan standar kualitas industri."
  },
  {
    title: "Fast & Scalable Website",
    icon: <Lightning size={32} weight="duotone" className="text-primary-site" />,
    description: "Performa tinggi dan siap untuk traffic besar kapan saja."
  },
  {
    title: "Modern UI Design",
    icon: <Palette size={32} weight="duotone" className="text-primary-site" />,
    description: "Tampilan estetik, responsif, dan memberikan user experience terbaik."
  },
  {
    title: "Affordable Pricing",
    icon: <Tag size={32} weight="duotone" className="text-primary-site" />,
    description: "Solusi premium dengan harga yang sangat masuk akal bagi bisnis Anda."
  },
  {
    title: "SEO Friendly",
    icon: <MagnifyingGlass size={32} weight="duotone" className="text-primary-site" />,
    description: "Struktur website yang disukai Google untuk menaikkan ranking SEO."
  },
  {
    title: "Technical Support",
    icon: <Headset size={32} weight="duotone" className="text-primary-site" />,
    description: "Tim support siap sedia membantu kendala teknis Anda."
  }
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 relative bg-gradient-to-b from-blue-50/20 to-white border-y border-slate-100">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <SectionHeading title="Kenapa memilih Webenze?" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto mt-8">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-12 relative group/feature border-slate-100",
        index % 3 !== 2 && "lg:border-r",
        index < 3 && "lg:border-b"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-slate-50/50 pointer-events-none" />
      
      <div className="mb-6 relative z-10 px-10">
        <div className="w-12 h-12 rounded-2xl bg-primary-site/5 flex items-center justify-center group-hover/feature:bg-primary-site/10 transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <div className="text-xl font-bold mb-3 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-200 group-hover/feature:bg-primary-site transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-slate-900 tracking-tight">
          {title}
        </span>
      </div>
      
      <p className="text-base text-slate-500 max-w-xs relative z-10 px-10 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};


