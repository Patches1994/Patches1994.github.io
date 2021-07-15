import React from "react";
import "./App.css";
import Wrapper from "./zad5/Wrapper/wrapper";
import BoardWrapper from "./zad4/boardwrapper";
import Formatting from "./zad3/formatting";
import TableWrapper from "./zad1/tablewrapper";
import FlagsWrapper from "./zad2/flagswrapper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ul className="wrapper-navigation">
        <li>
          <Link to="/studia/zadanie1">Zadanie 1</Link>
        </li>
        <li>
          <Link to="/studia/zadanie2">Zadanie 2</Link>
        </li>
        <li>
          <Link to="/studia/zadanie3">Zadanie 3</Link>
        </li>
        <li>
          <Link to="/studia/zadanie4">Zadanie 4</Link>
        </li>
        <li>
          <Link to="/studia/zadanie5">Zadanie 5</Link>
        </li>
      </ul>
      <Route exact component={TableWrapper} path="/studia/zadanie1" />
      <Route exact component={FlagsWrapper} path="/studia/zadanie2" />
      <Route exact component={Formatting} path="/studia/zadanie3" />
      <Route exact component={BoardWrapper} path="/studia/zadanie4" />
      <Route exact component={Wrapper} path="/studia/zadanie5" />
    </Router>
  );
};

export default App;
