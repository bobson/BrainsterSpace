import React, { useState } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import Slide from "react-reveal/Fade";

import { Link } from "react-router-dom";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

import "./karticka.css";
import ModalLouncher from "../../ModalLouncher/ModalLouncher";
import LazyImage from "../../LazyImage/LazyImage";

const Karticka = ({ img, title, text, url, imgHeight }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  let link;

  if (
    title === "Настани" ||
    title === "Coworking" ||
    title === "Простор за настани"
  ) {
    link = (
      <Link to={`${url}`} className="stretched-link ml-auto text-dark">
        <IoArrowForwardCircleOutline />
      </Link>
    );
  } else if (title === "Партнерства со Tech компании") {
    link = (
      <ModalLouncher
        toggleModal={toggleModal}
        modal={modal}
        telnum="Телефонски број (задолжително)"
        company="Име на Компанија (нездолжително)"
        text="Предлог за Соработа (незадолжително)"
      >
        <Button
          color="none"
          onClick={() => toggleModal()}
          className="stretched-link "
        >
          <IoArrowForwardCircleOutline />
        </Button>
      </ModalLouncher>
    );
  } else if (title === "Иновации за компании") {
    link = (
      <ModalLouncher
        toggleModal={toggleModal}
        modal={modal}
        telnum="Телефонски број (задолжително)"
        company="Име на Компанија (нездолжително)"
        text="Потреби на Компанијата (незадолжително)"
        email="Емаил (задолжително)"
      >
        <Button
          color="none"
          onClick={() => toggleModal()}
          className="stretched-link ml-auto"
        >
          <IoArrowForwardCircleOutline />
        </Button>
      </ModalLouncher>
    );
  } else {
    link = (
      <a href={url} target="blank" className="stretched-link ml-auto text-dark">
        <IoArrowForwardCircleOutline />
      </a>
    );
  }

  return (
    <Slide bottom duration={1000} distance="30px">
      <div className="col-sm-12 col-md-6 col-lg-4 p-2 d-flex aligin-items-stretch ">
        <Card>
          <div className="inner">
            <LazyImage
              top
              width="100%"
              height={imgHeight}
              src={img}
              alt="Card image cap"
            />
          </div>
          <CardBody className="d-flex flex-column ">
            <CardTitle className="font-weight-bold" tag="h4">
              {title}
            </CardTitle>
            {text}
            <div className="card-link ml-auto mt-auto">{link}</div>
          </CardBody>
        </Card>
      </div>
    </Slide>
  );
};

export default Karticka;
