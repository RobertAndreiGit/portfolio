import React from "react";
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
import { ReactComponent as NextJS } from "../assets/nextjs.svg";
import { ReactComponent as AWS } from "../assets/aws.svg";
import { ReactComponent as Postgresql } from "../assets/postgresql.svg";
import { ReactComponent as Jenkins } from "../assets/jenkins.svg";
import { ReactComponent as Datadog } from "../assets/datadog.svg";
import { ReactComponent as Jest } from "../assets/jest.svg";
import { ReactComponent as ReactTestingLibrary } from "../assets/testing-library-seeklogo.svg";
import { ReactComponent as Postman } from "../assets/postman-icon.svg";
import { ReactComponent as Apexcharts } from "../assets/apexcharts.svg";

export default function Skills() {
  return (
    <div className="flex flex-row flex-wrap">
      <Javascript className="skill-icon" />
      <Typescript className="skill-icon" />
      <ReactIcon className="skill-icon" />
      <NextJS className="skill-icon" />
      <Materialui className="skill-icon" />
      <Apexcharts className="skill-icon" />
      <Electron className="skill-icon" />
      <Jest className="skill-icon" />
      <ReactTestingLibrary className="skill-icon" />
      <Css3 className="skill-icon" />
      <Tailwindcss className="skill-icon" />
      <Sass className="skill-icon" />
      <Html5 className="skill-icon" />
      <AWS className="skill-icon" />
      <Datadog className="skill-icon" />
      <Jenkins className="skill-icon" />
      <Postgresql className="skill-icon" />
      <Git className="skill-icon" />
      <Postman className="skill-icon" />
      <Heroku className="skill-icon" />
      <Java className="skill-icon" />
      <Python className="skill-icon" />
      <Mongodb className="skill-icon" />
      <Csharp className="skill-icon" />
      <Dotnet className="skill-icon" />
    </div>
  );
}
