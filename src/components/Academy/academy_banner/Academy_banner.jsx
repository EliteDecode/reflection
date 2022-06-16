import React from "react";

import image from "../../../assets/js.png";
import image2 from "../../../assets/girljs.png";

import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import "./academy_banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Academy_banner = () => {
  return (
    <section className=" py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ">
            <div className=" ">
              <p className="lead  font-18 bold">Welcome To</p>
              <h1 className="blue bold " style={{ fontSize: "23px" }}>
                Reflection Academy
              </h1>
              <p className=" font-16 para1 hide_p">
                Over the years you'll agree with us that Children/Teenagers have
                not been carried along in the Nigeria tech industry, hence you
                see people starting up a career in tech in their early / mid 20s
                which is however not a bad idea but the truth is it could have
                been better if we had these same persons coming into the tech
                space early enough developing passion and becoming more
                intentional about it so that before they even get to their early
                20s they would have become Pros doing amazingly well in their
                chosen fields.
                <br />
                <br />
                This here is the problem Reflection has come to solve. As a
                brand, we are passionate about getting young kids /Teenagers
                into tech, and projecting that in the near future we will have
                more young folks in tech that we are having now.
              </p>
              <i className="blue light mt-3 " style={{ fontSize: "16px" }}>
                Motto: power of the next generation
              </i>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb-4 text-center hide_bg academy_banner_img">
            <img src={image} alt="" className="  " style={{ width: "80%" }} />
          </div>
        </div>
      </div>

      {/* Second block */}
      <div className="py-4 ab mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 text-center academy_banner_img">
              <img
                src={image2}
                alt=""
                className="  "
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ">
              <div className=" ">
                <h1 className="dark bold " style={{ fontSize: "23px" }}>
                  Take the first step <br /> toward your Tech career
                </h1>
                <p className=" font-16 para1 light">
                  Whatever your background or interests are, Professional
                  Certificates have you covered.
                </p>
                <div className="border container">
                  <div className="row mt-4">
                    <div className="col-6 p-3">
                      <FontAwesomeIcon
                        icon={faMedal}
                        style={{ fontSize: "35px" }}
                        className="my-2"
                      />
                      <h5 className=" font-14 dark bold">
                        Prior experience <br /> optional
                      </h5>
                      <p className=" font-10 para1 light">
                        Build job-ready skills, even if you're new to the field.
                      </p>
                    </div>
                    <div className="col-6 p-3">
                      <FontAwesomeIcon
                        icon={faCertificate}
                        style={{ fontSize: "35px" }}
                        className="my-2"
                      />
                      <h5 className=" font-14 dark bold">
                        Earn a valuable <br /> credential
                      </h5>
                      <p className=" font-10 para1 light">
                        Apply your new skills to real-world projects using the
                        latest industry tools and techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy_banner;
