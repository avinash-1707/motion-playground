"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

const socials = ["X", "LinkedIn", "GitHub"];

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="py-40">
      <motion.nav
        whileHover={{ width: "28rem" }}
        className="w-sm h-14 bg-black rounded-full flex justify-evenly"
      >
        {socials.map((item, idx) => (
          <Link
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            href="/"
            className={`${
              hovered === idx ? "w-full" : "w-full"
            } relative group text-center py-6 text-xs text-neutral-500`}
          >
            {hovered === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layoutId="hover"
                className="absolute inset-0 w-full h-full rounded-full bg-white/20"
              ></motion.div>
            )}
            <span className="relative group-hover:text-white">{item}</span>
          </Link>
        ))}
      </motion.nav>
    </div>
  );
}
