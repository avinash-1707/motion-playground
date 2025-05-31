import { cn } from "@/lib/utils";
import {
  Computer,
  Heart,
  MessageSquareIcon,
  Sparkle,
  StarIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(15px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "w-72 min-h-[24rem] h-[24rem] rounded-xl bg-white",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-4 flex flex-col"
            )}
          >
            <h2 className="text-black font-bold text-[12px]">
              CodexHelp - AI Code Assistant
            </h2>
            <p className="text-neutral-600 text-[10px] mt-2">
              Helps you code better.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1 text-black bg-white"
              >
                <Image
                  width={50}
                  height={50}
                  className="h-4 w-4 rounded-md"
                  alt="logo"
                  src="/logo.png"
                />
                Close
                <X className="h-4 w-4 text-neutral-600" />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 rounded-md border border-dashed border-gray-200 mt-4 relative">
              {/* Motion divs start here */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1.02, filter: "blur(0px)" }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  damping: 15,
                  stiffness: 100,
                }}
                //   transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full bg-white rounded-lg border border-neutral-200 divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <MessageSquareIcon className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      CodexHelp Chat
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      Chat with your code.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <StarIcon className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Better Code
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      Improves your code quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Sparkle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      CodexHelp Extension
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      VS Code extension to track everything
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Computer className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Web Dashboard
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      A dashboard to store your deeds.
                    </p>
                  </div>
                </div>
                {/* Motion divs end here */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
