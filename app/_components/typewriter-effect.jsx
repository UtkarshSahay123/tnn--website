"use client";
import { cn } from "@/app/lib/utils";
import { motion } from "motion/react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    chars: word.text.split(""),
  }));

  const renderWords = () => (
    <div style={{ whiteSpace: "nowrap" }} className="inline-block">
      {wordsArray.map((word, wIdx) => (
        <span key={`word-${wIdx}`} className="inline-block mr-3">
          {word.chars.map((char, cIdx) => (
            <span
              key={`w${wIdx}-c${cIdx}`}
              className={cn("inline-block align-middle", word.className)}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("flex items-center my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2 inline-block"
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 1.8, ease: "linear", delay: 0.2 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold inline-block bg-clip-text text-transparent text-center 
      bg-gradient-to-b from-neutral-900 to-neutral-700 
      dark:from-neutral-600 dark:to-white "
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-purple-500 ml-2",
          cursorClassName
        )}
      />
    </div>
  );
};
