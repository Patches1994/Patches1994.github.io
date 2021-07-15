import React from "react";


export const Footer = (props) => {
  const { footerTxt } = props;
  return <div className="footer">{footerTxt}</div>;
};
