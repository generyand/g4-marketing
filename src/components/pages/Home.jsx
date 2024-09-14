import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Animation from "../../assets/home/Animation-1.json";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center md:h-[calc(100svh-8rem)] gap-10 p-16 mx-auto mt-12 md:mt-0 mb-12 text-center sm:text-start md:flex-row max-w-screen-2xl"
    >
      {/* Title */}
      <div className="flex-1">
        <div className="mb-4 title-text">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-regular">
            What is a
          </span>
          <h1 className="text-5xl font-bold text-blue-500 md:text-6xl lg:text-7xl dark:text-blue-400 sm:text-8xl">
            Marketing Plan?
          </h1>
        </div>

        <p className="mb-10 sm:mb-16 sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
          Know the importance and process of market research, how to describe a
          brand name, identify the 7P&rsquo;s in marketing and determine the
          concept of marketing research and marketing plan.
        </p>

        <button className="px-4 py-2 text-white transition-all duration-200 bg-blue-500 border-2 border-blue-500 rounded-md hover:bg-transparent hover:text-blue-500 sm:text-xl">
          <Link to="/key-terminologies">Explore Topics</Link>
        </button>
      </div>

      {/* Illustration */}
      <div className="flex-1 max-w-[640px]">
        <Lottie animationData={Animation} />
      </div>
    </motion.div>
  );
}

export default Home;
