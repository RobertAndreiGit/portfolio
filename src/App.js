import InformationList from "./components/Information/InformationList";
import * as experiences from "./data/experience.json";
import * as education from "./data/education.json";
import Skills from "./components/Skills";
import Info from "./components/Info";
import ProjectsList from "./components/Projects/ProjectsList";

function App() {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        <div className="bg-white flex-2">
          <Info />
        </div>
        <div className="flex-3 flex flex-col">
          <div className="bg-skills flex-1">
            <div className="section">
              <p className="main-text">SKILLS</p>
              <Skills />
            </div>
          </div>
          <div className="bg-experience flex-1">
            <div className="section">
              <p className="main-text">EXPERIENCE</p>
              <InformationList data={experiences.data} />
            </div>
          </div>
          <div className="bg-education flex-1">
            <div className="section">
              <p className="main-text">EDUCATION</p>
              <InformationList data={education.data} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-projects relative">
        <div className="section">
          <p className="main-text">PROJECTS</p>
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}

export default App;
