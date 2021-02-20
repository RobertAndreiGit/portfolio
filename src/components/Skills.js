import React from "react";
import { ReactComponent as Cpp } from "../assets/cpp.svg";
import { ReactComponent as Csharp } from "../assets/csharp.svg";
import { ReactComponent as Css3 } from "../assets/css3.svg";
import { ReactComponent as Dotnet } from "../assets/dotnet.svg";
import { ReactComponent as Electron } from "../assets/electron.svg";
import { ReactComponent as Git } from "../assets/git.svg";
import { ReactComponent as Heroku } from "../assets/heroku.svg";
import { ReactComponent as Html5 } from "../assets/html5.svg";
import { ReactComponent as Java } from "../assets/java.svg";
import { ReactComponent as Javascript } from "../assets/js.svg";
import { ReactComponent as Materialui } from "../assets/materialui.svg";
import { ReactComponent as Mongodb } from "../assets/mongodb.svg";
import { ReactComponent as Python } from "../assets/python.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as Sass } from "../assets/sass.svg";
import { ReactComponent as Tailwindcss } from "../assets/tailwindcss.svg";
import { ReactComponent as Typescript } from "../assets/ts.svg";

export default function Skills() {
  return (
    <div className="flex flex-row flex-wrap">
      <Javascript className="skill-icon" />
      <ReactIcon className="skill-icon" />
      <Css3 className="skill-icon" />
      <Tailwindcss className="skill-icon" />
      <Sass className="skill-icon" />
      <Html5 className="skill-icon" />
      <Typescript className="skill-icon" />
      <Git className="skill-icon" />

      <Materialui className="skill-icon" />
      <Heroku className="skill-icon" />
      <Electron className="skill-icon" />
      <Java className="skill-icon" />
      <Python className="skill-icon" />
      <Mongodb className="skill-icon" />
      <Csharp className="skill-icon" />
      <Dotnet className="skill-icon" />
      <Cpp className="skill-icon" />
    </div>
  );
}
