import React from "react";

import nyore from "../../../assets/nyore.png";
import bishop from "../../../assets/bishop.png";
import female from "../../../assets/female.png";
import man from "../../../assets/man.png";
import skin from "../../../assets/skin.png";
import fone from "../../../assets/fone.png";
import f2 from "../../../assets/f2.png";

import "./team.css";

const Team = () => {
  return (
    <section className="py-5  team">
      <div className="container">
        <div className="header">
          <h1 className="blue bold header_text" style={{ fontSize: "23px" }}>
            Meet Our Team
          </h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 team-card col-md-3 col-sm-6  p-3">
            <div className="card shadow" style={{ borderRadius: "10px" }}>
              <div className="card-img card-imgT  text-center" variant="top">
                <img
                  src={nyore}
                  alt="Nyore Usiaphrerakpor"
                  className="border mt-2 "
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
              <div className="card-body card-bodyT px-5">
                <div className="card-title card-titleT">
                  <h3
                    className=" bold blue font-18 mt-0"
                    style={{ lineHeight: "1.2rem" }}
                  >
                    {" "}
                    Usiaphrerakpor Oghenenyore
                  </h3>
                </div>
                <div className="card-text card-textT lead font-12">
                  Co-Founder, CEO, CFO
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 team-card col-md-3 col-sm-6 p-3">
            <div className="card shadow" style={{ borderRadius: "10px" }}>
              <div className="card-img card-imgT  text-center" variant="top">
                <img
                  src={bishop}
                  alt="Nyore Usiaphrerakpor"
                  className="border mt-2 "
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
              <div className="card-body card-bodyT px-5">
                <div className="card-title card-titleT">
                  <h3
                    className=" bold blue font-18 mt-0"
                    style={{ lineHeight: "1.2rem" }}
                  >
                    {" "}
                    Ehiosun <br /> Bishop
                  </h3>
                </div>
                <div className="card-text card-textT lead font-12">
                  Co-Founder, CEO, CFO
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 team-card col-md-3 col-sm-6 p-3">
            <div className="card shadow" style={{ borderRadius: "10px" }}>
              <div className="card-img card-imgT  text-center" variant="top">
                <img
                  src={female}
                  alt="Nyore Usiaphrerakpor"
                  className="border mt-2 "
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
              <div className="card-body card-bodyT px-5">
                <div className="card-title card-titleT">
                  <h3
                    className=" bold blue font-18 mt-0"
                    style={{ lineHeight: "1.2rem" }}
                  >
                    {" "}
                    Usiaphrerakpor Oghenenyore
                  </h3>
                </div>
                <div className="card-text card-textT lead font-12">
                  Co-Founder, CEO, CFO
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 team-card col-md-3 col-sm-6 p-3">
            <div className="card shadow" style={{ borderRadius: "10px" }}>
              <div className="card-img card-imgT  text-center" variant="top">
                <img
                  src={man}
                  alt="Nyore Usiaphrerakpor"
                  className="border mt-2 "
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
              <div className="card-body card-bodyT px-5">
                <div className="card-title card-titleT">
                  <h3
                    className=" bold blue font-18 mt-0"
                    style={{ lineHeight: "1.2rem" }}
                  >
                    {" "}
                    Usiaphrerakpor Oghenenyore
                  </h3>
                </div>
                <div className="card-text card-textT lead font-12">
                  Co-Founder, CEO, CFO
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 team-card col-md-3 col-sm-6  ">
            <div className="card shadow" style={{ borderRadius: "10px" }}>
              <div className="card-img card-imgT  text-center" variant="top">
                <img
                  src={skin}
                  alt="Nyore Usiaphrerakpor"
                  className="border mt-2 "
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
              <div className="card-body card-bodyT px-5">
                <div className="card-title card-titleT">
                  <h3
                    className=" bold blue font-18 mt-0"
                    style={{ lineHeight: "1.2rem" }}
                  >
                    {" "}
                    Usiaphrerakpor Oghenenyore
                  </h3>
                </div>
                <div className="card-text card-textT lead font-12">
                  Co-Founder, CEO, CFO
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 team-card col-md-3 col-sm-6   ">
            <div className="card shadow" style={{ borderRadius: "10px" }}>
              <div className="card-img card-imgT  text-center" variant="top">
                <img
                  src={fone}
                  alt="Nyore Usiaphrerakpor"
                  className="border mt-2 "
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
              <div className="card-body card-bodyT px-5">
                <div className="card-title card-titleT">
                  <h3
                    className=" bold blue font-18 mt-0"
                    style={{ lineHeight: "1.2rem" }}
                  >
                    {" "}
                    Usiaphrerakpor Oghenenyore
                  </h3>
                </div>
                <div className="card-text card-textT lead font-12">
                  Co-Founder, CEO, CFO
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 team-card col-md-3 col-sm-6   ">
            <div className="card shadow" style={{ borderRadius: "10px" }}>
              <div className="card-img card-imgT  text-center" variant="top">
                <img
                  src={f2}
                  alt="Nyore Usiaphrerakpor"
                  className="border mt-2 "
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
              <div className="card-body card-bodyT px-5">
                <div className="card-title card-titleT">
                  <h3
                    className=" bold blue font-18 mt-0"
                    style={{ lineHeight: "1.2rem" }}
                  >
                    {" "}
                    Usiaphrerakpor Oghenenyore
                  </h3>
                </div>
                <div className="card-text card-textT lead font-12">
                  Co-Founder, CEO, CFO
                </div>
              </div>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default Team;
