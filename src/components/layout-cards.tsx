"use client";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        callback();
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export default function LayoutCards() {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="py-10 bg-gray-200 min-h-screen relative">
      {current && (
        <div className="fixed z-10 h-full w-full inset-0 bg-black/40 backdrop-blur"></div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[600px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-2xl"
          />
          <div className="flex flex-col justify-between items-start">
            <div className="flex items-start justify-between py-4 w-full gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-heading-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <p className="text-[10px] text-neutral-500">
                  {current.description}
                </p>
              </div>
            </div>
            <div className="h-60 overflow-auto">{current.content()}</div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="p-4 cursor-pointer rounded-lg flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-heading-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <p className="text-[10px] text-neutral-500">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="px-2 py-1 bg-green-400 rounded-full text-white text-xs">
              Play
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

type Card = {
  title: string;
  description: string;
  src: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Summertime sadness",
    description: "Lana del Rey",
    src: "/summertime-sadness.jpg",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-600">
          Lana Del Rey, known for her haunting vocals and nostalgic Americana
          aesthetic, has carved a unique place in modern music with her
          cinematic blend of melancholy and glamour. Her lyrics often explore
          themes of love, fame, and tragedy, wrapped in lush orchestration and
          vintage motifs. With albums like *Born to Die* and *Norman Fucking
          Rockwell!*, she's become a symbol of wistful romanticism and artistic
          authenticity, appealing to fans who crave emotion-drenched
          storytelling. Whether she's singing about lost love or California
          dreams, Lana's work feels like a fading photograph—beautiful, raw, and
          timeless.
        </p>
      );
    },
  },
  {
    title: "Kya mujhe pyaar hai?",
    description: "KK",
    src: "/kk-song.jpeg",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-600">
          KK, born Krishnakumar Kunnath, was one of India's most beloved
          playback singers, known for his soulful voice and versatility across
          genres. From romantic ballads to high-energy anthems, his songs
          resonated deeply with listeners of all ages. With timeless hits like
          "Tadap Tadap" from *Hum Dil De Chuke Sanam* and "Pal" from his iconic
          solo album, KK's music became a soundtrack to countless memories. He
          had a rare ability to convey emotion with simplicity, avoiding the
          limelight while letting his voice speak volumes. Even after his
          untimely passing in 2022, KK's legacy continues to live on through the
          hearts he touched with his unforgettable melodies.
        </p>
      );
    },
  },
  {
    title: "Zaroorat",
    description: "Mustafa Zahid",
    src: "/zaroorat.jpeg",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-600">
          Mustafa Zahid is a Pakistani singer and the lead vocalist of the rock
          band Roxen. He gained fame with Bollywood hits like “Toh Phir Aao” and
          “Tera Mera Rishta” from *Awarapan*, known for their emotional
          intensity and rock flair. With his powerful voice and a string of
          successful film songs like “Bhula Dena” and “Zaroorat,” he carved a
          niche in cross-border music. Though he keeps a lower profile today,
          Mustafa remains a respected voice in South Asian music, blending rock
          and romance in a style that’s both raw and heartfelt.
        </p>
      );
    },
  },
];
