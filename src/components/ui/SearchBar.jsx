import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { searchTopics } from "../../utils/search";
import { searchData } from "../../data/searchData";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const searchResults = searchTopics(value, searchData);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleResultClick = (path) => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
      </div>
      {isOpen && results.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border rounded-md shadow-lg max-h-60 dark:bg-gray-800 dark:border-gray-700">
          {results.map((result, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleResultClick(result.path)}
            >
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;