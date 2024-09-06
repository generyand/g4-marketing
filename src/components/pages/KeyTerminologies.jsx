import React from "react";
import { Link } from "react-router-dom";
import { navigationConfig } from "../../data/navigationConfig";
import { motion } from "framer-motion";
import MainTopicContainer from "../ui/MainTopicContainer";
import MainTopicTitle from "../ui/MainTopicTitle";

function KeyTerminologies() {
  const keyTerminologies = navigationConfig.find(
    (item) => item.key === "keyTerminologies"
  );

  return (
    <MainTopicContainer>
      <MainTopicTitle>Key Terminologies</MainTopicTitle>
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
              <div className="flex flex-col justify-center h-full p-4 transition-shadow bg-white border border-gray-200 rounded-lg hover:text-white dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg hover:outline outline-1 dark:outline-white">
                <h2 className="text-lg text-gray-800 sm:text-2xl dark:text-gray-100">
                  {item.title}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </MainTopicContainer>
  );
}

export default KeyTerminologies;
