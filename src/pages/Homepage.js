import React from "react";
import Coworking from "../components/Coworking";
import Nastani from "../components/Nastani";
import Block from "../components/Block";
import ZaNas from "../components/ZaNas";
import { blockContext } from "../lib/cards";

// import edukacija_img from "../assets/Sliki/Za_Nas";

// console.log(text.events_space_1);

const Homepage = () => {
  return (
    <>
      <div className="title mb-5">
        <h1 className="text-center display-3">
          Центар за Учење, Кариера и Иновација
        </h1>
      </div>
      <ZaNas />
      <Block
        col="5"
        title="Едукација"
        text={blockContext.edukacija}
        btnText={["АКАДЕМИИ", "KОМПАНИИ"]}
        img={blockContext.edukacija_img}
      />
      <Nastani />
      <Coworking />
      <Block
        col="5"
        title="Простор за настани"
        text={blockContext.events_space_1}
        btnText={["ВИДИ ГО ПРОСТОРОТ"]}
        img={blockContext.events_space_img}
      />
    </>
  );
};

export default Homepage;
