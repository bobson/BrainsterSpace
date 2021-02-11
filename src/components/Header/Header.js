import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import logo from "../../assets/brainster_space_logo.svg";
import ModalLouncher from "../ModalLouncher/ModalLouncher";

import { Link, NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalJoin, setOpenModalJoin] = useState(false);
  const [openModalPartner, setOpenModalPartner] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModalJoin = () => setOpenModalJoin(!openModalJoin);
  const toggleModalPartner = () => setOpenModalPartner(!openModalPartner);

  return (
    <Navbar color="white" expand="lg" className="p-0  p-lg-3">
      <div className="container-lg">
        <Link to="/" className="navbar-brand p-4 mr-4 p-lg-0">
          <img src={logo} alt="logo" />
        </Link>
        <div className="d-none d-md-block d-lg-none ml-auto">
          <ModalLouncher
            toggleModal={toggleModalJoin}
            modal={openModalJoin}
            email="Емаил (задолжително)"
            telnum="Телефонски број (задолжително)"
          >
            <button className="btn-custom " onClick={() => toggleModalJoin()}>
              <AiOutlinePlus />
              ПРИКЛУЧИ СE
            </button>
          </ModalLouncher>
        </div>
        <NavbarToggler onClick={toggle} className="mr-3 ml-2">
          <AiOutlineMenu />
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="text-center custom-color ">
            <NavItem>
              <NavLink to="/calendar" className="nav-link">
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
              <ModalLouncher
                toggleModal={toggleModalPartner}
                modal={openModalPartner}
                telnum="Телефонски број (задолжително)"
                company="Име на Компанија (нездолжително)"
                text="Предлог за Соработа (незадолжително)"
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => toggleModalPartner()}
                >
                  ПАРТНЕРСТВА
                </a>
              </ModalLouncher>
            </NavItem>
            <div className="d-md-none d-lg-block ml-auto btn-responsive">
              <ModalLouncher
                toggleModal={toggleModalJoin}
                modal={openModalJoin}
                email="Емаил (задолжително)"
                telnum="Телефонски број (задолжително)"
              >
                <button
                  className="btn-custom"
                  onClick={() => toggleModalJoin()}
                >
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
