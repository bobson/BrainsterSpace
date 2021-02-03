import React from "react";

import img1 from "../../assets/Sliki/Space_Kitchen_Galerija/IMG_7361.jpg";
import img2 from "../../assets/Sliki/Space_Kitchen_Galerija/IMG_7385.jpg";
import img3 from "../../assets/Sliki/Space_Kitchen_Galerija/IMG_7777.jpg";
import img4 from "../../assets/Sliki/Space_Kitchen_Galerija/IMG_7362.jpg";

const SpaceKitchen = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center flex-lg-row-reverse">
      <div className="col-md-12 col-lg-4">
        <p className="block-title">Space Kitchen</p>
        <p>
          Место каде сите настани започнуваат и завршуваат. Место каде нашиот
          тим готви и експериментира. Нашата кујна има само едно правило. <br />
          <br /> Храната мора да биде вегетаријанска. Пијалок, кафе или мезе.
          Вие одберете вид на кетеринг ние ќе го обезбедиме
        </p>
      </div>
      <div className="col-md-12 col-lg-8">
        <div className="row">
          <img
            src={img3}
            alt="kitchen-img"
            className="col-md-6 blog-img smaller-kitchen-img pb-2"
          />
          <img
            src={img4}
            alt="kitchen-img"
            className="col-md-6 bigger-kitchen-img pt-3 pt-md-0 blog-img"
          />
          <div className="row smaller-kitchen-img-1 blog-img ">
            <img
              src={img1}
              alt="kitchen-img"
              className="col-md-6 col-lg-3 pb-3 mb-1 pb-md-0 mb-md-0 "
            />
            <img src={img2} alt="kitchen-img" className="col-md-6 col-lg-3 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceKitchen;
