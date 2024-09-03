import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "./SearchBar";

function MobileSearchBar({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="sm:hidden"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            className="p-4"
          >
            <SearchBar />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileSearchBar;