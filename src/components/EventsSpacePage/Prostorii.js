import React from "react";
import Fade from "react-reveal";

import { events_cards } from "../../lib/cards";
import LazyImage from "../LazyImage/LazyImage";

const Prostorii = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <Fade left duration={1000} distance="30px">
        <div className="col-md-12 col-lg-3">
          <p className="block-title">Нашите простории</p>
          <p>
            Комплетно адаптибилни. Една сала за 150 учесници или три помали сали
            за групи од по 50 учесника. Училници за од 25 до 40 учесника. Избор
            од две локации. <br />
            <br /> Пулт за прием. И најважното место за networking-Brainster
            Kitchen. <br /> <br /> Како го замислувате вашиот следен настан?
          </p>
        </div>
      </Fade>
      <div className="col-md-12 col-lg">
        <div className="row">
          <Fade right duration={1000} distance="30px">
            {events_cards.map((card, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-4  blog-img img-events-space "
              >
                <LazyImage src={card.img} alt="event-space-img" />
                <p className="p-0">{card.text}</p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Prostorii;
