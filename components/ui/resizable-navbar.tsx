"use client";
import { cn } from "@/lib/utils";
import { List, X } from "@phosphor-icons/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-4 z-50 w-full pointer-events-none", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
               child as React.ReactElement<{ visible?: boolean }>,
               { visible }
             )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={{ width: "100%", y: 0 }}
      animate={{
        backdropFilter: "blur(12px)",
        boxShadow: visible 
          ? "0 10px 30px -10px rgba(0,0,0,0.1), 0 1px 1px rgba(0, 0, 0, 0.05)"
          : "0 0 0 rgba(0,0,0,0)",
        width: visible ? "80%" : "100%",
        maxWidth: visible ? "1100px" : "1300px",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full px-8 py-4 lg:flex pointer-events-auto",
        visible ? "bg-white/80 border border-slate-100 shadow-xl" : "bg-transparent border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-semibold pointer-events-auto",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-5 py-2.5 text-slate-600 hover:text-primary-site transition-colors"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-slate-50"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      initial={{ width: "90%", y: -20, opacity: 0 }}
      animate={{
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
        width: "90%",
        y: 20,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-6 py-4 lg:hidden pointer-events-auto bg-white/90 rounded-[2rem] border border-slate-100 shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between pointer-events-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className={cn(
            "absolute inset-x-0 top-20 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-3xl bg-white p-8 shadow-2xl border border-slate-100 pointer-events-auto",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <X className="text-slate-900 w-6 h-6 cursor-pointer" onClick={onClick} />
  ) : (
    <List className="text-slate-900 w-6 h-6 cursor-pointer" onClick={onClick} />
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "outline";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 inline-block text-center cursor-pointer active:scale-95 whitespace-nowrap";

  const variantStyles = {
    primary: "bg-primary-site text-white shadow-lg shadow-blue-500/20 hover:bg-primary-hover hover:shadow-xl hover:shadow-blue-500/30",
    secondary: "bg-slate-50 text-slate-900 hover:bg-slate-100",
    dark: "bg-slate-900 text-white hover:bg-black",
    outline: "bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};


