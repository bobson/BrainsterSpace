import React, { useState } from "react";

import Karticka from "../components/Karticka";
import Coworking from "../components/Coworking";

import { blockContext } from "../lib/cards";
import { za_nas_cards } from "../lib/cards";
import { nastani_cards } from "../lib/cards";

import { FiArrowRight } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const ZaNas = () => {
  return (
    <div className="row mt-5 4" id="za-nas">
      <h3 className="col-12 mb-3 text-center block-title">За Нас</h3>
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
  const [title, setTitle] = useState("Едукација");
  const [text, setText] = useState(blockContext.edukacija);
  const [img, setImg] = useState(blockContext.edukacija_img);
  const [toggleClass, setToggleClass] = useState(false);

  const handleAkademii = () => {
    setTitle("Едукација");
    setText(blockContext.edukacija);
    setImg(blockContext.edukacija_img);
    setToggleClass(!toggleClass);
  };
  const handleKompanii = () => {
    setTitle("Компании");
    setText(blockContext.kompanii);
    setImg(blockContext.kompanii_img);
    setToggleClass(!toggleClass);
  };

  return (
    <div className="row mt-5 pt-4 align-items-center" id="partnership">
      <div className="col-md-12 col-lg-5">
        <h3 className="block-title">{title}</h3>
        {text}
        <div className="col-12 d-flex flex-row p-0 mb-4 pt-3 pb-3 pb-lg-0">
          <button
            onClick={handleAkademii}
            className={
              toggleClass ? "btn-custom btn-yellow mr-2" : "btn-custom  mr-2"
            }
            disabled={!toggleClass}
          >
            АКАДЕМИИ
          </button>
          <button
            onClick={handleKompanii}
            className={
              toggleClass ? "btn-custom  mr-2" : "btn-custom btn-yellow   mr-2 "
            }
            disabled={toggleClass}
          >
            ЗА КОМПАНИИ
          </button>
        </div>
      </div>
      <div className="col-md-12  col-lg blog-img">
        <img src={img} alt="block-img" />
      </div>
    </div>
  );
};

const Nastani = () => {
  return (
    <div className="row mt-5 pt-4 " id="nastani">
      <h3 className="col-12 mb-3 text-center block-title">Настани</h3>
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
      <div className={`col-md-12 col-lg-5`}>
        <h3 className="block-title">Простор за настани</h3>
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
        <img src={blockContext.events_space_img} alt="block-img" />
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
        <div className={`col-12`}>
          <h3 className="block-title">Партнери</h3>
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
