import React from "react";
import Slide from "react-reveal/Slide";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/Mobile/banner/Banner";
import Learn from "../components/Mobile/learn/Learn";
import HowItWorks from "../components/Mobile/how_it_works/HowItWorks";
import Courses from "../components/Mobile/courses/Courses";
import Faq from "../components/Mobile/faq/Faq";

const Mobile = () => {
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

export default Mobile;
