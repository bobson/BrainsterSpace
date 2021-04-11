import React from "react";
import Fade from "react-reveal";
import { Link } from "react-scroll";

import Offers from "./Offers";
import Prostorii from "./Prostorii";
import SpaceKitchen from "./SpaceKitchen";

import eventHostImg from "../../assets/Sliki/Space_Blog_Kartici/Untitled-design-5-1200x600.jpg";

import { AiOutlinePlus } from "react-icons/ai";

import { blockContext } from "../../lib/cards";

import "./eventsSpace.css";
import LazyImage from "../LazyImage/LazyImage";

const ProstorZaNastani = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <Fade left duration={1000} distance="30px">
        <div className="col-md-12 col-lg-4">
          <p className="block-title">Простор за настани</p>
          {blockContext.events_space_2}
          <Link to="event-host" smooth duration={1000}>
            <button className="btn-custom mb-4 mt-5">
              <AiOutlinePlus />
              БУКИРАЈ НЕ
            </button>
          </Link>
        </div>
      </Fade>
      <div className="col-md-12 col-lg blog-img">
        <Fade right duration={1000} distance="30px">
          <LazyImage src={blockContext.events_space_img} alt="block-img" />
        </Fade>
      </div>
    </div>
  );
};

const EventsSpace = () => {
  return (
    <>
      <ProstorZaNastani />
      <Prostorii />
      <SpaceKitchen />
      <Offers />
      <div
        className="row mt-5 pt-4 mb-5 flex-lg-row-reverse justify-content-between align-items-center"
        id="event-host"
      >
        <Fade duration={1000} right distance="30px">
          <div className="col-md-6 col-lg-5 event-host-img">
            <img src={eventHostImg} alt="host-img" />
          </div>
        </Fade>
        <div className="col-md-6 col-lg-4">
          <Fade duration={1000} left distance="30px">
            <p className="block-title">Event Host</p>
            <p className="p-0">Ања Макеска</p>
            <p className="p-0">anja@brainster.co</p>
            <p className="p-0">+389 (0)70 233 414 </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default EventsSpace;
