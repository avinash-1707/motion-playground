"use client";
import { useAnimate, motion, stagger } from "motion/react";
import React, { useEffect } from "react";
import NerdParallax from "./nerdparallax";

function AnimatedText() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    startAnimating();
  }, []);
  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };
  const text =
    "First year me masti, fir second year me dsa and developement, third year me web3 and ai, fourth year remote offer";
  return (
    <>
      <NerdParallax />
      <div
        ref={scope}
        className="max-w-2xl text-white mx-auto font-bold absolute text-5xl"
      >
        {text.split(" ").map((word, idx) => (
          <motion.span
            key={word + idx}
            style={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
    </>
  );
}

export default AnimatedText;
