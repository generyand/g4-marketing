import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaSearch } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import MobileSearchBar from "./MobileSearchBar";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchVisible(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white bg-opacity-70 shadow-md backdrop-blur-md dark:bg-opacity-70 dark:bg-gray-800">
      <div className="flex justify-between items-center p-4 mx-auto max-w-screen-2xl wrapper">
        <Logo />
        <div className="hidden flex-grow mx-4 max-w-md sm:block">
          <SearchBar />
        </div>
        <Navigation />
        <MobileButtons
          handleSearchToggle={handleSearchToggle}
          handleMenuToggle={handleMenuToggle}
        />
      </div>
      <MobileSearchBar isVisible={isSearchVisible} />
      <MobileMenu
        isOpen={isMenuOpen}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
    </header>
  );
}

function MobileButtons({ handleSearchToggle, handleMenuToggle }) {
  return (
    <div className="flex items-center sm:hidden">
      <button
        onClick={handleSearchToggle}
        className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FaSearch className="text-gray-700 dark:text-gray-300" />
      </button>
      <button
        onClick={handleMenuToggle}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FaBars className="text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
}

export default Header;
