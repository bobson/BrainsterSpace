import React from "react";

import img from "../../assets/Sliki/Nastani/IMG_7481.jpg";
import { BsPeople } from "react-icons/bs";
import { RiCalendar2Fill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";

import "./academies.css";

import { academy_cards } from "../../lib/cards";

const AcademyCard = ({ img, title, color, link }) => {
  return (
    <div className="col-md-6 col-lg-4 p-0 p-2">
      <div
        className="akademy-card d-flex flex-column justify-content-between inner rounded"
        style={{ backgroundColor: color, backgroundImage: `url(${img})` }}
      >
        <h4>{title}</h4>
        <a
          href={`${link}`}
          target="blank"
          className="stretched-link p-0 m-0 d-inline-block"
        >
          {" "}
        </a>
        <div>
          <p>
            <BsPeople className="mr-2 mb-1" />
            Слободни места: 4
          </p>
          <p>
            <RiCalendar2Fill className="mr-2 mb-1" />
            Уписи до: 26.08.2021
          </p>
          <p>
            <AiOutlineClockCircle className="mr-2 mb-1" />
            Стани дизајнер за 7 месеци
          </p>
          <p>
            <FaHandshake className="mr-2 mb-1" />
            Партнери за вработување: 5
          </p>
        </div>
      </div>
    </div>
  );
};

const Academies = () => {
  return (
    <>
      <div className="row mt-5 pt-4 align-items-center">
        <div className="col-md-12 col-lg-5">
          <p className="block-title">Академии</p>
          <p>
            Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на
            денешницата преку интерактивна настава и практична работа на реални
            проекти. <br />
            <br />
            Инструктори ко се дакажани експерти во својата област. Преку нив
            имаш можност да ги научиш и предвидиш предизвиците на иднината на
            работење и да се поврзеш со сегашните и идните врвни професионалци и
            компании. <br />
            <br />
            Академиите ќе ти го отворат патот кон кариера каква што посакуваш.
          </p>
        </div>
        <div className="col-md-12 col-lg blog-img">
          <img src={img} alt="block-img" />
        </div>
      </div>

      <div className="row  pt-4 pb-5">
        {academy_cards.map((el) => (
          <AcademyCard
            key={el.title}
            img={el.img}
            title={el.title}
            color={el.color}
            link={el.link}
          />
        ))}
      </div>
    </>
  );
};

export default Academies;
