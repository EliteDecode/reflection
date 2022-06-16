import React from "react";
import Slide from "react-reveal/Slide";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/Motion/banner/Banner";
import Learn from "../components/Motion/learn/Learn";
import HowItWorks from "../components/Motion/how_it_works/HowItWorks";
import Courses from "../components/Motion/courses/Courses";
import Faq from "../components/Motion/faq/Faq";

const Motion = () => {
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

export default Motion;
