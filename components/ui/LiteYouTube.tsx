"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "@phosphor-icons/react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

export function LiteYouTube({ videoId, title, className }: LiteYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={() => setIsLoaded(true)}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-site fill-current" weight="fill" />
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-site/20 to-blue-400/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
    </div>
  );
}


