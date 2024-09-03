import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navigation() {
  return (
    <nav className="hidden items-center sm:flex">
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
      <ThemeToggle />
    </nav>
  );
}

export default Navigation;