import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { AiOutlinePlus } from "react-icons/ai";

import logo from "../assets/brainster_space_logo.svg";
import ModalLouncher from "./ModalLouncher";

import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="white" light expand="lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/calendar" className="nav-link">
                НАСТАНИ
              </Link>
            </NavItem>
            <NavItem>
              <NavLink to="/coworking" tag={Link}>
                CO-WORKING
              </NavLink>{" "}
            </NavItem>
            <NavItem>
              <NavLink to="/academies" tag={Link}>
                АКАДЕМИИ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/events_space" tag={Link}>
                ПРОСТОР ЗА НАСТАНИ
              </NavLink>
            </NavItem>
            <NavItem>
              <a
                href="https://partners.brainster.co/"
                className="nav-link"
                target="blank"
              >
                ПАРТНЕРСТВА
              </a>
            </NavItem>
          </Nav>
          <ModalLouncher />
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
