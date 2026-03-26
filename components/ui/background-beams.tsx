"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // simplified animation version
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none",
        className
      )}
      ref={containerRef}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),rgba(255,255,255,0))] blur-3xl rounded-full" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),rgba(255,255,255,0))] blur-3xl rounded-full" />
    </div>
  );
};


