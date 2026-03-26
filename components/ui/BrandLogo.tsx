"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

import { useTheme } from 'next-themes';

export const BrandLogo = ({ className, variant = "default" }: { className?: string, variant?: "default" | "white" }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use the white logo if variant is white OR if we are in dark mode
  const isWhiteLogo = variant === "white" || (mounted && resolvedTheme === "dark");
  const logoSrc = isWhiteLogo ? "/images/logo-footer.png" : "/images/logo.png";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(
        "relative transition-all duration-500",
        variant === "white" 
          ? "w-48 h-12 md:w-64 md:h-16" 
          : "w-32 h-8 md:w-48 md:h-12"
      )}>
        <Image
          src={logoSrc}
          alt="Webenze Logo"
          fill
          className="object-contain"
          priority
          onError={(e) => {
            console.warn(`Logo file missing at ${logoSrc}`);
          }}
        />
      </div>
    </div>
  );
};
