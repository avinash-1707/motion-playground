"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export default function NerdParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateImages = useTransform(scrollYProgress, [0, 1], [350, -100]);
  return (
    <div ref={ref} className="w-screen h-screen relative -z-20">
      <motion.img
        style={{
          y: translateImages,
        }}
        initial={{ opacity: 0, filter: "blur(10px)", x: -100 }}
        animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        src="/nerd.jpg"
        alt="nerd"
        className="absolute h-56 aspect-square top-15 left-12"
      />
      <motion.img
        style={{
          y: translateImages,
        }}
        initial={{ opacity: 0, filter: "blur(10px)", x: 100 }}
        animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        src="/nerdcat.jpg"
        alt="nerdcat"
        className="absolute h-64 aspect-square top-32 right-16"
      />
    </div>
  );
}
