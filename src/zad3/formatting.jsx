import React from "react";
import "./styles.css";


const Formatting = () => {
  return (
    <div className="formatting">
      <div className="container">
        <div className="formatting-title main-title">
          <span>Programista</span>
        </div>
        <div className="row">
          <span className="first-word">Po </span>skompilowaniu progsa wciąż
          testuje. Jeśli błędów nie ma – tester go przejmuje. Człowiek ten wciąż
          sprawdza jak działa , wygląda. Ja wszelkich sugestii od tych ludzi
          żądam!
        </div>
        <div className="row">
          <span className="first-word">Jam </span>jest Ojcem dzieła które
          programuje! Musi działać dobrze – tego oczekuje. Nie po to wciąż
          siedzę dziesięć godzin dziennie, Byś mógł dostać bubel – aż ci mina
          zrzędnie!
        </div>
        <div className="row">
          <span className="first-word">Każdą </span>linię źródła bardzo dobrze
          znam! Jak są jakieś błędy to je poprawiam. Zanim wyślę program, czasu
          mija wiele, Bywa tak, że piszę nawet i w niedzielę.
        </div>
      </div>
    </div>
  );
};

export default Formatting;
