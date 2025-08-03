import React from "react";
import InformationCard from "./InformationCard";

export default function InformationList({ data }) {
  return (
    <div className="list-data relative">
      {data.map((elem, index) => (
        <InformationCard key={index} data={elem} alignRight={index % 2 === 0} />
      ))}
    </div>
  );
}
