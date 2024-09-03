import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import SidebarItem from "./SidebarItem";
import { navigationConfig } from "../../data/navigationConfig";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // If sidebar is being opened, make sure the current section is open
    if (!isOpen) {
      const currentSection = navigationConfig.find(section =>
        section.items.some(item => item.path === location.pathname)
      );
      if (currentSection) {
        setOpenItem(currentSection.key);
      }
    }
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleOpenState = (key) => {
    setOpenItem(prevOpenItem => prevOpenItem === key ? null : key);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const openSection = navigationConfig.find(section =>
      section.items.some(item => item.path === currentPath)
    );
    if (openSection) {
      setOpenItem(openSection.key);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="relative h-[calc(100svh-74px)] bg-gray-200 dark:bg-gray-800">
        <motion.div
          className="fixed w-[18rem] h-full bg-gray-200 dark:bg-gray-800 sm:static sm:block"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen || window.innerWidth >= 640 ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        >
          {/* Background overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute z-[-10] w-screen h-screen sm:hidden bg-gray-900 bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.25, ease: "linear" }}
                exit={{ opacity: 0, transition: { delay: 0, duration: 0.1 } }}
                onClick={closeSidebar}
              />
            )}
          </AnimatePresence>

          <nav className="flex flex-col h-full bg-gray-200 dark:bg-gray-800 z-[100]">
            {navigationConfig.map((item) => (
              <SidebarItem
                key={item.key}
                title={item.title}
                items={item.items}
                isOpen={openItem === item.key}
                toggleOpen={() => toggleOpenState(item.key)}
                closeSidebar={closeSidebar}
              />
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Sidebar Toggle Button */}
      <motion.button
        className="absolute bottom-4 px-1 py-2 bg-gray-200 rounded-ee-md rounded-se-md dark:bg-gray-800 sm:hidden"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? 286 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleSidebar}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaAngleRight className="text-xl text-blue-400" />
        </motion.div>
      </motion.button>
    </div>
  );
}

export default Sidebar;
