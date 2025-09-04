import React from "react";

export default function Tag({ data, hasProjectLink = true }) {
  return (
    <div className={`py-1 px-2 rounded transition-all duration-300 ease-out cursor-default ${
      hasProjectLink 
        ? 'bg-gray-600 bg-opacity-80 hover:bg-blue-600 hover:bg-opacity-90 hover:shadow-md' 
        : 'bg-gray-500 bg-opacity-70 hover:bg-gray-600 hover:bg-opacity-80'
    }`}>
      <span className="text-white font-bold text-sm">{data}</span>
    </div>
  );
}
