import React from "react";

import Img from "./Img";
import Description from "./Description";
import Icons from "./Icons";

const About = () => {
  return (
    <>
      <div id="about"></div>
      <div>
        <Img img="img" container="img-container" src="./tomas-photo.png" />
        <Description />
        <Icons />
      </div>
    </>
  );
};

export default About;
