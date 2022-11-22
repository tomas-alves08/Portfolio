import React from "react";

import Img from "./Img";
import ProjectCard from "./ProjectCard";
import { projectsArr } from "../projects";

const Projects = ({
  setDisplayOverlay,
  displayOverlay,
  setChosenProjectId,
}) => {
  return (
    <>
      <div id="projects"></div>
      <div className="projects-container">
        <div className="title-container">
          <Img img="icon-title" src="./icons/projects-icon.png" />
          <p className="section-title">Projects:</p>
        </div>
        <div className="projects-card-container">
          {projectsArr.map((project, idx) => {
            const keysArr = [...Object.keys(project)];
            console.log(project);
            return (
              <>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  url={project.url}
                  github={project.github}
                  img={project.img}
                  key={idx}
                  displayOverlay={displayOverlay}
                  setDisplayOverlay={setDisplayOverlay}
                  setChosenProjectId={setChosenProjectId}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
