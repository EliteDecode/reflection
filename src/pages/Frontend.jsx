import React from "react";
import Slide from "react-reveal/Slide";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/Frontend/banner/Banner";
import Learn from "../components/Frontend/learn/Learn";
import HowItWorks from "../components/Frontend/how_it_works/HowItWorks";
import Courses from "../components/Frontend/courses/Courses";
import Faq from "../components/Frontend/faq/Faq";

const Frontend = () => {
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

export default Frontend;
