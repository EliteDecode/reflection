import React from "react";
import Slide from "react-reveal/Slide";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/Graphics/banner/Banner";
import Learn from "../components/Graphics/learn/Learn";
import HowItWorks from "../components/Graphics/how_it_works/HowItWorks";
import Courses from "../components/Graphics/courses/Courses";
import Faq from "../components/Graphics/faq/Faq";

const Graphics = () => {
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

export default Graphics;
