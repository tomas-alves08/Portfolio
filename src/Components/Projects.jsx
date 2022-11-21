import React from "react";

import Img from "./Img";
// import Project from "./ProjectOverlay";
import ProjectCard from "./ProjectCard";
import { projectsArr } from "../projects";

const Projects = ({
  setDisplayOverlay,
  displayOverlay,
  setChosenProjectId,
}) => {
  return (
    <div className="projects-container">
      <div className="project-title-container">
        <Img img="icon-title" src="./icons/projects-icon.png" />
        <p className="section-title">Projects:</p>
      </div>
      {projectsArr.map((project, idx) => {
        const keysArr = [...Object.keys(project)];
        console.log(project);
        return (
          <>
            {/* {!displayOverlay && ( */}
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
            {/* )}
            {displayOverlay && (
              <Project
                id={project.id}
                title={project.title}
                url={project.url}
                github={project.github}
                tech={project.tech}
                img={project.img}
                description={project.description}
                reflections={project.reflections}
                key={idx}
                displayOverlay={displayOverlay}
                setDisplayOverlay={setDisplayOverlay}
              />
            )} */}
          </>
        );
      })}
    </div>
  );
};

export default Projects;
