import React, { useState, useEffect } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import Fade from "react-reveal";

import "./calendar.css";

const date = new Date();

date.setDate(1);

const months = [
  "Јануари",
  "Февруари",
  "Март",
  "Април",
  "Мај",
  "Јуни",
  "Јули",
  "Август",
  "Септември",
  "Окомври",
  "Ноември",
  "Декември",
];

const Calendar = () => {
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [lastDay, setLastDay] = useState(
    new Date(year, month + 1, 0).getDate()
  );
  const [firstDayIndex, setFirstDayIndex] = useState(date.getDay());
  const [prevLastDay, setPrevLastDay] = useState(
    new Date(year, month, 0).getDate()
  );
  const [lastDayIndex, setLastDayIndex] = useState(
    new Date(year, month, 0).getDay()
  );

  const prevMonthDays = [];
  const daysOfTheMonth = [];
  const nextMontDays = [];

  // Push days of the prev month in array
  for (let j = firstDayIndex; j > 0; j--) {
    prevMonthDays.push(
      <div key={j} className="prev-date">
        {prevLastDay - j + 1}
      </div>
    );
  }

  // Push all days of selected month in array
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      daysOfTheMonth.push(
        <div className="today" key={i}>
          {i}
        </div>
      );
    } else if (i === 14 || i === 21) {
      daysOfTheMonth.push(
        <div className="red-event" key={i}>
          <p className="mr-auto d-none d-lg-inline-block">
            <span className="event-title">Front End Workshop</span>
            <span>10:00 - 15:00ч</span>
            <span>Workshop 5</span>
          </p>
          {i}
        </div>
      );
    } else if (i === 12 || i === 26) {
      daysOfTheMonth.push(
        <div className="blue-event" key={i}>
          <p className="mr-auto d-none d-lg-inline-block">
            <span className="event-title">React Class</span>

            <span>19:30 - 21:30ч</span>

            <span>Class 6</span>
          </p>
          {i}
        </div>
      );
    } else daysOfTheMonth.push(<div key={i}>{i}</div>);
  }

  // push days of the next month in array
  const nextDays = 7 - lastDayIndex - 1;
  for (let x = 1; x <= nextDays; x++) {
    nextMontDays.push(
      <div className="next-date" key={x}>
        {x}
      </div>
    );
  }

  // Increase the month
  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else setMonth(month - 1);
  };

  // Decrease the month
  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  // Update the last day of the month, day of the week of the first and the las day of the month, and the last day of the prev month
  useEffect(() => {
    setLastDay(new Date(year, month + 1, 0).getDate());
    setFirstDayIndex(new Date(year, month, 1).getDay());
    setPrevLastDay(new Date(year, month, 0).getDate());
    setLastDayIndex(new Date(year, month + 1, 0).getDay());
  }, [month, year]);

  return (
    <>
      <div className="row mt-5 mb-5  justyfy-content-between align-items-center">
        <Fade left duration={1000} destination="30px">
          <div className="col-sm-12 col-md-6 mb-0 mb-md-5">
            <p className="block-title">Календар</p>
          </div>
        </Fade>
        <Fade right duration={1000} destination="30px">
          <div className="col-sm-12 col-md-6 mb-5 month">
            <p className="float-md-right">
              <FiArrowLeftCircle role="button" onClick={handlePrevMonth} />{" "}
              {months[month]} {year}{" "}
              <FiArrowRightCircle role="button" onClick={handleNextMonth} />
            </p>
          </div>
        </Fade>
        <div className="col-12 d-none d-md-flex weekdays ">
          <Fade top duration={1000} destination="30px">
            <div>НЕД</div>
            <div>ПОН</div>
            <div>ВТО</div>
            <div>СРЕ</div>
            <div>ЧЕТ</div>
            <div>ПЕТ</div>
            <div>САБ</div>
          </Fade>
        </div>
        <Fade bottom duration={1000} destination="30px">
          <div className="col-12 days d-flex flex-wrap">
            {prevMonthDays}
            {daysOfTheMonth}
            {nextMontDays}
          </div>
        </Fade>
      </div>
      <div className="row mt-5 pt-4 pb-4 d-lg-none nastani flex-row">
        <div className="col-12 p-0 ml-4 ml-md-0">
          <p className="block-title">Следни Настани</p>
        </div>
        <div className="col-sm-12 mt-4 ml-4 ml-md-0 col-md-5 blue-next-event">
          <p>
            12/26.{month < 9 ? "0" + (month + 1) : month + 1}.{year}
          </p>
          <p className="font-weight-bold">React Class</p>
          <p className="mb-0">19:30 - 21:30ч</p>
        </div>
        <div className="col-sm-12 col-md-5 ml-4 ml-md-0 mt-4 red-next-event">
          <p>
            14/21.{month < 9 ? "0" + (month + 1) : month + 1}.{year}
          </p>
          <p className="font-weight-bold">Front End Workshop</p>
          <p className="mb-0">10:00 - 15:00ч</p>
        </div>
        <div className="black"></div>
      </div>
    </>
  );
};

export default Calendar;
