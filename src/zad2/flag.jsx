import React from "react";
import "./style.scss";


const Flag = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

export default Flag;
