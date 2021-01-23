import React from "react";
import { nastani_cards } from "../lib/cards";

import Karticka from "../components/Karticka";

const Nastani = () => {
  return (
    <div className="row mt-5 pt-4 " id="nastani">
      <h2 className="col-12 mb-3 text-center display-4 font-weight-bold">
        Настани
      </h2>
      {nastani_cards.map((item) => (
        <Karticka
          key={item.title}
          img={item.img}
          title={item.title}
          text={item.text}
        />
      ))}
      <div className="col-12 d-flex justify-content-center justify-content-lg-end">
        <button className="btn-custom">КАЛЕНДАР НА НАСТАНИ</button>
      </div>
    </div>
  );
};

export default Nastani;
