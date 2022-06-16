import React from "react";
import "./abanner.css";

import image from "../../../assets/abot_about.png";
const Abanner = () => {
  return (
    <section className="py-5">
      <div className="container py-2 my-3">
        <h1 className="blue bold  text-center " style={{ fontSize: "23px" }}>
          We Are Reflection
        </h1>
        <div className=" py-5 container banner_content mt-5  text-center">
          <h6 className="bold dark opacity py-3 " style={{ fontSize: "22px" }}>
            Power Of Next Generation
          </h6>
          <p className="lead light font-18 py-3">
            We believe the future holds alot in tech At reflection we prepare
            you for it
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4 about_img mt-5">
            <img src={image} alt="" className=" w-75 " />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 about_content">
            <div className=" ">
              <div className="about-contents mt-3 ">
                <h1 className="blue bold " style={{ fontSize: "23px" }}>
                  Reflection.com.ng
                </h1>
                <p className=" font-15 para1 ">
                  It's a technology company that focuses on tech career
                  coaching, online advertising, EdTech, Software Development. We
                  help build brands in all tech area. Our team cut across Brand
                  identity designers, Graphic Designers, UI/UX Designers, Mobile
                  App Developers, Web Developers, and Desktop App Developers.We
                  are also building up an academy were we train young
                  individuals in the above mentioned tech skills. We are a
                  startup gradually moving into dominating the Africa tech
                  space.
                </p>

                <button className="btn btn-reflection bold mt-4 disabled">
                  Welcome
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abanner;
