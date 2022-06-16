import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Abanner from "../components/About/about_banner/Abanner";
import Vision from "../components/About/vision/Vision";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Fade bottom>
        <Abanner />
        <Vision />
      </Fade>
      <Footer />
    </>
  );
};

export default About;
