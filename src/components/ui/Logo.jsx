import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="flex-shrink-0">
      <h1 className="text-2xl font-semibold dark:text-white">
        GROUP<span className="text-blue-400">4</span>
      </h1>
    </Link>
  );
}

export default Logo;