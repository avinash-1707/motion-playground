"use client";
import React from "react";
import { motion } from "motion/react";

const MotionButton = () => {
  return (
    <div
      className="[perspective::1000] [transform-style:preserve-3d] bg-neutral-900 h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        // initial={{ rotate: 0, opacity: 0 }}
        // animate={{ rotate: [0, 10, 0], opacity: 100 }}
        // transition={{ ease: "easeInOut" }}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 100,
          scale: 1,
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        whileTap={{
          y: 0,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black 
      shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        <span className="group-hover:text-cyan-400 transition-colors duration-300">
          Hover over
        </span>
        <span
          className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
        h-[2px] w-3/4 mx-auto"
        ></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[5px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
};

export default MotionButton;
