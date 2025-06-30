"use client";
import { easeIn, motion, useAnimate } from "motion/react";
import React, { useState } from "react";
import { RainbowButton } from "./magicui/rainbow-button";

export default function MemeReveal() {
  const [showMessage, setShowMessage] = useState(false);
  const [scope, animate] = useAnimate();
  const startAnimating = () => {
    animate(".doremon", {});
  };
  return (
    <motion.div className="min-h-screen w-full bg-black px-24 flex flex-col items-center">
      <RainbowButton onClick={() => setShowMessage(true)} className="my-24">
        Click to reveal
      </RainbowButton>
      {showMessage && (
        <>
          <motion.img
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            src="https://i.imgflip.com/4/9txq7s.jpg"
            alt="achha laundey"
            className="doremon h-84 aspect-square rounded-3xl"
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="message text-2xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent"
          >
            Achha Laundey
          </motion.span>
        </>
      )}
    </motion.div>
  );
}
