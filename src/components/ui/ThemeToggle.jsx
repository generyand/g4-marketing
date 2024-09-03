import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle({ isMobile = false }) {
  const { isDarkMode, toggleTheme } = useTheme();

  const buttonClass = isMobile
    ? "flex items-center justify-center w-full gap-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    : "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <button onClick={toggleTheme} className={buttonClass}>
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon className="text-gray-500" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <FaSun className="text-yellow-500" />
          </motion.div>
        )}
      </AnimatePresence>
      {isMobile && "Switch Theme"}
    </button>
  );
}

export default ThemeToggle;
