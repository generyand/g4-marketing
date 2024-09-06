import React from "react";
import { motion } from "framer-motion";
function SubTopicTitle({ children }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 text-2xl font-bold md:text-4xl"
    >
      {children}
    </motion.h1>
  );
}

export default SubTopicTitle;
