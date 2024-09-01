import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div className="relative h-[calc(100svh-74px)] bg-gray-200 dark:bg-gray-800">
        <div
          className={`fixed w-64 h-full bg-gray-200 dark:bg-gray-800 sm:static  sm:block transition-all duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-[-100%]"
          } sm:translate-x-0`}
          // onBlur={closeSidebar}
        >
          {/* This is the background that is used to close the sidebar */}
          <div
            className={`absolute z-[-10] w-screen h-screen sm:hidden bg-gray-900 bg-opacity-50 z-100 transition-all duration-300 ${
              isOpen ? "translate-x-64" : "translate-x-[-100%]"
            }`}
            onClick={closeSidebar}
          />
          <nav className="flex flex-col h-full bg-gray-200 dark:bg-gray-800 z-[100]">
            {/* <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 text-lg font-medium text-white px-2 py-3"
                : "text-lg font-medium px-2 py-3"
            }
          >
            Home
          </NavLink> */}
            <NavLink
              to="/key-terminologies"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-lg font-medium text-white px-2 py-3"
                  : "text-lg font-medium px-2 py-3"
              }
            >
              Key Terminologies
            </NavLink>
            <NavLink
              to="/7ps-of-marketing"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-lg font-medium text-white px-2 py-3"
                  : "text-lg font-medium px-2 py-3"
              }
            >
              The 7P's of Marketing
            </NavLink>
            <NavLink
              to="/branding"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-lg font-medium text-white px-2 py-3"
                  : "text-lg font-medium px-2 py-3"
              }
            >
              Branding
            </NavLink>
            <NavLink
              to="/marketing-research"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-lg font-medium text-white px-2 py-3"
                  : "text-lg font-medium px-2 py-3"
              }
            >
              Marketing Research
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Sidebar Toggle Button */}

      <button
        className={`absolute rounded-ee-md rounded-se-md bottom-4 transform py-2 px-1 bg-gray-200 dark:bg-gray-800 border-gray-400 sm:hidden transition-all duration-300 ${
          isOpen ? "translate-x-64" : "translate-x-0"
        } sm:translate-x-0`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <FaAngleLeft className="text-xl" />
        ) : (
          <FaAngleRight className="text-xl" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;
