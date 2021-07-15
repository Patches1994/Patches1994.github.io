import React from "react";
import Title from "../Title/title";


const Article = (props) => {
  const { listTitle, text } = props;
  return (
    <div className="article">
      <Title title={listTitle} />
      {text}
    </div>
  );
};
export default Article;
