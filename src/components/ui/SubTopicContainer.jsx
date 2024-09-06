import React from "react";

const SubTopicContainer = ({ children }) => {
  return (
    <div className="p-4 sm:p-8 lg:p-12 sm:text-lg md:text-2xl">
      {children}
    </div>
  );
};

export default SubTopicContainer;