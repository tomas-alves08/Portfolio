import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ProjectOverlay from "./Components/ProjectOverlay";
import { projectsArr } from "./projects";

function App() {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const [chosenProjectId, setChosenProjectId] = useState(1);
  const [chosenProject, setChosenProject] = useState(projectsArr[0]);
  console.log("Chosen ID: ", chosenProjectId);
  console.log("Chosen Project: ", chosenProject);

  useEffect(() => {
    projectsArr.find((el) => {
      if (el.id === chosenProjectId) setChosenProject(el);
    });
  }, [chosenProjectId]);

  return (
    <>
      <Nav />
      <About />
      <Projects
        displayOverlay={displayOverlay}
        setDisplayOverlay={setDisplayOverlay}
        setChosenProjectId={setChosenProjectId}
      />
      {chosenProject && displayOverlay && (
        <ProjectOverlay
          // id={chosenProjectId}
          displayOverlay={displayOverlay}
          setDisplayOverlay={setDisplayOverlay}
          chosenProject={chosenProject}
        />
      )}
    </>
  );
}

export default App;
