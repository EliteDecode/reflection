import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Academy from "./pages/Academy";
import Graphics from "./pages/Graphics";
import Frontend from "./pages/Frontend";
import Mobile from "./pages/Mobile";
import Ui from "./pages/Ui";
import Motion from "./pages/Motion";
import Backend from "./pages/Backend";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/academy" element={<Academy />}></Route>
      <Route exact path="/graphics" element={<Graphics />}></Route>
      <Route exact path="/Motion_graphics" element={<Motion />}></Route>
      <Route exact path="/Ui_designs" element={<Ui />}></Route>
      <Route exact path="/FrontendDevelopment" element={<Frontend />}></Route>
      <Route exact path="/BackendDevelopment" element={<Backend />}></Route>
      <Route exact path="/MobileDevelopment" element={<Mobile />}></Route>
    </Routes>
  </Router>
);
