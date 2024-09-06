import React, { useState, useEffect } from "react";
import { LuPanelLeftOpen } from "react-icons/lu";
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
      const currentSection = navigationConfig.find((section) =>
        section.items.some((item) => item.path === location.pathname)
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
    setOpenItem((prevOpenItem) => (prevOpenItem === key ? null : key));
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const openSection = navigationConfig.find((section) =>
      section.items.some((item) => item.path === currentPath)
    );
    if (openSection) {
      setOpenItem(openSection.key);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-[64px] sm:top-[74px] left-0 bottom-0 w-[18rem] sm:w-[16rem] bg-gray-200 dark:bg-gray-800 z-50 sm:z-30"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen || window.innerWidth >= 640 ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full overflow-y-auto">
          <nav className="flex flex-col h-full">
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
        </div>
      </motion.div>

      {/* Sidebar Toggle Button */}
      <motion.button
        className="fixed left-0 z-40 px-1 py-2 bg-gray-200 bottom-12 z-60 rounded-ee-md rounded-se-md dark:bg-gray-800 sm:hidden"
        style={{ boxShadow: !isOpen && "2px 2px 2px 0 rgba(25, 25, 25, 0.15)" }}
        initial={{ x: 0 }}
        animate={{ x: isOpen ? 286 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleSidebar}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <LuPanelLeftOpen className="text-xl text-blue-400" />
        </motion.div>
      </motion.button>
    </>
  );
}

export default Sidebar;
