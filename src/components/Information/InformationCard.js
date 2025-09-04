import React from "react";

export default function InformationCard({ data, alignRight }) {
  return (
    <div className="list-item">
      <div className="list-icon"></div>
      <div
        className={`list-content ${
          alignRight ? "lg:float-right lg:text-left" : ""
        }`}
      >
        <p className="inline-block bg-black bg-opacity-10 p-2.5 rounded">{`${data.start ? data.start + ' - ' : ''}  ${data.end}`}</p>
        <p className="font-title text-3xl uppercase my-2">{data.title}</p>
        <p className="text-xl opacity-90">{data.subtitle}</p>
        {Array.isArray(data.description) ? (
          <ul className="list-disc pl-6 opacity-70 space-y-1 mt-2">
            {data.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="opacity-70">{data.description}</p>
        )}
      </div>
    </div>
  );
}
