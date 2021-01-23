import React from "react";

import img1 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7361.jpg";
import img2 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7385.jpg";
import img3 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7777.jpg";
import img4 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7362.jpg";

const SpaceKitchen = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <div className="col-md-12 col-lg-4">
        <h3 className="font-weight-bold display-5">Space Kitchen</h3>
        <p>
          Место каде сите настани започнуваат и завршуваат. Место каде нашиот
          тим готви и експериментира. Нашата кујна има само едно правило. <br />
          <br /> Храната мора да биде вегетаријанска. Пијалок, кафе или мезе.
          Вие одберете вид на кетеринг ние ќе го обезбедиме
        </p>
      </div>
      <div className="col-lg">
        <div className="row  ">
          <img
            src={img3}
            alt="kitchen-img"
            className="img-fluid h-50 col-md-6"
          />
          <img src={img4} alt="kitchen-img" className="img-fluid col-md-6" />
          <img
            src={img2}
            alt="kitchen-img"
            className="img-fluid h-50 col-md-6 col-lg-3 "
          />
          <img
            src={img1}
            alt="kitchen-img"
            className="img-fluid h-50 col-md-6 col-lg-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceKitchen;
