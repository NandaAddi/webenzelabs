import React from 'react';
import Link from 'next/link';
import {
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  GithubLogo,
  FacebookLogo
} from "@phosphor-icons/react/dist/ssr";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const navLinks = [
    { title: "Portfolio", href: "/portfolio" },
    { title: "Services", href: "/services" },
    { title: "Clients", href: "#" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "#" },
    { title: "Privacy", href: "/privacy" }, // Fixed links while at it
    { title: "Terms", href: "/terms" },
  ];

  return (
    <footer className="bg-primary-site dark:bg-slate-950 text-white py-20 md:py-32 relative overflow-hidden transition-colors duration-500">
      {/* Subtle Background Decoration - Adjusted for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-white dark:bg-primary-site rounded-full blur-[100px] md:blur-[120px] -mt-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top/Middle: Logo & Nav */}
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <Link href="/" className="transition-all hover:scale-105 active:scale-95 duration-300">
            <BrandLogo variant="white" className="[&_svg]:drop-shadow-lg scale-90 md:scale-100" />
          </Link>

          {/* Nav: Use Grid for mobile (2 columns) and Flex for desktop */}
          <nav className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-6 max-w-4xl mt-12 md:mt-16 w-full md:w-auto">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-[10px] md:text-xs font-extrabold text-blue-100/70 hover:text-white transition-all tracking-[0.2em]  text-center md:text-left"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Bar: Stacked on mobile, Split on desktop */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10">
          <div className="flex flex-col items-center md:items-start gap-4 order-2 md:order-1">
            <p className="text-[10px] md:text-xs font-medium tracking-tight text-blue-100/40 text-center md:text-left">
              © 2026 WebenzeLabs.com. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-8 order-1 md:order-2">
            <Link href="#" aria-label="Twitter" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90 p-2">
              <TwitterLogo size={20} weight="fill" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90 p-2">
              <LinkedinLogo size={20} weight="fill" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90 p-2">
              <GithubLogo size={20} weight="fill" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90 p-2">
              <FacebookLogo size={20} weight="fill" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90 p-2">
              <InstagramLogo size={20} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
