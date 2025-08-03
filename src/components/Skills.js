import React from "react";
import skills from "../data/skills.json";

export default function Skills() {
  return (
    <div className="flex flex-col gap-8 py-4">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-bold text-lg mb-3 pb-1">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {items.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
