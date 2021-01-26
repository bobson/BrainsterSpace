import React from "react";

import Block from "../components/Block";
import img from "../assets/Sliki/Nastani/IMG_7481.jpg";
import { BsPeople } from "react-icons/bs";
import { RiCalendar2Fill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";

import dataScience from "../assets/Sliki/Za_Nas/edukacija.jpg";
import marketing from "../assets/Sliki/Za_Nas/edukacija2.jpg";
import grafickiDizajn from "../assets/Sliki/Za_Nas/edukacija.jpg";
import frontEnd from "../assets/Sliki/Za_Nas/edukacija1.jpg";
import fullStack from "../assets/Sliki/Za_Nas/coworking.jpg";
import softTesting from "../assets/Sliki//Za_Nas/edukacija2.jpg";

const cardContext = [
  {
    title: "Академија за графички дизајн",
    color: "#66316e",
    img: grafickiDizajn,
    link: "https://design.brainster.co/",
  },
  {
    title: "Академија за дигитален маркетинг",
    color: "#8f3d4f",
    img: marketing,
    link: "https://marketpreneurs.brainster.co/",
  },
  {
    title: "Академија за Front-end програмирање",
    color: "#398e57",
    img: frontEnd,
    link: "https://codepreneurs.brainster.co/",
  },
  {
    title: "Академија за Full-stack програмирање",
    color: "#2d7141",
    img: fullStack,
    link: "https://codepreneurs.brainster.co/",
  },
  {
    title: "Академија за Data science ",
    color: "#444b69",
    img: dataScience,
    link: "https://datascience.brainster.co/",
  },
  {
    title: "Академија за  software testing",
    color: "#2f4941",
    img: softTesting,
    link: "https://qa.brainster.co/",
  },
];

const AcademyCard = ({ img, title, color, link }) => {
  return (
    <div className="col-md-6 col-lg-4 pb-3 pt-3">
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
      <Block
        col="4"
        title="Академии"
        text={
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
        }
        img={img}
      />
      <div className="row  pt-4">
        {cardContext.map((el) => (
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
