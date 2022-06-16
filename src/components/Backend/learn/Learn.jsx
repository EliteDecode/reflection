import React from "react";
import "./learn.css";
import { faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Learn = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 py-3 ">
            <div className="benefits p-4 border">
              <h5 className="opacity font-16 para2 bold">
                WHAT YOU WILL LEARN
              </h5>

              <p className="  font-16 light opacity ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="yellow font-16 mx-1 bold"
                />
                Describe the Application Development Ecosystem and terminology
                like front-end developer, back-end, server-side, and full stack.
              </p>

              <p className="  font-16 light opacity ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="yellow font-16 mx-1 bold"
                />{" "}
                Identify the developer tools and IDEs used by web programmers.
              </p>

              <p className="  font-16 light opacity ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="yellow font-16 mx-1 bold"
                />
                Create basic web pages by using HTML and CSS.
              </p>

              <p className="  font-16 light opacity ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="yellow font-16 mx-1 bold"
                />{" "}
                Develop interactive web pages using JavaScript.
              </p>
            </div>
            <div className="benefits p-4 border mt-2">
              <h5 className="opacity font-16 para2 bold mb-3">
                SKILLS YOU WILL GAIN
              </h5>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Hypertext Preprocessor (PHP)
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Html
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Git (Software)
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Cascading Style Sheets (CCS)
              </span>

              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Cloud Applications
              </span>
            </div>
          </div>

          <div className="col-lg-5 ">
            <div className="py-3 px-2 ">
              <div
                className="border p-4 bg-gray d-flex"
                style={{
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faSignsPost}
                  className="font-22 bold p-3 yellow bg-blue rounded-circle"
                />
                <h5 className="opacity font-16 dark bold mx-3 ">
                  LEARNER CAREER OUTCOMES
                </h5>
              </div>
              <div className="border outcomes">
                <ul className="p-3 ">
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faMedal}
                      className=" font-16 yellow bold  rounded-circle"
                    />
                    <span className="lead light font-16 mx-1">
                      {" "}
                      Shareable Certificate
                    </span>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faEarth}
                      className=" font-16 yellow bold  rounded-circle"
                    />
                    <span className="lead light font-16 mx-1">
                      {" "}
                      100% online courses
                    </span>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className=" font-16 yellow bold  rounded-circle"
                    />
                    <span className="lead light font-16 mx-1">
                      {" "}
                      Flexible Schedule
                    </span>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faBarChart}
                      className=" font-16 yellow bold  rounded-circle"
                    />
                    <span className="lead light font-16 mx-1">
                      {" "}
                      Beginner Level
                    </span>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faClock}
                      className=" font-16 yellow bold  rounded-circle"
                    />
                    <span className="lead light font-16 mx-1">
                      {" "}
                      Approximately 6 months to complete
                    </span>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faComment}
                      className=" font-16 yellow bold  rounded-circle"
                    />
                    <span className="lead light font-16 mx-1"> English</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
