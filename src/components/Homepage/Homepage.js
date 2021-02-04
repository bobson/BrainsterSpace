import React, { useState } from "react";

import Karticka from "./Karticka/Karticka";
import Coworking from "./Coworking/Coworking";

import { blockContext } from "../../lib/cards";
import { za_nas_cards } from "../../lib/cards";
import { nastani_cards } from "../../lib/cards";

import { FiArrowRight } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";

const ZaNas = () => {
  return (
    <div className="row mt-5 4" id="za-nas">
      <p className="col-12 mb-4 text-center block-title">За Нас</p>
      {za_nas_cards.map((item) => (
        <Karticka
          key={item.title}
          img={item.img}
          title={item.title}
          text={item.text}
          url={item.url}
        />
      ))}
    </div>
  );
};

const Edukacija = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="row mt-5 pt-4 align-items-center" id="partnership">
      <div className="col-md-12 col-lg-5">
        <p className="block-title">{!toggle ? "Едукација" : "Компании"}</p>
        {!toggle ? blockContext.edukacija : blockContext.kompanii}
        <div className="col-12 d-flex flex-row p-0 mb-4 pt-3 pb-3 pb-lg-0">
          <button
            onClick={handleClick}
            className={
              toggle ? "btn-custom btn-yellow mr-2" : "btn-custom  mr-2"
            }
            disabled={!toggle}
          >
            АКАДЕМИИ
          </button>
          <button
            onClick={handleClick}
            className={
              toggle ? "btn-custom  mr-2" : "btn-custom btn-yellow   mr-2 "
            }
            disabled={toggle}
          >
            ЗА КОМПАНИИ
          </button>
        </div>
      </div>
      <div className="col-md-12  col-lg blog-img">
        <img
          src={!toggle ? blockContext.edukacija_img : blockContext.kompanii_img}
          alt="block-img"
        />
      </div>
    </div>
  );
};

const Nastani = () => {
  return (
    <div className="row mt-5 pt-4 " id="nastani">
      <p className="col-12 mb-5 text-center block-title">Настани</p>
      {nastani_cards.map((item) => (
        <Karticka
          key={item.title}
          img={item.img}
          title={item.title}
          text={item.text}
          url={item.url}
          imgHeight="180px"
        />
      ))}
      <div className="col-12 d-flex justify-content-center  justify-content-lg-end p-1 mt-4">
        <Link to="/calendar">
          {" "}
          <button className="btn-custom">
            <FaRegCalendarAlt /> КАЛЕНДАР НА НАСТАНИ
          </button>
        </Link>
      </div>
    </div>
  );
};

const ProstorZaNastani = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <div className="col-md-12 col-lg-5">
        <p className="block-title">Простор за настани</p>
        {blockContext.events_space_1}
        <div className="col-12 p-0 mb-4 pt-3 pb-3 pb-lg-0">
          <Link to="/events_space">
            <button className="btn-custom">
              <FiArrowRight />
              ВИДИ ГО ПРОСТОРОТ
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md-12 col-lg blog-img">
        <LazyImage src={blockContext.events_space_img} alt="block-img" />
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      <div className="title mb-5">
        <h1 className="text-center block-title">
          Центар за Учење, Кариера и Иновација
        </h1>
      </div>

      <ZaNas />
      <Edukacija />
      <Nastani />
      <Coworking />
      <ProstorZaNastani />

      <div className="row mt-5 pt-4 align-items-center flex-column text-center">
        <div className="col-12">
          <p className="block-title">Партнери</p>
        </div>
        <div className="col-12 mb-2">
          <p className="font-weight-normal ideja-text ">
            Имаш идеја? Отворени сме за соработка
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center p-0 mb-4 pt-3 pb-3 pb-lg-0">
          <Link to="/events_space">
            <button className="btn-custom">
              <FiArrowRight />
              ВИДИ ГО ПРОСТОРОТ
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
