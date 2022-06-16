import React from "react";
import graphic from "../../../assets/graphics.png";
import motion from "../../../assets/motion.png";
import uiux from "../../../assets/uiux.png";
import mobile from "../../../assets/mobile.png";
import frontend from "../../../assets/frontend.png";
import backend from "../../../assets/backend.png";

import { useNavigate } from "react-router-dom";

import "./courses.css";
const Courses = () => {
  const navigate = useNavigate();

  function pushGraphics() {
    navigate("/graphics");
  }
  function pushMotion() {
    navigate("/Motion_graphics");
  }
  function pushUi() {
    navigate("/Ui_designs");
  }
  function pushFrontend() {
    navigate("/FrontendDevelopment");
  }
  function pushBackend() {
    navigate("/BackendDevelopment");
  }
  function pushMobile() {
    navigate("/MobileDevelopment");
  }
  return (
    <section className=" py-5 mb-5">
      <div className="container">
        <div className="row">
          {/* Graphic design */}
          <div className="col-lg-4 mb-5 col-md-4 col-sm-6">
            <div className="card shadow course_card p-0">
              <img
                src={graphic}
                alt="Graphic Design"
                className=" card-img-top "
              />

              <div className="card-body px-5">
                <div className="card-title">
                  <h3 className=" bold dark font-14 mt-0"> Graphic Design</h3>
                </div>
                <div className="card-text font-12">
                  Make digital and physical products easier and more enjoyable
                  to use <br />
                  <br />
                  <b> If you like:</b> <br />
                  Understanding people <br /> Thinking creatively <br /> Problem
                  solving <br /> <br />
                  Then you should be doing this <br />
                  <span
                    onClick={pushGraphics}
                    className="blue light font-14 click"
                    style={{ cursor: "pointer" }}
                  >
                    Click here to access the course
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic design */}
          <div className="col-lg-4 mb-5 col-md-4 col-sm-6">
            <div className="card shadow course_card p-0">
              <img
                src={motion}
                alt="Graphic Design"
                className=" card-img-top "
              />

              <div className="card-body px-5">
                <div className="card-title">
                  <h3 className=" bold dark font-14 mt-0"> Motion Design</h3>
                </div>
                <div className="card-text font-12">
                  Make digital and physical products easier and more enjoyable
                  to use <br />
                  <br />
                  <b> If you like:</b> <br />
                  Understanding people <br /> Thinking creatively <br /> Problem
                  solving <br /> <br />
                  Then you should be doing this <br />
                  <span
                    onClick={pushMotion}
                    className="blue light font-14 click"
                    style={{ cursor: "pointer" }}
                  >
                    Click here to access the course
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ui Ux design */}
          <div className="col-lg-4 mb-5 col-md-4 col-sm-6">
            <div className="card shadow course_card p-0">
              <img src={uiux} alt="Graphic Design" className=" card-img-top " />

              <div className="card-body px-5">
                <div className="card-title">
                  <h3 className=" bold dark font-14 mt-0"> UI/UX Design</h3>
                </div>
                <div className="card-text font-12">
                  Make digital and physical products easier and more enjoyable
                  to use <br />
                  <br />
                  <b> If you like:</b> <br />
                  Understanding people <br /> Thinking creatively <br /> Problem
                  solving <br /> <br />
                  Then you should be doing this <br />
                  <span
                    onClick={pushUi}
                    className="blue light font-14 click"
                    style={{ cursor: "pointer" }}
                  >
                    Click here to access the course
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend developmnt */}
          <div className="col-lg-4 mb-5 col-md-4 col-sm-6">
            <div className="card shadow course_card p-0">
              <img
                src={frontend}
                alt="Graphic Design"
                className=" card-img-top "
              />

              <div className="card-body px-5">
                <div className="card-title">
                  <h3 className=" bold dark font-14 mt-0">
                    {" "}
                    Front End Development
                  </h3>
                </div>
                <div className="card-text font-12">
                  Make digital and physical products easier and more enjoyable
                  to use <br />
                  <br />
                  <b> If you like:</b> <br />
                  Understanding people <br /> Thinking creatively <br /> Problem
                  solving <br /> <br />
                  Then you should be doing this <br />
                  <span
                    onClick={pushFrontend}
                    className="blue light font-14 click"
                    style={{ cursor: "pointer" }}
                  >
                    Click here to access the course
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Backend developmnt */}
          <div className="col-lg-4 mb-5 col-md-4 col-sm-6">
            <div className="card shadow course_card p-0">
              <img
                src={backend}
                alt="Graphic Design"
                className=" card-img-top "
              />

              <div className="card-body px-5">
                <div className="card-title">
                  <h3 className=" bold dark font-14 mt-0">
                    {" "}
                    Back End Development
                  </h3>
                </div>
                <div className="card-text font-12">
                  Make digital and physical products easier and more enjoyable
                  to use <br />
                  <br />
                  <b> If you like:</b> <br />
                  Understanding people <br /> Thinking creatively <br /> Problem
                  solving <br /> <br />
                  Then you should be doing this <br />
                  <span
                    onClick={pushBackend}
                    className="blue light font-14 click"
                    style={{ cursor: "pointer" }}
                  >
                    Click here to access the course
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile development */}
          <div className="col-lg-4 mb-5 col-md-4 col-sm-6">
            <div className="card shadow course_card p-0">
              <img
                src={mobile}
                alt="Graphic Design"
                className=" card-img-top "
              />

              <div className="card-body px-5">
                <div className="card-title">
                  <h3 className=" bold dark font-14 mt-0">
                    {" "}
                    Mobile App Development
                  </h3>
                </div>
                <div className="card-text font-12">
                  Make digital and physical products easier and more enjoyable
                  to use <br />
                  <br />
                  <b> If you like:</b> <br />
                  Understanding people <br /> Thinking creatively <br /> Problem
                  solving <br /> <br />
                  Then you should be doing this <br />
                  <span
                    onClick={pushMobile}
                    className="blue light font-14 click"
                    style={{ cursor: "pointer" }}
                  >
                    Click here to access the course
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
