"use client";

import React, { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/PortfolioCard";
import { supabase } from "@/lib/supabase";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail_url: string;
  slug: string;
}

export function Portfolio() {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolios() {
      setLoading(true);
      const { data, error } = await supabase
        .from("portfolios")
        .select("id, title, category, description, thumbnail_url, slug")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching portfolios:", error);
      } else {
        setPortfolios(data || []);
      }
      setLoading(false);
    }

    fetchPortfolios();
  }, []);

  return (
    <section id="portfolio" className="py-24 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Portfolio Kami" 
          subtitle="Lihat bagaimana kami membantu berbagai bisnis mencapai visi digital mereka melalui desain dan teknologi."
        />
        
        {loading ? (
            <div className="flex flex-wrap justify-center gap-8 mt-20 max-w-7xl mx-auto px-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[340px] space-y-6 animate-pulse">
                        <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700" />
                        <div className="space-y-3 px-2">
                           <div className="h-2 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                           <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        ) : portfolios.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] mt-16 border border-slate-100 dark:border-slate-800">
                <p className="text-slate-500 dark:text-slate-400 italic font-medium">Belum ada portfolio yang ditampilkan saat ini.</p>
            </div>
        ) : (
            <div className="mt-20 w-full px-4">
              <Swiper
                slidesPerView={1.2}
                spaceBetween={20}
                centeredSlides={true}
                centerInsufficientSlides={true}
                loop={portfolios.length > 5}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                breakpoints={{
                  640: {
                    slidesPerView: Math.min(portfolios.length, 2.3),
                    spaceBetween: 30,
                    centeredSlides: false
                  },
                  1024: {
                    slidesPerView: Math.min(portfolios.length, 4),
                    spaceBetween: 24,
                    centeredSlides: false
                  }
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="portfolio-swiper pb-24"
              >
                {portfolios.map((project) => (
                  <SwiperSlide key={project.id} className="h-auto">
                    <PortfolioCard 
                      title={project.title}
                      category={project.category}
                      description={project.description}
                      thumbnailUrl={project.thumbnail_url}
                      slug={project.slug}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        )}
      </div>
    </section>
  );
}


