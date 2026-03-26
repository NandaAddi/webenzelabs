"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChatCircleText, 
  ArrowUp, 
  Files, 
  Rocket, 
  Palette, 
  Briefcase 
} from "@phosphor-icons/react";
import Link from "next/link";

export function ContextMenu() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      
      // Calculate position but keep within viewport
      const menuWidth = 220;
      const menuHeight = 300;
      let x = e.pageX;
      let y = e.pageY;

      if (x + menuWidth > window.innerWidth) {
        x = window.innerWidth - menuWidth;
      }
      if (y + menuHeight > window.innerHeight + window.scrollY) {
        y = window.innerHeight + window.scrollY - menuHeight;
      }

      setPosition({ x, y });
      setVisible(true);
    };

    const handleClick = () => {
      setVisible(false);
    };

    const handleScroll = () => {
      setVisible(false);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { 
      label: "Start New Project", 
      icon: Rocket, 
      href: "/contact", 
      color: "text-primary-site" 
    },
    { 
      label: "Browse Gallery", 
      icon: Briefcase, 
      href: "/portfolio", 
      color: "text-slate-600" 
    },
    { 
      label: "Our Services", 
      icon: Palette, 
      href: "/services", 
      color: "text-slate-600" 
    },
    { 
        type: "divider" 
    },
    { 
      label: "Copy Website URL", 
      icon: Files, 
      action: () => {
        navigator.clipboard.writeText("https://webenze.com");
        alert("URL Berhasil Disalin!");
      },
      color: "text-slate-400" 
    },
    { 
      label: "Scroll to Top", 
      icon: ArrowUp, 
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }), 
      color: "text-slate-400" 
    },
    { 
      label: "Direct Consult", 
      icon: ChatCircleText, 
      href: "https://wa.me/your-number", 
      color: "text-emerald-500" 
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.98, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 4 }}
          transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="fixed z-[9999] w-72 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_32px_80px_-20px_rgba(39,105,185,0.18)] rounded-[2rem] p-3 overflow-hidden ring-1 ring-black/5"
          style={{ 
            left: position.x, 
            top: position.y - window.scrollY, 
          }}
        >
          {/* Brand Header */}
          <div className="px-4 py-3 mb-2 flex items-center justify-between border-b border-slate-100/50">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-site animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Webenze Menu</span>
             </div>
             <div className="bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">V2.0</span>
             </div>
          </div>

          <div className="space-y-1">
            {menuItems.map((item, idx) => {
              if (item.type === "divider") {
                return <div key={idx} className="h-px bg-slate-100/80 my-2 mx-3" />;
              }

              const Icon = item.icon!;
              const Content = (
                <div 
                    className="flex items-center justify-between px-3 py-3 rounded-2xl hover:bg-primary-site group transition-all duration-300 cursor-pointer"
                    onClick={() => item.action && item.action()}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-90 transition-all duration-500 ${item.color}`}>
                        <Icon size={18} weight="duotone" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-800 group-hover:text-white transition-colors">
                        {item.label}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-40 transition-opacity">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <Link key={idx} href={item.href}>
                    {Content}
                  </Link>
                );
              }

              return <div key={idx}>{Content}</div>;
            })}
          </div>

          {/* Copyright Subfooter */}
          <div className="mt-3 pt-3 px-4 pb-1 flex items-center justify-between border-t border-slate-100/50">
             <p className="text-[8px] font-extrabold text-slate-300 uppercase tracking-[0.3em]">
               Powered by Webenze Creative
             </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
