import InformationList from "./components/Information/InformationList";
import  experiences from "./data/experience.json";
import  projects from "./data/projects.json";
import Skills from "./components/Skills";
import Info from "./components/Info";
import ProjectsList from "./components/Projects/ProjectsList";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="w-full">
        <div className="bg-white flex-2">
          <Info />
        </div>
        <div className="transition-all lg:w-6/10 -right-0 lg:ml-40 right-section overflow-visible">
          <div className="bg-skills">
            <div className="section">
              <p className="main-text">SKILLS</p>
              <Skills />
            </div>
          </div>
          <div className="bg-experience">
            <div className="section">
              <p className="main-text">EXPERIENCE</p>
              <InformationList data={experiences.data} />
            </div>
          </div>
          {/* <div className="bg-education">
            <div className="section">
              <p className="main-text">EDUCATION</p>
              <InformationList data={education.data} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-projects relative">
        <div className="section">
          <p className="main-text">PROJECTS</p>
          <ProjectsList data={projects.data} />
        </div>
      </div>
    </div>
  );
}

export default App;
