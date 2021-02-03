import React, { useState } from "react";
import image from "../../../assets/Sliki/Za_Nas/coworking.jpg";

import "./coworking.css";

const Coworking = () => {
  const [toogleTooltip, setToogleTooltip] = useState(false);

  return (
    <div
      className="row mt-5 pt-4 align-items-center flex-lg-row-reverse"
      id="coworking"
    >
      <div className="col-md-12 col-lg-5 ">
        <span className="badge badge-pill badge-warning p-2">SOLD OUT</span>
        <h3 className="block-title line_through">Coworking</h3>
        <p className="line_through">
          Биди дел од заедницата на иноватори, креативци и претприемачи.
          Резевирај стол во нашата shared office. Пичјго твојот бизнис и нашиот
          тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.
        </p>
        <div className="col-12 p-0 mb-4 pt-3 pb-3 pb-lg-0">
          <button
            onClick={() => setToogleTooltip(!toogleTooltip)}
            className="btn-custom  line_through tooltip-btn"
          >
            РЕЗЕРВИРАЈ МЕСТО
            <span
              className={toogleTooltip ? "tooltip-visible" : "tooltip-hidden"}
            >
              Местата се распродадени
            </span>
          </button>{" "}
        </div>
      </div>
      <div className="col-md-12 col-lg-7 blog-img">
        <img src={image} alt="edukacija-img" />
      </div>
    </div>
  );
};

export default Coworking;
