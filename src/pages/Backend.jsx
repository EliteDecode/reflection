import React from "react";
import Slide from "react-reveal/Slide";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/Backend/banner/Banner";
import Learn from "../components/Backend/learn/Learn";
import HowItWorks from "../components/Backend/how_it_works/HowItWorks";
import Courses from "../components/Backend/courses/Courses";
import Faq from "../components/Backend/faq/Faq";

const Backend = () => {
  return (
    <>
      <Navbar />
      <Slide bottom>
        <Banner />
        <Learn />
        <HowItWorks />
        <Courses />
        <Faq />
      </Slide>
      <Footer />
    </>
  );
};

export default Backend;
