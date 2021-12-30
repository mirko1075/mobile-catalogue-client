import React, { useRef, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  FormControl,
  Form,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMobile } from "react-icons/fa";

const NavbarComponent = props => {
  return (
    <>
      <nav
        className="navbar sm navbar-expand navbar-dark bg-dark"
        aria-label="Navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Phone Catalogue
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/PhoneList"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/PhonesList">
                  Phone List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/PhoneAdd">
                  Add Phone
                </a>
              </li>
            </ul>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
