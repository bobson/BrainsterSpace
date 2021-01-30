import React from "react";
import Offers from "../components/Offers";
import Prostorii from "../components/Prostorii";
import SpaceKitchen from "../components/SpaceKitchen";

import eventHostImg from "../assets/Sliki/Space_Blog_Kartici/Untitled-design-5-1200x600.jpg";

import { blockContext } from "../lib/cards";

const ProstorZaNastani = () => {
  return (
    <div className="row mt-5 pt-4 align-items-center">
      <div className={`col-md-12 col-lg-4`}>
        <h3 className="block-title" style={{ width: "100%" }}>
          Простор за настани
        </h3>
        {blockContext.events_space_2}
        <a href="#event-host">
          <button className="btn-custom mb-4 mr-2 pl-4 pr-4">БУКИРАЈ НЕ</button>
        </a>
      </div>
      <div className="col-md-12 col-lg blog-img">
        <img src={blockContext.events_space_img} alt="block-img" />
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
        <div className="col-md col-lg-4">
          <img src={eventHostImg} alt="host-img" className="event-host-img" />
        </div>
        <div className="col-md-6 col-lg-4">
          <h3>Event Host</h3>
          <p className="p-0">Ања Макеска</p>
          <p className="p-0">anja@brainster.co</p>
          <p className="p-0">+389 (0)70 233414</p>
        </div>
      </div>
    </>
  );
};

export default EventsSpace;
