import React from "react";
import Tag from "./Tag";

export default function ProjectCard({ data }) {
  return (
    <div
      style={{
        backgroundImage: `url(${data.image})`,
      }}
      className="w-full h-60 bg-no-repeat bg-cover bg-center text-center"
    >
      <div className="opacity-0 p-6 h-full w-full hover:opacity-100 flex items-center flex-col justify-around bg-blue-500 bg-opacity-70">
        <p className="font-title text-3xl">{data.name}</p>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {data.tags.map((tag, index) => (
            <Tag data={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
