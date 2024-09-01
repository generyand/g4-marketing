import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="relative h-[calc(100svh-74px)]">
      <div
        className={`fixed w-64 h-full bg-gray-200 dark:bg-gray-800 sm:static ${
          isOpen ? "block" : "hidden"
        } sm:block`}
        onClick={closeSidebar}
      >
        <nav className="flex flex-col h-full">
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
      <button
        className={`absolute rounded-ee-md rounded-se-md bottom-4 transform py-2 px-1 bg-gray-200 dark:bg-gray-800 border-gray-400 sm:hidden 
        ${isOpen ? "left-64" : "left-0"}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaAngleLeft className="text-xl" /> : <FaAngleRight className="text-xl" />}
      </button>
    </div>
  );
}

export default Sidebar;
