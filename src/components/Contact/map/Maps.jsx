import React from "react";
import "./map.css";

const Maps = () => {
  return (
    <section className="">
      <div className="container py-5 ">
        <h1 className="dark bold opacity   font-18">
          You are welcome to walk into any of our offices.
        </h1>

        <div className="address mt-5">
          <h1 className="dark bold opacity  font-16">Reflection HQ</h1>
          <p className="lead light opacity font-14 dark">
            No. 16 Ozigbo Street, off Ekenhuan Road, Benin City, Edo State,
            Nigeria.
          </p>
        </div>
        <div className="address mt-5">
          <h1 className="dark bold opacity  font-16">Open Hours</h1>
          <p className="lead light opacity font-14 dark">
            Mondays to Fridays: 9:00AM - 5:00PM <br /> Saturdays: 10:00AM -
            5:00PM
          </p>
          <h1 className="dark bold opacity  font-14">Phone Numbers</h1>
          <p className="lead light opacity font-12 " style={{ color: "red" }}>
            081123846733, 081123846733
          </p>
        </div>

        <div className="map_img border" style={{ height: "400px" }}></div>
        <button className="btn btn-reflection light text-uppercase">
          Open Map
        </button>
      </div>
    </section>
  );
};

export default Maps;
