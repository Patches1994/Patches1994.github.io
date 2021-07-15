import React from "react";
import "../style.scss";
import Img from "../Img/img";

const Header = (props) => {
  const { title, logoSrc, logoAlt } = props;
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <a href="https://www.onet.pl/">Moje konto</a>
          </li>
          <li>
            <a href="https://www.wp.pl/">Moja galeria</a>
          </li>
          <li>Moi znajomi</li>
        </ul>
      </div>
      <div className="header">
        <div className="header__logo">
          <Img src={logoSrc} alt={logoAlt} />
        </div>
        <div className="header__title">{title}</div>
      </div>
    </>
  );
};

export default Header;
