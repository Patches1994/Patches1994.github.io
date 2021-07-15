import React from "react";
import "./style.css";
import Title from "../Title/title";


const List = (props) => {
  const { order, listTxt, listTitle } = props;
  return (
    <div className="menu-list">
      <div className="menu-title">
        <Title title={listTitle} />
      </div>
      <ul className="menu-ul">
        {order.map((orderValue, key) => (
          <li className="menu-li" key={key}>
            {orderValue} {listTxt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
