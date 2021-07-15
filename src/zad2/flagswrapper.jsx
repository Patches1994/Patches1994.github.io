import React from "react";
import Flag from "./flag";
import "./style.scss";



const FlagsWrapper = () => {
  return (
    <div className="flag">
    <div className="flag__container">
      <Flag className="greenland">
        <div className="circle">
          <div className="top-semi-circle"></div>
          <div className="bottom-semi-circle"></div>
        </div>
      </Flag>
      <div className="flag__container-info">
        <div className="flag__container-info-row">15 października</div>
        <div className="flag__container-info-row">eliminacje MŚ 2056</div>
        <div className="flag__container-info-row">wynik meczu</div>
        <div className="flag__container-info-row">0 : 5</div>
      </div>
      <Flag className="greece">
        <div className="square">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        {[...Array(4)].map((e, key) => (
          <div className="line" key={key}></div>
        ))}
      </Flag>
    </div>
  </div>
  );
};
export default FlagsWrapper;
