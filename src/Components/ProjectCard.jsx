import React from "react";
import Img from "./Img";

const ProjectCard = ({
  title,
  url,
  github,
  img,
  setDisplayOverlay,
  displayOverlay,
  id,
  setChosenProjectId,
}) => {
  const handleClick = (e) => {
    setDisplayOverlay(!displayOverlay);
    if (!displayOverlay) console.log(e.target.id);
    if (!displayOverlay) setChosenProjectId(e.target.id);
  };

  return (
    <div className="project-container">
      <p
        onClick={!displayOverlay ? () => setDisplayOverlay(true) : null}
        className={`project-title ${!displayOverlay && "cursor"}`}
      >
        {title}
      </p>
      <Img img="project-img" src={img} />

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
  );
};

export default ProjectCard;
