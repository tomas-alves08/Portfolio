import React from "react";
import Img from "./Img";

const ProjectOverlay = ({
  chosenProject,
  setDisplayOverlay,
  displayOverlay,
  // id,
}) => {
  console.log("Overlay Project: ", chosenProject);

  const { id, title, url, github, description, img, tech, reflections } =
    chosenProject;

  //FUNCTIONS
  const handleClick = (e) => {
    setDisplayOverlay(!displayOverlay);
    if (!displayOverlay) console.log(e.target.id);
  };

  const handleClickOutside = (e) => {
    console.log(e.target.className);
    if (e.target.className === "overlay-page-container") {
      setDisplayOverlay(false);
    }
  };

  return (
    <div
      className={displayOverlay ? "overlay-page-container" : null}
      onClick={handleClickOutside}
    >
      <div className="overlay-project-container">
        <p className="project-title">{title}</p>

        <Img img="project-img" src={img} />

        <p className="project-subtitle">
          Tech Tools:
          <div>
            <span className="project-span"> {tech.join(", ")}.</span>
          </div>
        </p>

        <p className="project-subtitle">
          Description:
          <div className="project-scroll">
            <span className="project-span"> {description}</span>
          </div>
        </p>

        <p className="project-subtitle">Reflections:</p>
        <div className="project-scroll">
          <ol className="project-list-container">
            {reflections.map((reflection, idx) => {
              return (
                <li className="project-span" key={idx}>
                  {reflection}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="project-icons-container">
          <a href={url}>
            <Img img="project-icon" src="./icons/url-icon.png" />
          </a>

          <a href={github}>
            <Img img="project-icon" src="./icons/github-icon.png" />
          </a>

          <button id={id} onClick={handleClick} className="project-btn">
            {displayOverlay ? "Close" : "Project Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlay;
