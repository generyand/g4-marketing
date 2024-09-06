import React from "react";
import { motion } from "framer-motion";

const GlowingBlob = () => {
  return (
    <div className="absolute inset-0 h-full overflow-hidden pointer-events-none">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 0.25,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute right-[-10rem] top-[-10rem] w-56 h-80 lg:w-96 lg:h-128 dark:bg-blue-500 bg-blue-300 rounded-full sm:right-0 lg:right-32 md:top-[-10rem] dark:opacity-35 opacity-25 dark:blur-3xl"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 0.25,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        style={{
          rotate: "-45deg",
        }}
        className="absolute bottom-[-4rem] left-[-12rem] w-56 h-96 lg:w-[16rem] lg:h-[32rem] dark:bg-blue-500 bg-blue-300 rounded-full sm:left-[-8rem] sm:bottom-[-8rem] dark:opacity-35 opacity-25 dark:blur-3xl"
      />
    </div>
  );
};

export default GlowingBlob;
