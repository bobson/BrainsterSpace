import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import logo from "../../assets/brainster_space_logo.svg";
import ModalLouncher from "../Homepage/ModalLouncher/ModalLouncher";

import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  return (
    <Navbar color="white" expand="lg" className="p-0  p-lg-3">
      <div className="container-lg">
        <Link to="/" className="navbar-brand p-4 mr-4 p-lg-0">
          <img src={logo} alt="logo" />
        </Link>
        <div className="d-none d-md-block d-lg-none ml-auto">
          <ModalLouncher
            toggleModal={toggleModal}
            modal={modal}
            email="Емаил (задолжително)"
          >
            <button className="btn-custom " onClick={() => toggleModal()}>
              <AiOutlinePlus />
              ПРИКЛУЧИ СE
            </button>
          </ModalLouncher>
          {/* <MaterialModal /> */}
        </div>
        <NavbarToggler onClick={toggle} className="mr-3 ml-2">
          <AiOutlineMenu />
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="text-center custom-color ">
            <NavItem>
              <NavLink to="/calendar" className="nav-link ">
                НАСТАНИ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/coworking" className="nav-link">
                CO-WORKING
              </NavLink>{" "}
            </NavItem>
            <NavItem>
              <NavLink to="/academies" className="nav-link">
                АКАДЕМИИ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/events_space" className="nav-link">
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
              <ModalLouncher
                toggleModal={toggleModal}
                modal={modal}
                email="Емаил (задолжително)"
              >
                <button className="btn-custom" onClick={() => toggleModal()}>
                  <AiOutlinePlus />
                  ПРИКЛУЧИ СE
                </button>
              </ModalLouncher>
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;