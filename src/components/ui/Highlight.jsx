import React from "react";

function Highlight({ children }) {
  return <span className="font-bold text-blue-500 dark:text-blue-400">{children}</span>;
}

export default Highlight;
