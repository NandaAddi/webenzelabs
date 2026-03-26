"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MagnifyingGlassPlus, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface PortfolioGalleryProps {
  images: string[];
  title: string;
}

export const PortfolioGallery = ({ images, title }: PortfolioGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4">
         <div className="h-px flex-1 bg-slate-100" />
         <h2 className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-slate-400 whitespace-nowrap">Visual Evidence</h2>
         <div className="h-px flex-1 bg-slate-100" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 group cursor-zoom-in shadow-sm hover:shadow-2xl transition-all duration-500"
            onClick={() => setSelectedImage(idx)}
          >
            <Image
              src={img}
              alt={`${title} visual ${idx}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary-site/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-white/50 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                <MagnifyingGlassPlus className="w-6 h-6 text-primary-site" weight="bold" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-10 right-10 z-[110] p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 hover:bg-slate-100 transition-all duration-300 shadow-sm active:scale-90"
              aria-label="Close modal"
              onClick={(e) => {
                 e.stopPropagation();
                 setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" weight="bold" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-10 z-[110] p-5 rounded-2xl bg-white/80 border border-slate-100 text-primary-site hover:bg-white transition-all duration-300 shadow-xl hidden md:block active:scale-90"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                >
                  <CaretLeft className="w-8 h-8" weight="bold" />
                </button>
                <button
                  className="absolute right-10 z-[110] p-5 rounded-2xl bg-white/80 border border-slate-100 text-primary-site hover:bg-white transition-all duration-300 shadow-xl hidden md:block active:scale-90"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <CaretRight className="w-8 h-8" weight="bold" />
                </button>
              </>
            )}

            {/* Main Image Container */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-[90vw] aspect-video md:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-[0_64px_128px_-24px_rgba(0,0,0,0.15)] border border-slate-100 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
               <Image
                 src={images[selectedImage]}
                 alt={`${title} zoomed ${selectedImage}`}
                 fill
                 priority
                 sizes="90vw"
                 className="object-contain"
               />
              
              {/* Image Counter */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-100 shadow-2xl text-[10px] font-extrabold tracking-[0.3em] text-primary-site uppercase">
                Project Visual {selectedImage + 1} of {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


