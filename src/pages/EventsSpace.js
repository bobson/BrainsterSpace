import React from "react";
import Block from "../components/Block";
import Offers from "../components/Offers";
import Prostorii from "../components/Prostorii";
import SpaceKitchen from "../components/SpaceKitchen";

import eventHostImg from "../assets/Sliki/Space_Blog_Kartici/Untitled-design-5-1200x600.jpg";

import { blockContext } from "../lib/cards";

const EventsSpace = () => {
  return (
    <>
      <Block
        col="4"
        title="Простор за настани"
        text={blockContext.events_space_2}
        btnText={["БУКИРАЈ НЕ"]}
        img={blockContext.events_space_img}
      />
      <Prostorii />
      <SpaceKitchen />
      <Offers />
      <div className="row mt-5 pt-4 flex-lg-row-reverse justify-content-between align-items-center">
        <div className="col-md col-lg-4">
          <img src={eventHostImg} alt="host-img" className="event-host-img" />
        </div>
        <div className="col-md-6 col-lg-4">
          <h3 className="font-weight-bold">Event Host</h3>
          <p>Ања Макеска</p>
          <p>anja@brainster.co</p>
          <p>+389 (0)70 233414</p>
        </div>
      </div>
    </>
  );
};

export default EventsSpace;
