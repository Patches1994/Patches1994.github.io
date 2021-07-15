import React from "react";
import "./style.css";


const Title = (props) => {
  const { title } = props;
  return <div className="component-title">{title}</div>;
};

export default Title;
