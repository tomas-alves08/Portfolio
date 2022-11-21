import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <p>TS Dev</p>
      </div>
      <div className="nav-items-container">
        <a className="nav-item" href="#about">
          <p>About</p>
        </a>
        <a className="nav-item" href="#projects">
          <p>Projects</p>
        </a>
        <a className="nav-item" href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Nav;
