import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="flex-shrink-0">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/next-gen-logo.svg"
          alt="Next Gen Logo"
          className="w-8 aspect-square"
        />
        <h1 className="text-xl font-semibold sm:text-2xl dark:text-white">
          GROUP<span className="text-blue-400">4</span>
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
