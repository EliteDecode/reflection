import React from "react";
import image from "../../../assets/learn.png";
import "./courses.css";

const Courses = () => {
  return (
    <section className="py-5  courses_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6  col-md-6 mb-5">
            <div className="course_img">
              <img
                src={image}
                alt="Course "
                style={{ width: "80%", marginLeft: "15%" }}
              />
            </div>
          </div>
          <div className="col-lg-6  col-md-6">
            <h1 className="bold opacity mb-3 " style={{ fontSize: "23px" }}>
              There are 5 Courses in this Professional Certificate
            </h1>

            <div className="course_title">
              <div className="course my-4">
                <h1 className="bold opacity font-18 p-0 m-0 ">Course 1</h1>
                <p className="  font-14 opacity  opacity p-0 m-0">
                  Foundations of User Experience (UX)
                </p>
              </div>
              <div className="course my-4">
                <h1 className="bold opacity font-18 p-0 m-0 ">Course 2</h1>
                <p className="  font-14 opacity  opacity p-0 m-0">
                  Start the UX Design Process: Empathize, Define, and Ideate
                </p>
              </div>
              <div className="course my-4">
                <h1 className="bold opacity font-18 p-0 m-0 ">Course 3</h1>
                <p className="  font-14 opacity  opacity p-0 m-0">
                  Build Wireframes and Low-Fidelity Prototypes
                </p>
              </div>
              <div className="course my-4">
                <h1 className="bold opacity font-18 p-0 m-0 ">Course 3</h1>
                <p className="  font-14 opacity  opacity p-0 m-0">
                  Conduct UX Research and Test Early Concepts
                </p>
              </div>
              <div className="course my-4">
                <h1 className="bold opacity font-18 p-0 m-0 ">Course 3</h1>
                <p className="  font-14 opacity  opacity p-0 m-0">
                  Create High-Fidelity Designs and Prototypes in Figma
                </p>
              </div>
              <div className="course my-4">
                <h1 className="bold opacity font-18 p-0 m-0 ">Course 3</h1>
                <p className="  font-14 opacity  opacity p-0 m-0">
                  Responsive Web Design in Adobe XD
                </p>
              </div>
              <div className="course my-4">
                <h1 className="bold opacity font-18 p-0 m-0 ">Course 3</h1>
                <p className="  font-14 opacity  opacity p-0 m-0">
                  Design a User Experience for Social Good & Prepare for Jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
