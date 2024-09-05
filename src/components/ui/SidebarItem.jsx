import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SidebarItem = ({ title, items, isOpen, toggleOpen, closeSidebar }) => {
  const location = useLocation();

  const handleItemClick = (path) => {
    if (location.pathname !== path) {
      closeSidebar();
    }
  };

  const isActive = items.some((item) => item.path === location.pathname);

  return (
    <div className="overflow-hidden">
      <button
        onClick={toggleOpen}
        className={`flex justify-between items-center p-3 w-full text-lg md:text-sm lg:text-base font-medium ${
          isActive ? "text-blue-400 dark:bg-gray-800" : ""
        }`}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaAngleDown className="mx-3" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 text-base font-medium px-3 py-2 block pl-6 transition-color"
                    : "text-base md:text-sm lg:text-base font-light px-3 py-2 block dark:text-gray-300 text-gray-600 pl-6 transition-color"
                }
                end={item.end}
                onClick={() => handleItemClick(item.path)}
              >
                {item.title}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarItem;
