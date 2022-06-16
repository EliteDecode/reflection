import React from "react";
import Carousel from "react-elastic-carousel";

import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./how_it_works.css";

const breaks = [
  { width: 1, itemsToShow: 1 },
  { width: 576, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 998, itemsToShow: 3 },
];

const HowItWorks = () => {
  return (
    <section className="py-4">
      <div className=" py-5 learn">
        <div className="container">
          <h1 className="bold opacity " style={{ fontSize: "23px" }}>
            Applied Learning Project
          </h1>
          <p className="  font-14 opacity mt-3 opacity">
            Learners will work on hands-on exercises, culminating in development
            of a full-fledged application at the end of each course. Each course
            also includes a mini-Capstone Project as part of the Honors Track
            where you’ll apply your skills to build a fully functional project.
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <div class="row">
          <Carousel breakPoints={breaks} enableAutoPlay autoPlaySpeed={2500}>
            <div
              class=" shadow border blog mb-3 p-3 mx-2 "
              style={{ borderRadius: "10px" }}
            >
              <p className="lead font-16 light para1">
                <FontAwesomeIcon icon={faQuoteLeft} /> designers, Graphic
                Designers, UI/UX Designers, Mobile App Developers, Web
                Developers, Desktop App Developers and okay{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <h3 className="bold blue font-18">Ehiosun Bishop</h3>
            </div>
            <div
              class=" shadow border blog mb-3 p-3 mx-2 "
              style={{ borderRadius: "10px" }}
            >
              <p className="lead font-16 light para1">
                <FontAwesomeIcon icon={faQuoteLeft} /> designers, Graphic
                Designers, UI/UX Designers, Mobile App Developers, Web
                Developers, Desktop App Developers and okay{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <h3 className="bold blue font-18">Ehiosun Bishop</h3>
            </div>
            <div
              class=" shadow border blog mb-3 p-3 mx-2 "
              style={{ borderRadius: "10px" }}
            >
              <p className="lead font-16 light para1">
                <FontAwesomeIcon icon={faQuoteLeft} /> designers, Graphic
                Designers, UI/UX Designers, Mobile App Developers, Web
                Developers, Desktop App Developers and okay{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <h3 className="bold blue font-18">Ehiosun Bishop</h3>
            </div>
            <div
              class=" shadow border blog mb-3 p-3 mx-2 "
              style={{ borderRadius: "10px" }}
            >
              <p className="lead font-16 light para1">
                <FontAwesomeIcon icon={faQuoteLeft} /> designers, Graphic
                Designers, UI/UX Designers, Mobile App Developers, Web
                Developers, Desktop App Developers and okay{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <h3 className="bold blue font-18">Ehiosun Bishop</h3>
            </div>
            <div
              class=" shadow border blog mb-3 p-3 mx-2 "
              style={{ borderRadius: "10px" }}
            >
              <p className="lead font-16 light para1">
                <FontAwesomeIcon icon={faQuoteLeft} /> designers, Graphic
                Designers, UI/UX Designers, Mobile App Developers, Web
                Developers, Desktop App Developers and okay{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <h3 className="bold blue font-18">Ehiosun Bishop</h3>
            </div>
            <div
              class=" shadow border blog mb-3 p-3 mx-2 "
              style={{ borderRadius: "10px" }}
            >
              <p className="lead font-16 light para1">
                <FontAwesomeIcon icon={faQuoteLeft} /> designers, Graphic
                Designers, UI/UX Designers, Mobile App Developers, Web
                Developers, Desktop App Developers and okay{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <h3 className="bold blue font-18">Ehiosun Bishop</h3>
            </div>
            <div
              class=" shadow border blog mb-3 p-3 mx-2 "
              style={{ borderRadius: "10px" }}
            >
              <p className="lead font-16 light para1">
                <FontAwesomeIcon icon={faQuoteLeft} /> designers, Graphic
                Designers, UI/UX Designers, Mobile App Developers, Web
                Developers, Desktop App Developers and okay{" "}
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <h3 className="bold blue font-18">Ehiosun Bishop</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
