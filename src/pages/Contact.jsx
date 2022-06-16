import React from "react";
import Fade from "react-reveal/Slide";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Maps from "../components/Contact/map/Maps";
import Form from "../components/Contact/form/Form";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Fade bottom>
        <Maps />
        <Form />
      </Fade>
      <Footer />
    </>
  );
};

export default Contact;
