import React from "react";

import img1 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7361.jpg";
import img2 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7385.jpg";
import img3 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7777.jpg";
import img4 from "../assets/Sliki/Space_Kitchen_Galerija/IMG_7362.jpg";

const SpaceKitchen = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <div className="col-md-12 col-lg-4">
        <h3 className="block-title">Space Kitchen</h3>
        <p>
          Место каде сите настани започнуваат и завршуваат. Место каде нашиот
          тим готви и експериментира. Нашата кујна има само едно правило. <br />
          <br /> Храната мора да биде вегетаријанска. Пијалок, кафе или мезе.
          Вие одберете вид на кетеринг ние ќе го обезбедиме
        </p>
      </div>
      <div className="col-lg">
        <div className="row flex-lg-row ">
          <div className="col-md-6 blog-img">
            <div className="row">
              <img src={img3} alt="kitchen-img" className="col-lg-12" />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row flex-row">
                  <div className="col-lg-6">
                    <img src={img2} alt="kitchen-img" />
                  </div>
                  <div className="col-lg-12">
                    <img src={img1} alt="kitchen-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md blog-img">
            <img src={img4} alt="kitchen-img" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceKitchen;
