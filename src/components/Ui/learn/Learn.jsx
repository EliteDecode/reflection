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
                Follow the design process: empathize with users, define pain
                points, ideate solutions, create wireframes and prototypes, test
                and iterate on designs
              </p>

              <p className="  font-16 light opacity ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="yellow font-16 mx-1 bold"
                />{" "}
                Apply foundational UX concepts, like user-centered design,
                accessibility, and equity-focused design
              </p>

              <p className="  font-16 light opacity ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="yellow font-16 mx-1 bold"
                />
                Understand the basics of UX research, like planning research
                studies, conducting interviews and usability studies, and
                synthesizing research results
              </p>

              <p className="  font-16 light opacity ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="yellow font-16 mx-1 bold"
                />{" "}
                Create a professional UX portfolio that includes 3 end-to-end
                projects: a mobile app, a responsive website, and a
                cross-platform experience
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
                User Experience (UX)
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                UX Research
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Low Fidelity Wireframe
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                High Fidelity Wireframe
              </span>

              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                User Interface (UI)
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Prototyping
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                User Experience Design (UXD)
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                User Interface (UID)
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Usability Testing
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Mockup
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Figma
              </span>
              <span
                className="border light bg-gray dark font-12 "
                style={{ borderRadius: "30px" }}
              >
                Adobe XD
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
                      Begginer Level
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
