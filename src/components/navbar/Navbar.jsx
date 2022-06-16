import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "../../index.css";
import "./navbar.css";

import {
  faHome,
  faInfoCircle,
  faBookOpen,
  faGears,
  faMessage,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  function control() {
    $("#mobmenu").toggleClass("show");
  }

  const navigate = useNavigate();
  function pushAbout() {
    navigate("/about");
  }

  function pushHome() {
    navigate("/");
  }

  function pushContact() {
    navigate("/contact");
  }

  function pushAcademy() {
    navigate("/academy");
  }

  return (
    <>
      {/* Desktop */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light shadow"
        id="navbarNav"
      >
        <div className="container">
          <img src={logo} alt="Logo" onClick={pushHome} />;
          <div className="">
            <ul className="navbar-nav">
              <li
                className="nav-item active my-2 light  font-16"
                onClick={pushHome}
              >
                <span className="mx-2 ">Home</span>
              </li>
              <li className="nav-item  my-2 light font-16" onClick={pushAbout}>
                <span className="mx-2">About Us</span>
              </li>
              <li
                className="nav-item  my-2 light font-16"
                onClick={pushAcademy}
              >
                <span className="mx-2">Academy</span>
              </li>
              {/* <li className="nav-item  my-2 light font-16">
                <span className="mx-2">Solutions</span>
              </li>
              <li className="nav-item  my-2 light font-16">
                <span className="mx-2">Industry</span>
              </li> */}
              <li
                className="nav-item  my-2 light font-16"
                onClick={pushContact}
              >
                <span className="mx-2">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* // mobile */}
      <div id="#navbarMob">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light shadow"
          id="navmobile"
        >
          <div className="container">
            <img src={logo} alt="Logo" onClick={pushHome} />;
            <button
              className="navbar-toggler blue"
              type="button"
              data-toggle="collapse"
              data-target="index.jsxnavbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="toggler"
              onClick={control}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div
          className="border p-3 shadow w-75"
          style={{ height: "620px", backgroundColor: "var(--white)" }}
          id="mobmenu"
        >
          <ul className="navbar-nav">
            <li className="nav-item active" onClick={pushHome}>
              <FontAwesomeIcon icon={faHome} className="mr-3 blue " />{" "}
              <span className="mx-2  my-3 light font-16">Home</span>
            </li>
            <li className="nav-item  my-3 light font-16" onClick={pushAbout}>
              <FontAwesomeIcon icon={faInfoCircle} className="mr-3 blue" />
              <span className="mx-2">About Us</span>
            </li>
            <li className="nav-item  my-3 light font-16" onClick={pushAcademy}>
              <FontAwesomeIcon icon={faBookOpen} className="mr-3 blue" />
              <span className="mx-2">Academy</span>
            </li>
            {/* <li className="nav-item  my-3 light font-16">
              <FontAwesomeIcon icon={faGears} className="mr-3 blue" />
              <span className="mx-2">Solutions</span>
            </li>
            <li className="nav-item  my-3 light font-16">
              <FontAwesomeIcon icon={faIndustry} className="mr-3 blue" />
              <span className="mx-2">Industry</span>
            </li> */}
            <li className="nav-item  my-3 light font-16" onClick={pushContact}>
              <FontAwesomeIcon icon={faMessage} className="mr-3 blue" />
              <span className="mx-2">Contact Us</span>
            </li>
            <hr className="my-2 light"></hr>
            <li className="nav-item  my-3 light font-16">
              <button className="btn btn-reflection  font-14 text-uppercase">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
