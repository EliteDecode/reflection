import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AcademyBanner from "../components/Academy/academy_banner/Academy_banner";
import Courses from "../components/Academy/courses/Courses";
const Academy = () => {
  return (
    <>
      <Navbar />
      <Fade bottom>
        <AcademyBanner />
        <Courses />
      </Fade>
      <Footer />
    </>
  );
};

export default Academy;
