import React from "react";
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
      <div className="col-md-12 col-lg-4">
        <p className="block-title">Простор за настани</p>
        {blockContext.events_space_2}
        <a href="#event-host">
          <button className="btn-custom mb-4">
            <AiOutlinePlus />
            БУКИРАЈ НЕ
          </button>
        </a>
      </div>
      <div className="col-md-12 col-lg blog-img">
        <LazyImage src={blockContext.events_space_img} alt="block-img" />
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
        className="row mt-5 pt-4 flex-lg-row-reverse justify-content-between align-items-center"
        id="event-host"
      >
        <div className="col-md col-lg-4 event-host-img">
          <LazyImage src={eventHostImg} alt="host-img" />
        </div>
        <div className="col-md-6 col-lg-4">
          <p className="block-title">Event Host</p>
          <p className="p-0">Ања Макеска</p>
          <p className="p-0">anja@brainster.co</p>
          <p className="p-0">+389 (0)70 233414</p>
        </div>
      </div>
    </>
  );
};

export default EventsSpace;
