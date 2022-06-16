import React from "react";
import Fade from "react-reveal/Fade";

import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Home/banner/Banner";
import About from "../components/Home/about/About";
import Team from "../components/Home/team/Team";
import Blogs from "../components/Home/bloggers/Blogs";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Fade bottom>
        <Banner />
        <About />
        <Team />
        <Blogs />
      </Fade>
      <Footer />
    </>
  );
};

export default Home;
