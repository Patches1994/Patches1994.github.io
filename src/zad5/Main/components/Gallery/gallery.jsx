import React from "react";
import Title from "../Title/title";
import Thumbnail from "../../../../img/thumbnail.jpg";



const Gallery = (props) => {
  const { listTitle } = props;
  return (
    <div className="gallery">
      <Title title={listTitle} />
      {[...Array(12)].map((e, key) => (
        <img src={Thumbnail} key={key} />
      ))}
    </div>
  );
};

export default Gallery;
