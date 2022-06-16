import React from "react";
import "./form.css";

const Form = () => {
  return (
    <section className="border py-5 contact">
      <div className="container">
        <h1 className="dark  text-center mb-5 bold opacity  font-18">
          {" "}
          Fill out the form below and we will be in touch within 24hrs.
        </h1>

        <form className="contact_form">
          <div className="form-row ">
            <div className="col-md-12 mb-3">
              <label className="light font-14" for="subject">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name of subject"
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="light font-14" for="fullname">
                FullName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your FullName"
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="light font-14" for="subject">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="light font-14" for="validationServer02">
                Message
              </label>
              <textarea
                name=""
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Type Your Message"
                id="message"
              ></textarea>
            </div>
          </div>
          <button className="btn btn-reflection bold text-uppercase">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
