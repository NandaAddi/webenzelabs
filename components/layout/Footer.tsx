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
    { title: "Privacy", href: "#" },
    { title: "Terms", href: "#" },
  ];

  return (
    <footer className="bg-primary-site text-white py-32 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-white rounded-full blur-[120px] -mt-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top/Middle: Logo & Nav */}
        <div className="flex flex-col items-center mb-24 text-center">
          <Link href="/" className="transition-all hover:scale-105 active:scale-95 duration-300">
            <BrandLogo variant="white" className="[&_svg]:drop-shadow-lg" />
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-4xl mt-12">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-xs font-extrabold text-blue-100/70 hover:text-white transition-all tracking-[0.2em] uppercase"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-xs font-medium tracking-tight text-blue-100/40">
            © 2026 WebenzeLabs.com. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
            <Link href="#" aria-label="Twitter" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90">
              <TwitterLogo size={22} weight="fill" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90">
              <LinkedinLogo size={22} weight="fill" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90">
              <GithubLogo size={22} weight="fill" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90">
              <FacebookLogo size={22} weight="fill" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-blue-100/50 hover:text-white transition-all hover:scale-110 active:scale-90">
              <InstagramLogo size={22} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
