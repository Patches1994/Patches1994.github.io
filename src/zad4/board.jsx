import React from "react";
import "./style.css"
import Field from "./field";


const Board = () => {
  return (
    <div className="board">
      {[...Array(9)].map((e, i) => (
        <Field />
      ))}
    </div>
  );
};

export default Board;
