import React from "react";
import { Link } from "react-router-dom";
import { navigationConfig } from "../../data/navigationConfig";
import { motion } from "framer-motion";

function KeyTerminologies() {
  const keyTerminologies = navigationConfig.find(
    (item) => item.key === "keyTerminologies"
  );

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white"
      >
        Key Terminologies
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {keyTerminologies.items.slice(1).map((item, index) => (
          <motion.div
            key={index}
            className="h-full"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link to={item.path} className="block h-full">
              <div className="flex flex-col justify-center p-4 h-full bg-white rounded-lg border border-gray-200 transition-shadow hover:text-white dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg hover:outline outline-1 dark:outline-white">
                <h2 className="text-xl text-gray-800 sm:text-2xl dark:text-gray-100">
                  {item.title}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default KeyTerminologies;
