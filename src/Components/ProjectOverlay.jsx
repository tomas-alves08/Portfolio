import React, { useEffect } from "react";
import Img from "./Img";
import { projectsArr } from "../projects";

const ProjectOverlay = ({
  // title = null,
  // url = null,
  // github = null,
  // description = null,
  // img = null,
  // tech = null,
  // reflections = null,
  chosenProject,
  setDisplayOverlay,
  displayOverlay,
  // id,
}) => {
  console.log("Overlay Project: ", chosenProject);

  const { id, title, url, github, description, img, tech, reflections } =
    chosenProject;

  console.log(id, title, url, github, description, img, tech, reflections);
  // let clickedProject;
  // let title = null;
  // let url = null;
  // let github = null;
  // let description = null;
  // let img = null;
  // let tech = null;
  // let reflections = null;

  //Functions
  const handleClickOutside = (e) => {
    console.log(e.target.className);
    if (e.target.className === "overlay-page-container") {
      setDisplayOverlay(false);
    }
  };

  const handleClick = (e) => {
    setDisplayOverlay(!displayOverlay);
    if (!displayOverlay) console.log(e.target.id);
  };

  //   let description, tech, reflections;

  // if (displayOverlay) {
  //   title = clickedProject.title;
  //   url = clickedProject.url;
  //   github = clickedProject.github;
  //   description = clickedProject.description;
  //   img = clickedProject.img;
  //   tech = clickedProject.tech;
  //   reflections = clickedProject.reflections;
  // }

  // useEffect(() => {
  //   clickedProject = projectsArr.find((el) => {
  //     console.log(el);
  //     el.id === id;
  //   });
  //   console.log("clicked project", clickedProject);
  // console.log(Object.values(clickedProject));
  // title = clickedProject.title;
  // url = clickedProject.url;
  // github = clickedProject.github;
  // description = clickedProject.description;
  // img = clickedProject.img;
  // tech = clickedProject.tech;
  // reflections = clickedProject.reflections;
  // console.log(title, url, github, description, img, tech, reflections);
  // }, []);

  return (
    <div
      className={displayOverlay ? "overlay-page-container" : null}
      onClick={handleClickOutside}
    >
      <div
        className={
          displayOverlay ? "overlay-project-container" : "project-container"
        }
      >
        {title !== null && (
          <p
            onClick={!displayOverlay ? () => setDisplayOverlay(true) : null}
            className={`project-title ${!displayOverlay && "cursor"}`}
          >
            {title}
          </p>
        )}

        {img !== null && <Img img="project-img" src={img} />}

        {tech !== null && (
          <>
            <p className="project-subtitle">
              Tech Tools:
              <div>
                <span className="project-span"> {tech.join(", ")}.</span>
              </div>
            </p>
          </>
        )}

        {description !== null && (
          <>
            <p className="project-subtitle">
              Description:
              <div className="project-scroll">
                <span className="project-span"> {description}</span>
              </div>
            </p>
          </>
        )}

        {reflections !== null && (
          <>
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
          </>
        )}

        <div className="project-icons-container">
          {url !== null && (
            <a href={url}>
              <Img img="project-icon" src="./icons/url-icon.png" />
            </a>
          )}
          {github !== null && (
            <a href={github}>
              <Img img="project-icon" src="./icons/github-icon.png" />
            </a>
          )}
          <button id={id} onClick={handleClick} className="project-btn">
            {displayOverlay ? "Close" : "Project Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlay;
