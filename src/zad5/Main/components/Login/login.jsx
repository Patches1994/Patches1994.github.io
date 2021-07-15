import React from "react";
import Title from "../Title/title";
import "../../../style.scss";


const Login = props => {
  const { listTitle } = props;

  return (
    <div className="login">
      <Title title={listTitle} />
      <div className="login__input-container">
        Login: <input />
      </div>
      <div className="login__input-container">
        Hasło: <input />
      </div>
      <div className="login__button-container">
        <button>zaloguj sie</button>
      </div>
    </div>
  );
};

export default Login;
