import React from "react";

export default function Tag({ data }) {
  return (
    <div className="bg-gray-600 bg-opacity-80 py-1 px-2 rounded">
      <span className="text-white font-bold">{data}</span>
    </div>
  );
}
