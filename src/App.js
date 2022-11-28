import React, { useState, useEffect } from "react";
import "./App.css";
import { projectsArr } from "./projects";

import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ProjectOverlay from "./Components/ProjectOverlay";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const [chosenProjectId, setChosenProjectId] = useState(1);
  const [chosenProject, setChosenProject] = useState(projectsArr[0]);

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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
