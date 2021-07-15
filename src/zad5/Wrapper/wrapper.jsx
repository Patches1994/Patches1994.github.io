import React from "react";
import "../style.scss";
import Header from "./../Header/header";
import Flag from "../../img/eu_flag.jpg";
import { Footer } from "./../Footer/footer";
import Main from "../Main/Main";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Header
          title="Projektowanie stron WWW"
          logoAlt="EU flag"
          logoSrc={Flag}
        />
        <Main />
        <Footer footerTxt="Mateusz Śniegula" />
      </div>
    </div>
  );
};

export default Wrapper;
