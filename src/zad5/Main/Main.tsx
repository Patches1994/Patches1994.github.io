import React from "react";
import List from "./components/List/list";
import Container from "./components/Container/container";
import "../style.scss";
import Article from "./components/Article/article";
import Gallery from "./components/Gallery/gallery";
import Login from "./components/Login/login";

const order = [
  "Pierwsza",
  "Druga",
  "Trzecia",
  "Czwarta",
  "Piąta",
];

const Main = () => {
  return (
    <div className="main">
      <Container className="left-side">
        <List order={order} listTxt={"zakładka"} listTitle={"Menu"} />
        <List order={order} listTxt={"aktualność"} listTitle={"Aktualności"} />
      </Container>
      <Container className="mid-side">
        <Article
          listTitle="Wskazówki"
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem harum recusandae incidunt. Rem amet architecto dicta a voluptatibus. Harum beatae aspernatur a consectetur, illum vero odio autem nesciunt rerum sunt. Impedit enim earum sit exercitationem, dolore a tempora minima repellat aliquam iusto, voluptas dolorem sint consectetur ducimus deleniti labore quibusdam blanditiis dolores repudiandae laboriosam laudantium sapiente porro? Illum ipsum sit quae fugit asperiores laborum, reprehenderit libero minus neque sunt consequatur voluptates, explicabo consequuntur dolores! Voluptates quae illum debitis iusto quibusdam vel aperiam in accusantium numquam. Dolorum omnis voluptatibus nemo eveniet perspiciatis officiis repellat veritatis, minima aut distinctio qui dolor atque quam quod hic. Labore, quisquam perspiciatis! Deserunt praesentium sequi atque animi vel officia voluptatibus magni odit accusamus reiciendis? Doloribus officia exercitationem harum quis nesciunt recusandae error praesentium non voluptatum ad facilis autem quasi commodi aliquam, qui veritatis fugiat consequuntur enim dolore eos distinctio repellendus perferendis et? Consequatur, ipsum eligendi?"
          }
        />
        <Article
          listTitle="Drugi nagłówek"
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem harum recusandae incidunt. Rem amet architecto dicta a voluptatibus. Harum beatae aspernatur a consectetur, illum vero odio autem nesciunt rerum sunt. Impedit enim earum sit exercitationem, dolore a tempora minima repellat aliquam iusto, voluptas dolorem sint consectetur ducimus deleniti labore quibusdam blanditiis dolores repudiandae laboriosam laudantium sapiente porro? Illum ipsum sit quae fugit asperiores laborum, reprehenderit libero minus neque sunt consequatur voluptates, explicabo consequuntur dolores! Voluptates quae illum debitis iusto quibusdam vel aperiam in accusantium numquam. Dolorum omnis voluptatibus nemo eveniet perspiciatis officiis repellat veritatis, minima aut distinctio qui dolor atque quam quod hic. Labore, quisquam perspiciatis! Deserunt praesentium sequi atque animi vel officia voluptatibus magni odit accusamus reiciendis? Doloribus officia exercitationem harum quis nesciunt recusandae error praesentium non voluptatum ad facilis autem quasi commodi aliquam, qui veritatis fugiat consequuntur enim dolore eos distinctio repellendus perferendis et? Consequatur, ipsum eligendi?"
          }
        />
      </Container>
      <Container className="right-side">
        <Gallery listTitle="Galeria" />
        <Login listTitle="Zaloguj się" />
      </Container>
    </div>
  );
};

export default Main;
