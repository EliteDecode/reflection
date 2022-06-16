import React from "react";
import mission from "../../../assets/misson.png";
import vision from "../../../assets/vision.png";
import corevalue from "../../../assets/core-value.png";

import "./vision.css";

const Vision = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-4 mb-5 text-center vis">
            <img src={mission} alt="Mission statement" className="p-0" />

            <h1 className="blue bold " style={{ fontSize: "17px" }}>
              Mission
            </h1>
            <p className="lead light font-14 ">
              To become Africa No 1 Tech training <br /> Platform for both Kids
              & teenagers
            </p>
          </div>
          <div className="col-lg-4 mb-5 text-center vis">
            <img src={vision} alt="Mission statement" className="p-0" />

            <h1 className="blue bold " style={{ fontSize: "17px" }}>
              Vision
            </h1>
            <p className="lead light font-14 ">
              To become Africa No 1 Tech training <br /> Platform for both Kids
              & teenagers in Africa
            </p>
          </div>
          <div className="col-lg-4 mb-5 text-center vis">
            <img src={corevalue} alt="Mission statement" className="p-0" />

            <h1 className="blue bold " style={{ fontSize: "17px" }}>
              corevalue
            </h1>
            <p className="lead light font-14 ">
              professionalism, capability, clarity, assurance <br /> and
              competency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
