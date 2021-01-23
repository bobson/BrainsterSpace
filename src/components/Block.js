import React from "react";
// import image from "../assets/Sliki/Za_Nas/prostor za nastani.jpg";

const Block = ({ col, title, text, btnText, img }) => {
  return (
    <div className="row mt-5 pt-4 align-items-center" id="prostor_za_nastani">
      <div className={`col-md-12 col-lg-${col}`}>
        <h3 className="font-weight-bold display-4">{title}</h3>
        {text}
        {btnText &&
          btnText.map((el) => (
            <button key={el} className="btn-custom mb-4 mr-2 pl-4 pr-4">
              {el}
            </button>
          ))}
      </div>
      <div className="col-md-12 col-lg blog-img">
        <img src={img} alt="block-img" />
      </div>
    </div>
  );
};

export default Block;
