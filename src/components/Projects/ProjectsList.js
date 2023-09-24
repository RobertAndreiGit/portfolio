import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsList({ data }) {
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {data.map((elem, index) => (
        <ProjectCard data={elem} key={index} />
      ))}
    </div>
  );
}
