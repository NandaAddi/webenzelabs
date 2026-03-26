"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from "next/image";

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface ServiceSlide {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const services: ServiceSlide[] = [
  {
    title: "Website Design",
    description: "Desain estetis dan fungsional dengan teknologi terbaru.",
    image: "/images/webdesign.png",
    bgColor: "bg-white",
  },
  {
    title: "Mobile Design",
    description: "Antarmuka mobile modern dan sangat user-friendly.",
    image: "/images/mobiledesign.png",
    bgColor: "bg-slate-50",
  },
  {
    title: "SEO Optimize",
    description: "Optimasi mesin pencari untuk performa halaman pertama.",
    image: "/images/seoo.png",
    bgColor: "bg-slate-50",
  },
  {
    title: "Web Development",
    description: "Fitur high-end dan performa maksimal untuk bisnis Anda.",
    image: "/images/web-dev.png",
    bgColor: "bg-white",
  },
];

export default function ServicesCarousel() {
  return (
    <Swiper
      slidesPerView={1.1}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: false,
        }
      }}
      modules={[FreeMode, Pagination]}
      className="services-swiper pb-20 !overflow-visible p-12 -m-12"
    >
      {services.map((service, idx) => (
        <SwiperSlide key={idx} className="h-auto">
          <div className={`${service.bgColor} h-full border border-slate-100 rounded-[2.5rem] overflow-hidden flex flex-col group shadow-sm hover:shadow-2xl transition-all duration-700`}>
            <div className="p-8 pb-0 relative z-10">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tighter">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
            <div className="px-6 mt-10 mb-2 relative h-48">
              <div className="absolute inset-0 z-20 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-1000 ease-out">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


