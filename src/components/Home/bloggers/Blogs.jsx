import React from "react";
import Carousel from "react-elastic-carousel";
import "./blog.css";

import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const breaks = [
  { width: 1, itemsToShow: 1 },
  { width: 576, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 998, itemsToShow: 3 },
];

const Blogs = () => {
  return (
    <section className="bloggers mt-3 py-5">
      <div className="container">
        <h1 className="blue bold  text-center" style={{ fontSize: "23px" }}>
          Users Feedbacks
        </h1>

        <div class=" p-3 ">
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
      </div>
    </section>
  );
};

export default Blogs;
