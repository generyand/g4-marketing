import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextPrevButtons = ({ routes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = routes.indexOf(location.pathname);

  const handleNavigation = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < routes.length) {
      navigate(routes[newIndex]);
    }
  };

  return (
    <div className="flex items-center justify-center gap-12 p-4 mt-4 sm:static sm:justify-between">
      <button
        onClick={() => handleNavigation(-1)}
        disabled={currentIndex === 0}
        className="p-3 text-blue-400 transition-all duration-300 rounded-full sm:text-white sm:bg-blue-500 sm:px-4 sm:py-2 sm:rounded sm:disabled:bg-gray-300 disabled:text-gray-500 active:bg-blue-500 active:text-white"
      >
        <p className="hidden sm:block">Previous</p>
        <FaChevronLeft
          disabled={currentIndex === 0}
          className="size-4 sm:hidden disabled:text-gray-500"
        />
      </button>
      <button
        onClick={() => handleNavigation(1)}
        disabled={currentIndex === routes.length - 1}
        className="p-3 text-blue-400 transition-all duration-300 rounded-full sm:text-white sm:bg-blue-500 sm:px-4 sm:py-2 sm:rounded sm:disabled:bg-gray-300 disabled:text-gray-500 active:bg-blue-500 active:text-white"
      >
        <p className="hidden sm:block">Next</p>
        <FaChevronRight
          disabled={currentIndex === routes.length - 1}
          className="size-4 sm:hidden disabled:text-gray-500"
        />
      </button>
    </div>
  );
};

export default NextPrevButtons;
