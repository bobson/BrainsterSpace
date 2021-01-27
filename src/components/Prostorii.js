import React from "react";

import { events_cards } from "../lib/cards";

const Prostorii = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <div className="col-md-12 col-lg-3">
        <h3 className="font-weight-bold block-title">Нашите простории</h3>
        <p>
          Комплетно адаптибилни. Една сала за 150 учесници или три помали сали
          за групи од по 50 учесника. Училници за од 25 до 40 учесника. Избор од
          две локации. <br />
          <br /> Пулт за прием. И најважното место за networking-Brainster
          Kitchen. <br /> <br /> Како го замислувате вашиот следен настан?
        </p>
      </div>
      <div className="col-md-12 col-lg">
        <div className="row">
          {events_cards.map((card, i) => (
            <div key={i} className="col-md-6 col-lg-4 img-events-space">
              <img src={card.img} alt="block-img" />
              <p className="mt-1">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prostorii;
