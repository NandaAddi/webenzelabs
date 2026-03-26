"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Star } from "@phosphor-icons/react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string;
    name?: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "15s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[100vw] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
               "relative rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]",
               item.quote ? "w-[320px] md:w-[480px] p-10" : "w-[120px] md:w-[200px] p-6 text-center"
            )}
            key={(item.name || item.title) + idx}
          >
            {item.quote ? (
               <blockquote className="flex flex-col h-full justify-between gap-8">
                 <div className="space-y-6">
                   <div className="flex gap-1.5">
                       {[...Array(5)].map((_, i) => (
                           <Star key={i} weight="fill" className="w-3.5 h-3.5 text-amber-500" />
                       ))}
                   </div>
                   <span className="relative z-20 text-lg leading-relaxed font-normal text-slate-700">
                       "{item.quote}"
                   </span>
                 </div>
                 <div className="relative z-20 flex flex-row items-center gap-4 border-t border-slate-100 pt-8">
                   <div className="w-12 h-12 rounded-2xl bg-primary-site/5 flex items-center justify-center text-primary-site font-bold text-sm shadow-inner shadow-white">
                       {item.name?.charAt(0)}
                   </div>
                   <div className="flex flex-col gap-0.5">
                     <span className="text-base font-bold text-slate-900 tracking-tight">
                       {item.name}
                     </span>
                     <span className="text-[11px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                       {item.title}
                     </span>
                   </div>
                 </div>
               </blockquote>
            ) : (
               <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-2">
                     <span className="text-xl font-bold text-primary-site">{item.title.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 tracking-tight">{item.title}</span>
               </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


