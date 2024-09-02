import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sevenPsOpen, setSevenPsOpen] = useState(false);
  const [keyTerminologiesOpen, setKeyTerminologiesOpen] = useState(false);
  const [brandingOpen, setBrandingOpen] = useState(false);
  const [marketingResearchOpen, setMarketingResearchOpen] = useState(false);

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
          className={`fixed w-64 h-full bg-gray-200 dark:bg-gray-800 sm:static sm:block transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-[-100%]"
          } sm:translate-x-0`}
        >
          {/* This is the background that is used to close the sidebar */}
          <div
            className={`absolute z-[-10] w-screen h-screen sm:hidden bg-gray-900 bg-opacity-50 z-100 transition-transform duration-300 ${
              isOpen
                ? "translate-x-64 opacity-100"
                : "translate-x-[-100%] opacity-0"
            }`}
            onClick={closeSidebar}
          />
          <nav className="flex flex-col h-full bg-gray-200 dark:bg-gray-800 z-[100]">
            <div>
              <button
                onClick={() => setKeyTerminologiesOpen(!keyTerminologiesOpen)}
                className="flex items-center justify-between w-full px-2 py-3 text-lg font-medium"
              >
                Key Terminologies
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    keyTerminologiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {keyTerminologiesOpen && (
                <div className="ml-4">
                  <NavLink
                    to="/key-terminologies"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                    end
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    to="/key-terminologies/basic-terms"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                  >
                    Basic Terms
                  </NavLink>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setSevenPsOpen(!sevenPsOpen)}
                className="flex items-center justify-between w-full px-2 py-3 text-lg font-medium"
              >
                The 7P's of Marketing
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    sevenPsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {sevenPsOpen && (
                <div className="ml-4">
                  <NavLink
                    to="/7ps-of-marketing"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                    end
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    to="/7ps-of-marketing/product"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                  >
                    Product
                  </NavLink>
                  <NavLink
                    to="/7ps-of-marketing/price"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                  >
                    Price
                  </NavLink>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setBrandingOpen(!brandingOpen)}
                className="flex items-center justify-between w-full px-2 py-3 text-lg font-medium"
              >
                Branding
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    brandingOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {brandingOpen && (
                <div className="ml-4">
                  <NavLink
                    to="/branding"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                    end
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    to="/branding/brand-identity"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                  >
                    Brand Identity
                  </NavLink>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setMarketingResearchOpen(!marketingResearchOpen)}
                className="flex items-center justify-between w-full px-2 py-3 text-lg font-medium"
              >
                Marketing Research
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    marketingResearchOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {marketingResearchOpen && (
                <div className="ml-4">
                  <NavLink
                    to="/marketing-research"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                    end
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    to="/marketing-research/market-analysis"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-500 text-base font-medium text-white px-2 py-2 block"
                        : "text-base font-medium px-2 py-2 block"
                    }
                  >
                    Market Analysis
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        className={`absolute rounded-ee-md rounded-se-md bottom-4 transform py-2 px-1 bg-gray-200 dark:bg-gray-800 border-gray-400 sm:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-64" : "translate-x-0"
        } sm:translate-x-0`}
        onClick={toggleSidebar}
      >
        <FaAngleRight
          className={`text-xl text-blue-400 transition-transform duration-300 ${
            isOpen && "rotate-180"
          }`}
        />
      </button>
    </div>
  );
}

export default Sidebar;
