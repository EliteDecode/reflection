import React from "react";
import Slide from "react-reveal/Slide";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/Ui/banner/Banner";
import Learn from "../components/Ui/learn/Learn";
import HowItWorks from "../components/Ui/how_it_works/HowItWorks";
import Courses from "../components/Ui/courses/Courses";
import Faq from "../components/Ui/faq/Faq";

const Ui = () => {
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

export default Ui;
