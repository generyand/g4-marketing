import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SidebarItem = ({ title, items, isOpen, toggleOpen }) => (
  <div className="overflow-hidden">
    <button
      onClick={toggleOpen}
      className="flex items-center justify-between w-full p-3 text-lg font-medium"
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
                  ? "bg-blue-500 text-base font-medium text-white px-3 py-2 block pl-6"
                  : "text-base font-light px-3 py-2 block dark:text-gray-300 text-gray-600 pl-6"
              }
              end={item.end}
            >
              {item.title}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default SidebarItem;
