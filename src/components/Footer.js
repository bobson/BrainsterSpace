import React, { useState } from "react";
import logo from "../assets/brainster_space_logo.svg";

import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";

import "./footer.css";

const Footer = () => {
  const [popup, setPopup] = useState(false);
  return (
    <footer className="bg-light mt-5">
      <div className="container">
        <div className="row pt-5 pb-4 flex-nowrap flex-column flex-md-row justify-content-between">
          <div className="col-sm-6 order-2 order-md-1 col-md-4 col-lg-2">
            <h6>Корисни Линкови</h6>
            <ul className="list-unstyled footer-links">
              <li
                role="button"
                onClick={() => setPopup(!popup)}
                className="tooltip-btn"
              >
                Конаткт
                <span
                  className={popup ? "footer-popup-visible" : "tooltip-hidden"}
                >
                  Емаил: <br />
                  anja@brainster.co <br />
                  Телефон <br />
                  070 233 414
                </span>
              </li>
              <li>
                <a
                  href="https://wearelaika.com"
                  target="blank"
                  className="text-dark"
                >
                  Отворени позиции
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://medium.com/wearelaika/brainster-space-the-"
                  target="blank"
                  className="text-dark"
                >
                  Галерија
                </a>
              </li>
              <li>
                <Link className="text-dark" to="/calendar">
                  Календар
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="order-3 order-md-2 col-md-4 col-lg-2 text-md-center mb-3">
            <h6 className="mb-3">Социални мрежи</h6>
            <div className="d-flex col-6 col-md-12 p-0 justify-content-md-center social">
              <a href="https://www.facebook.com/" target="blank">
                <FaFacebook style={{ color: "#3b5998" }} />
              </a>
              <a href="https://www.linkedin.com" target="blank">
                <TiSocialLinkedin
                  style={{
                    color: "white",
                    backgroundColor: "#0e76a8",
                  }}
                  className="rounded-circle ml-4 mr-4"
                />
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <GrInstagram style={{ color: "#c13584" }} />
              </a>
            </div>
          </div>
          <div className="col-sm-6 order-1 order-md-3 col-md-4 col-lg-6 ml-md-auto d-flex">
            <Link to="." className="ml-md-auto pb-5">
              <img
                src={logo}
                alt="logo"
                // className="img-fluid"
                // height="80%"
                // width="80px"
                className="img-fluid"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="text-center p-2 font-weight-bold"
        style={{ backgroundColor: "#e7e7e7", fontSize: "0.7rem" }}
      >
        COPYRIGHT&copy;BrainsterSpace. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
