import React, { useState } from "react";
import Img from "./Img";

const ProjectOverlay = ({
  chosenProject,
  setDisplayOverlay,
  displayOverlay,
  // id,
}) => {
  const [shortDescription, setShortDescription] = useState(true);
  const [shortReflection, setShortReflection] = useState(true);

  let { id, title, url, github, description, img, tech, reflections } =
    chosenProject;

  if (shortDescription) description = description.slice(0, 100) + "...";
  if (shortReflection) {
    reflections = reflections.join(". ").slice(0, 100) + "...";
    reflections = [reflections];
  }

  //FUNCTIONS
  const handleClick = (e) => {
    setDisplayOverlay(!displayOverlay);
  };

  const handleClickOutside = (e) => {
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
            <span
              style={{ color: "purple", fontSize: "15px" }}
              onClick={() => setShortDescription(!shortDescription)}
            >
              {shortDescription ? " show more" : " show less"}
            </span>
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
            <span
              style={{
                color: "purple",
                fontStyle: "italic",
                fontWeight: "600",
                fontSize: "15px",
              }}
              onClick={() => setShortReflection(!shortReflection)}
            >
              {shortReflection ? " show more" : " show less"}
            </span>
          </ol>
        </div>

        <div className="project-icons-container">
          <div className="project-icon-subcontainer">
            <a href={url}>
              <Img img="project-icon" src="./icons/url-icon.png" />
            </a>
            <p className="project-icon-description">Page Url</p>
          </div>
          <div className="project-icon-subcontainer">
            <a href={github}>
              <Img img="project-icon" src="./icons/github-icon.png" />
            </a>
            <p className="project-icon-description">GitHub</p>
          </div>

          <button id={id} onClick={handleClick} className="project-btn">
            {displayOverlay ? "Close" : "Project Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlay;
