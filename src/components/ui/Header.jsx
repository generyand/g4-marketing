import React, { useState } from "react";
import { FaSearch, FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md bg-opacity-5 dark:bg-gray-800 backdrop-blur-md">
      <div className="flex items-center justify-between p-4 mx-auto wrapper max-w-screen-2xl">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0">
          <h1 className="text-2xl font-semibold dark:text-white">
            GROUP<span className="text-blue-500">4</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow hidden max-w-md mx-4 sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="items-center hidden sm:flex">
          <ul className="flex mr-4 space-x-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                About Us
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
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
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full sm:hidden hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FaBars className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
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
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-full gap-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaMoon className="text-gray-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaSun className="text-yellow-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
                Switch Theme
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
