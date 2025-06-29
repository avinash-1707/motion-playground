"use client";
import { Rocket } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function MotionHookEx() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#343434", "#00193b", "#502f4c"];

  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });
  return (
    <motion.div
      ref={containerRef}
      animate={{ background }}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-20">
        {features.map((feature, idx) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const scaleContent = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scaleContent,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <Rocket className="h-8 w-8 text-neutral-200" />,
    title: "Random ass image 1",
    description: "Description of an random ass image 1",
    content: (
      <div>
        <Image
          src="https://i.pinimg.com/736x/50/81/fa/5081fa05e79417f95628a074592263df.jpg"
          alt="random ass image"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Rocket className="h-8 w-8 text-neutral-200" />,
    title: "Random ass image 2",
    description: "Description of an random ass image 2",
    content: (
      <div>
        <Image
          src="https://i.imgflip.com/98i6oa.jpg"
          alt="random ass image"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Rocket className="h-8 w-8 text-neutral-200" />,
    title: "Random ass image 3",
    description: "Description of an random ass image 3",
    content: (
      <div>
        <Image
          src="https://i.imgflip.com/4/9txq7s.jpg"
          alt="random ass image"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];
