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
    <section id="portfolio" className="py-24 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Portfolio Kami" 
          subtitle="Lihat bagaimana kami membantu berbagai bisnis mencapai visi digital mereka melalui desain dan teknologi."
        />
        
        {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 max-w-7xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="space-y-6 animate-pulse">
                        <div className="aspect-[3/4] bg-slate-100 rounded-3xl border border-slate-200" />
                        <div className="space-y-3 px-2">
                           <div className="h-2 w-1/4 bg-slate-200 rounded-full" />
                           <div className="h-4 w-3/4 bg-slate-200 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        ) : portfolios.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] mt-16 border border-slate-100">
                <p className="text-slate-500 italic font-medium">Belum ada portfolio yang ditampilkan saat ini.</p>
            </div>
        ) : (
            <div className="mt-20 w-full">
              <Swiper
                slidesPerView={1.1}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                    centeredSlides: false
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    centeredSlides: false
                  }
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="portfolio-swiper pb-28 !overflow-visible p-12 -m-12"
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


