import React from "react";

import { IoMdPlanet } from "react-icons/io";
import { ImVolumeMedium } from "react-icons/im";
import { RiCameraLensFill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiCookingPot } from "react-icons/gi";

const btnContent = [
  { icon: <IoMdPlanet />, text: "Простор" },
  { icon: <GiCookingPot />, text: "Space Kitchen" },
  { icon: <AiOutlineGlobal />, text: "Логистика" },
  { icon: <BiSupport />, text: "Техничка Поддршка" },
  { icon: <ImVolumeMedium />, text: "Звук" },
  { icon: <FaLightbulb />, text: "Светло" },
  { icon: <FaNetworkWired />, text: "Помош при Организација" },
  { icon: <RiCameraLensFill />, text: "Видео и Фотографија" },
  { icon: <FaFacebook />, text: "Промоција на Социјални Мрежи" },
];

const Offers = () => {
  return (
    <div className="row mt-5 p-3 align-items-start flex-column  flex-md-row">
      <p className="text-left col-12 p-0 block-title">Нудиме</p>
      {/* <div className="col-12 flex-wrap p-0 d-flex flex-row"> */}
      {btnContent.map((el) => (
        <button
          key={el.text}
          className="btn-custom-2 pr-4 pl-4 rounded d-flex float-left mb-3 mr-3"
          disabled
        >
          <span className="btn-icon mr-2">{el.icon}</span>
          <span className="btn-text">{el.text}</span>
        </button>
      ))}
    </div>
    // </div>
  );
};

export default Offers;
