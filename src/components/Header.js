import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

import logo from "../assets/brainster_space_logo.svg";
import ModalLouncher from "./ModalLouncher";

import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="white" light expand="lg">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/calendar">
                НАСТАНИ
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/coworking" className="nav-link">
                CO-WORKING
              </Link>{" "}
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/academies">
                АКАДЕМИИ
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/events_space">
                ПРОСТОР ЗА НАСТАНИ
              </Link>
            </NavItem>
            <NavItem>
              <NavLink>ПАРТНЕРСТВА</NavLink>
            </NavItem>
          </Nav>
          <ModalLouncher />
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
