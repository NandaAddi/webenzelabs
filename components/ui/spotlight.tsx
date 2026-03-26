"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className,
  size = 400,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        const computedStyle = window.getComputedStyle(parent);
        if (computedStyle.position === "static") {
          parent.style.position = "relative";
        }
        parent.style.overflow = "hidden";
        setParentElement(parent);
      }
    }
  }, []);

  useEffect(() => {
    if (!parentElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    parentElement.addEventListener("mousemove", handleMouseMove);
    parentElement.addEventListener("mouseenter", handleMouseEnter);
    parentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parentElement.removeEventListener("mousemove", handleMouseMove);
      parentElement.removeEventListener("mouseenter", handleMouseEnter);
      parentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [parentElement, mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-0 transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: spotlightLeft,
          top: spotlightTop,
          background: `radial-gradient(circle at center, rgba(39,105,185,0.08), transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}


