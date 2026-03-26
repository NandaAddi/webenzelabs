"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandsMarqueeProps {
  brands: Brand[];
}

export function BrandsMarquee({ brands }: BrandsMarqueeProps) {
  const brandsTripled = [...brands, ...brands, ...brands];

  return (
    <div className="flex relative items-center">
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <motion.div
        className="flex gap-10 md:gap-30 items-center shrink-0"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {brandsTripled.map((brand, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 h-30 md:h-50 w-30 md:w-50"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 200px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}


