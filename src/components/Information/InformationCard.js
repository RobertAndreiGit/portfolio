import React from "react";

export default function InformationCard({ data, alignRight }) {
  return (
    <div className="list-item">
      <div className="list-icon"></div>
      <div
        className={`list-content ${
          alignRight && "lg:float-right lg:text-left"
        }`}
      >
        <p className="inline-block bg-black bg-opacity-10 p-2.5 rounded">{`${data.start} - ${data.end}`}</p>
        <p className="font-title text-3xl uppercase my-2">{data.title}</p>
        <p className="text-xl opacity-90">{data.subtitle}</p>
        <p className="opacity-70">{data.description}</p>
      </div>
    </div>
  );
}
