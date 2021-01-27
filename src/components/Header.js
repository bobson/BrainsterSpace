import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { AiOutlineMenu } from "react-icons/ai";

import logo from "../assets/brainster_space_logo.svg";
import ModalLouncher from "./ModalLouncher";

import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="white" expand="lg" className="p-0  p-lg-3">
      <div className="container-lg">
        <Link to="/" className="navbar-brand p-3  p-lg-0">
          <img src={logo} alt="logo" />
        </Link>
        <div className="d-none d-md-block d-lg-none ml-auto">
          <ModalLouncher />
        </div>
        <NavbarToggler onClick={toggle} className="mr-3 ml-2">
          <AiOutlineMenu />
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="text-center custom-color ">
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
            <div className="d-md-none d-lg-block ml-auto btn-responsive">
              <ModalLouncher />
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
