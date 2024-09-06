import React from "react";

const GlowingBlob = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute right-[-4rem] top-[-10rem] w-56 h-80 bg-blue-500 rounded-full sm:right-0 lg:right-32 md:top-[-6rem] -translate-y-1/4 translate-x-1/4 opacity-35 blur-3xl animate-blob-move"></div>
      <div className="absolute bottom-[-4rem] left-[-8rem] w-56 h-80 bg-blue-500 rounded-full sm:left-40 sm:bottom-0 translate-y-1/4 -translate-x-1/4 opacity-35 blur-3xl animate-blob-move-delayed"></div>
    </div>
  );
};

export default GlowingBlob;
