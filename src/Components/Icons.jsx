import React, { useState, useEffect } from "react";

import Img from "./Img";
import { iconsArr } from "../icons";

const Icons = () => {
  const [index, setIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (index === iconsArr.length - 9) return setIndex(0);
    return setIndex(index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => carouselInfiniteScroll(), 500);
    return () => clearInterval(interval);
  });

  return (
    <div className="icons-container">
      <div className="title-container">
        <Img img="icon-title" src="./icons/tools-icon.png" />
        <p className="section-title">Tools and Frameworks:</p>
      </div>
      <div className="carousel-container">
        {iconsArr.map((icon, i) => {
          return (
            <div
              className="icon"
              style={{ transform: `translate(-${index * 100}%)` }}
              key={i}
            >
              <Img img="icon" src={icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Icons;
