import React, { useState } from "react";
import Close from "../img/close.svg";


const Field = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="field"
    >
      {hover && <img className="x-mark" src={Close} />}
    </div>
  );
};

export default Field;
