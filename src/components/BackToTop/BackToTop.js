import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoIosArrowDropup } from "react-icons/io";

import "./back-to-top.css";
const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else setShow(false);
    });
  }, [show]);

  return (
    <div style={{ opacity: show ? 1 : 0 }} className="back-to-top">
      <Link to="navbar" smooth duration={1000}>
        <IoIosArrowDropup />
      </Link>
    </div>
  );
};

export default BackToTop;
