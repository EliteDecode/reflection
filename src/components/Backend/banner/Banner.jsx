import React from "react";
import "./banner.css";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logo2.png";

const Banner = () => {
  return (
    <>
      <section className="py-2 c_banner white">
        <div className="container py-3 my-5 course_banner">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="bold white" style={{ fontSize: "34px" }}>
                Backend Development
              </h1>
              <p className="lead  font-14 opacity mt-5 opacity">
                This is your path to a career in Backend Development. In this
                program, you'll learn in-demand skills <br /> that will have you
                job-ready in less than 6 months. No degree or experience
                required.
              </p>

              <div className="" style={{ display: "flex" }}>
                <span className="mr-1 px-1 light bold font-12 white opacity">
                  4.5 Star
                </span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="font-10 mt-1 yellow"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="font-10 mt-1 yellow"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="font-10 mt-1 yellow"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="font-10 mt-1 yellow"
                />
                <FontAwesomeIcon
                  icon={faStarHalf}
                  className="font-10 mt-1 yellow"
                />
                <span className="mx-1 px-1 bold light font-12 white opacity">
                  3,231 Ratings
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <h5 className="bold font-22 opacity yellow">Offered By</h5>
              <img
                src={logo}
                alt="logo"
                className=""
                style={{ width: "50%" }}
              />
            </div>
          </div>

          <div className="my-5 py-2 course_form">
            <form style={{ width: "50%" }}>
              <input
                type="email"
                className=" form-control mb-2"
                placeholder="Reflection.com@gmail.com"
              />
              <button className="btn btn-reflection-yellow border-0 bold font-14 py-2 mt-1">
                Starts 8th Oct <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
            <p className="lead light font-12 opacity mt-2">
              417,896 already enrolled
            </p>
          </div>
        </div>
      </section>
      <div className="header border">
        <div className="container">
          <ul style={{ display: "flex", alignItems: "center" }} className="p-0">
            <li className="mx-3 py-2 light dark font-14">About</li>
            <li className="mx-3 py-2 light dark font-14">How It Works</li>
            <li className="mx-3 py-2 light dark font-14">Courses</li>
            <li className="mx-3 py-2 light dark font-14">Enrolment Options</li>
            <li className="mx-3 py-2 light dark font-14">FAQ</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;
