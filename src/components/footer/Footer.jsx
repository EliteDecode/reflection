import React from "react";
import logo from "../../assets/logo2.png";
import $ from "jquery";
import "./footer.css";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  var showdate = new Date();
  var displaytodaysdate = showdate.getFullYear();

  $("#date").html(displaytodaysdate);

  return (
    <>
      <section className="py-5 border bg-blue">
        <div className="container my-3">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-4">
              <img src={logo} alt="Logo" style={{ width: "50%" }} />;
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <h4 className="font-18 light white font-20">Company</h4>
              <ul className="white opacity font-14">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Address</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <h4 className="font-18 light white font-20">Explore Solutions</h4>
              <ul className="white opacity font-14">
                <li>SMS</li>
                <li>VTU</li>
                <li>Lookout</li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6 mb-4">
              <h4 className="font-18 light white font-20">Get In Touch</h4>
              <p className="light white opacity">Info@reflection.com.ng</p>
              <p className="light white opacity">+234 904 731 2726 </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center py-3 light font-18 copy">
        Copyright <FontAwesomeIcon icon={faCopyright} />
        {displaytodaysdate} Reflection. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
