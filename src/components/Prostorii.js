import React from "react";

import img1 from "../assets/Sliki/Renderi/2.jpg";
import img2 from "../assets/Sliki/Renderi/C1 1.jpg";
import img3 from "../assets/Sliki/Renderi/C1 4.jpg";
import img4 from "../assets/Sliki/Renderi/C2 1.jpg";
import img5 from "../assets/Sliki/Renderi/C3 1.jpg";
import img6 from "../assets/Sliki/Renderi/C3 2.jpg";
import img7 from "../assets/Sliki/Renderi/C3 EXIBITION_1.jpg";
import img8 from "../assets/Sliki/Renderi/HOL KON SEDENJE.jpg";
import img9 from "../assets/Sliki/KITCHEN_03.jpg";

const cards = [
  { img: img1, text: "Brainster" },
  { img: img2, text: "Училница" },
  { img: img3, text: "Канцелариски простор" },
  { img: img4, text: "Училница" },
  { img: img5, text: "Адаптибилна училница" },
  { img: img6, text: "Сала со бина" },
  { img: img7, text: "Конференциска сала" },
  { img: img8, text: "Хол" },
  { img: img9, text: "Space Kitchen" },
];

const Prostorii = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <div className="col-md-12 col-lg-3">
        <h3 className="font-weight-bold display-5">Нашите простории</h3>
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
          {cards.map((card, i) => (
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
