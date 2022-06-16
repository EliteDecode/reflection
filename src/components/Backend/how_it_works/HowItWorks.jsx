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
            In this course, you'll explore the basic structure of a web
            application, and how a web browser interacts with a web server.
            You'll be introduced to the request/response cycle, including
            GET/POST/Redirect. You'll also gain an introductory understanding of
            Hypertext Markup Language (HTML), as well as the basic syntax and
            data structures of the PHP language, variables, logic, iteration,
            arrays, error handling, and superglobal variables, among other
            elements.
            <br />
            An introduction to Cascading Style Sheets (CSS) will allow you to
            style markup for webpages. Lastly, you'll gain the skills and
            knowledge to install and use an integrated PHP/MySQL environment
            like XAMPP or MAMP.
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
