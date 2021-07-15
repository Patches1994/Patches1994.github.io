import React from "react";


const Img = (props) => {
  const { src, alt, className } = props;
  return <img className={className} src={src} alt={alt} />;
};

export default Img;
