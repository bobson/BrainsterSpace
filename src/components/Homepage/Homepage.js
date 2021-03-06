import React, { useState } from "react";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";

import Karticka from "./Karticka/Karticka";
import Coworking from "./Coworking/Coworking";

import { blockContext } from "../../lib/cards";
import { za_nas_cards } from "../../lib/cards";
import { nastani_cards } from "../../lib/cards";

import { FiArrowRight } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";

import "./homepage.css";

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
        <Fade left duration={1000} distance="30px">
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
        </Fade>
      </div>
      <div className="col-md-12  col-lg blog-img">
        <Fade duration={1000} distance="30px">
          <img
            src={
              !toggle ? blockContext.edukacija_img : blockContext.kompanii_img
            }
            alt="block-img"
          />
        </Fade>
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
      <Fade left duration={1000} distance="30px">
        <div className="col-12 d-flex justify-content-center  justify-content-lg-end p-1 mt-4">
          <Link to="/calendar">
            <button className="btn-custom">
              <FaRegCalendarAlt /> КАЛЕНДАР НА НАСТАНИ
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

const ProstorZaNastani = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <div className="col-md-12 col-lg-5">
        <Fade left duration={1000} distance="30px">
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
        </Fade>
      </div>
      <div className="col-md-12 col-lg blog-img">
        <Fade right duration={1000} distance="30px">
          <LazyImage src={blockContext.events_space_img} alt="block-img" />
        </Fade>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      <div className="title mb-5">
        <h1 className="text-center block-title">
          <Typed
            strings={["Центар за Учење, Кариера и Иновација"]}
            typeSpeed={40}
            showCursor={false}
          />
        </h1>
      </div>

      <ZaNas />
      <Edukacija />
      <Nastani />
      <Coworking />
      <ProstorZaNastani />

      <div className="row mt-5 pt-4 mb-2 mb-lg-5 align-items-center flex-column text-center">
        <div className="col-12">
          <Fade top duration={1000} distance="30px">
            <p className="block-title">Партнери</p>
          </Fade>
        </div>
        <div className="col-12 mb-2">
          <Fade leftduration={1000} distance="30px">
            <p className="font-weight-normal ideja-text ">
              Имаш идеја? Отворени сме за соработка
            </p>
          </Fade>
        </div>
        <div className="col-12 d-flex justify-content-center p-0 mb-4 pt-3 pb-3 pb-lg-0">
          <Fade bottom duration={1000} distance="30px">
            <Link to="/events_space">
              <button className="btn-custom">
                <FiArrowRight />
                ВИДИ ГО ПРОСТОРОТ
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Homepage;
