import React from "react";
import * as data from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-3">
      {data.data.map((elem, index) => (
        <ProjectCard data={elem} key={index} />
      ))}
    </div>
  );
}
