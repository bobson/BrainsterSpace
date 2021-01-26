import React, { useState } from "react";
import image from "../assets/Sliki/Za_Nas/coworking.jpg";

const Coworking = () => {
  const [popOpen, setPopOpen] = useState(false);

  const toggle = () => setPopOpen(!popOpen);
  return (
    <div
      className="row mt-5 pt-4 align-items-center flex-lg-row-reverse"
      id="coworking"
    >
      <div className="col-md-12 col-lg-5 ">
        <h3 className="font-weight-bold display-4 line_through">Coworking</h3>
        <p className="line_through">
          Биди дел од заедницата на иноватори, креативци и претприемачи.
          Резевирај стол во нашата shared office. Пичјго твојот бизнис и нашиот
          тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.
        </p>
        <button className="btn-custom mb-4 pl-4 pr-4 line_through">
          РЕЗЕРВИРАЈ МЕСТО
        </button>
      </div>
      <div className="col-md-12 col-lg-7 blog-img">
        <img src={image} alt="edukacija-img" />
      </div>
    </div>
  );
};

export default Coworking;
