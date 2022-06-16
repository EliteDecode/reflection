import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./banner.css";
import "../../../index.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="content">
          <p className="lead">Welcome to</p>
          <h1 className="bold blue">
            Reflection <br />
            Universe{" "}
          </h1>
          <p className="lead light text-uppercase ">Build your reality</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
