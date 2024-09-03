import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

function MobileMenu({ isOpen, toggleTheme, isDarkMode }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.25 }}
          exit={{ height: 0 }}
          className="flex flex-col items-center justify-center overflow-hidden text-center sm:hidden"
        >
          <ul className="px-4 py-2 space-y-2">
            <li>
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                About Us
              </Link>
            </li>
            <ThemeToggle isMobile={true} />
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;