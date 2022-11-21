import React from "react";

const Img = ({ container, img, src }) => {
  return (
    <div className={container}>
      <img className={img} src={src} alt="Tomas photo" />
    </div>
  );
};

export default Img;
