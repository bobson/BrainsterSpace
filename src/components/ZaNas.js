import React from "react";
import Karticka from "./Karticka";
import { za_nas_cards } from "../lib/cards";
import { Link } from "react-router-dom";

const ZaNas = () => {
  return (
    <div className="row mt-5 4" id="za-nas">
      <h2 className="col-12 mb-3 text-center display-4 font-weight-bold">
        За Нас
      </h2>
      {za_nas_cards.map((item) => (
        <Karticka
          key={item.title}
          img={item.img}
          title={item.title}
          text={item.text}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default ZaNas;
