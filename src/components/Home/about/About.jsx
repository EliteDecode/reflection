import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import "../../../index.css";
import "./about.css";

import image from "../../../assets/about.png";

const About = () => {
  const navigate = useNavigate();
  function pushAbout() {
    navigate("/about");
  }
  return (
    <section className="about py-5 m-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4 about_img">
            <img src={image} alt="" className=" w-100 " />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 about_content">
            <div className=" ">
              <div className="about-content ">
                <h1 className="blue bold " style={{ fontSize: "23px" }}>
                  ABOUT US
                </h1>
                <p className=" font-16 para1">
                  Reflection.com.ng is a technology company that focuses on tech
                  career coaching, online advertising, EdTech, Software
                  Development. We help build brands in all tech area. Our team
                  cut across Brand identity designers, Graphic Designers, UI/UX
                  Designers, Mobile App Developers, Web Developers, Desktop App
                  Developers and...
                </p>

                <button
                  className="btn btn-reflection bold mt-4"
                  onClick={pushAbout}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
